/// <reference path="./android.def.d.ts" />
import { Common, QueryRequest, ResponseItem } from './health-data.common';
import * as utils from 'tns-core-modules/utils/utils';
import * as application from 'tns-core-modules/application';

const GOOGLE_FIT_PERMISSIONS_REQUEST_CODE = 1;

declare const com: any;

// android imports
const DataReadRequest = com.google.android.gms.fitness.request.DataReadRequest;
const DataType = com.google.android.gms.fitness.data.DataType;
const Fitness = com.google.android.gms.fitness.Fitness;
const GoogleApiAvailability = com.google.android.gms.common.GoogleApiAvailability;
const PackageManager = android.content.pm.PackageManager;
const TimeUnit = java.util.concurrent.TimeUnit;
const FitnessOptions = com.google.android.gms.fitness.FitnessOptions;
const GoogleSignIn = com.google.android.gms.auth.api.signin.GoogleSignIn;

export class HealthData extends Common {
  isAvailable(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // first check that the Google APIs are available
      let gApi = GoogleApiAvailability.getInstance();
      let apiResult = gApi.isGooglePlayServicesAvailable(utils.ad.getApplicationContext());
      if (apiResult === com.google.android.gms.common.ConnectionResult.SUCCESS) {
        // TODO this is actually not relevant:
        // then check that Google Fit is actually installed
        let pm = utils.ad.getApplicationContext().getPackageManager() as android.content.pm.PackageManager;
        try {
          pm.getPackageInfo('com.google.android.apps.fitness', PackageManager.GET_ACTIVITIES);
          resolve(true);
        } catch (e) {
          console.log('Google fit is not intalled!');
          resolve(false);
        }
      } else {
        console.log("apparently you don't have Google apis installed");
        resolve(false);
      }
    });
  }

  query(opts: QueryRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        let readRequest = new DataReadRequest.Builder()
        // using 'read' instead of 'aggregate' for now, for more finegrain control
        //     .aggregate(DataType.TYPE_STEP_COUNT_DELTA, DataType.AGGREGATE_STEP_COUNT_DELTA)
            .read(this.getDataType(opts.dataType))
            .setTimeRange(opts.startDate.getTime(), opts.endDate.getTime(), TimeUnit.MILLISECONDS)
            // if we don't get distinct sources here, then do bucketBySession and calculate it ourselves (like on iOS)
            // .bucketByTime(1, TimeUnit.DAYS)
            .build();

        Fitness.getHistoryClient(application.android.currentContext, GoogleSignIn.getLastSignedInAccount(application.android.currentContext))
            .readData(readRequest)
            .addOnSuccessListener(new com.google.android.gms.tasks.OnSuccessListener({
              onSuccess: (dataReadResponse: any /* com.google.android.gms.fitness.result.DataReadResponse */) => {
                console.log(">>>>> read success: " + dataReadResponse);
                resolve(this.parseData(dataReadResponse.getResult()));
              }
            }))
            .addOnFailureListener(new com.google.android.gms.tasks.OnFailureListener({
              onFailure: (exception: any) => {
                console.log(">>>>> read exception: " + exception);
                reject(exception.getMessage());
              }
            }))
            .addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
              onComplete: (task: any) => {
                console.log(">>>>> read complete");
              }
            }));
      } catch (e) {
        console.log(">>>>> quering, error: " + e);
        reject(e);
        return;
      }
    });
  }

  private parseData(readResult: com.google.android.gms.fitness.result.DataReadResult) {
    let result = [];
    if (readResult.getBuckets().size() > 0) {
      for (let indexBucket = 0; indexBucket < readResult.getBuckets().size(); indexBucket++) {
        console.log(readResult.getBuckets().get(indexBucket));
        let dataSets = readResult.getBuckets().get(indexBucket).getDataSets();
        for (let indexDataSet = 0; indexDataSet < dataSets.size(); indexDataSet++) {
          result = result.concat(this.dumpDataSet(dataSets.get(indexDataSet)));
        }
      }
    } else if (readResult.getDataSets().size() > 0) {
      for (let index = 0; index < readResult.getDataSets().size(); index++) {
        result = result.concat(this.dumpDataSet(readResult.getDataSets().get(index)));
      }
    }
    return result;
  }

  private dumpDataSet(dataSet: com.google.android.gms.fitness.data.DataSet) {
    let result = [];
    let dateFormat = java.text.DateFormat.getTimeInstance();
    const source = dataSet.getDataSource().getName();
    for (let index = 0; index < dataSet.getDataPoints().size(); index++) {
      let pos = dataSet.getDataPoints().get(index);

      for (let indexField = 0; indexField < pos.getDataType().getFields().size(); indexField++) {
        let field = pos.getDataType().getFields().get(indexField);
        const value = pos.getValue(field);
        result.push(<ResponseItem>{
          start: new Date(pos.getStartTime(TimeUnit.MILLISECONDS)),
          end: new Date(pos.getEndTime(TimeUnit.MILLISECONDS)),
          // https://developers.google.com/android/reference/com/google/android/gms/fitness/data/Value
          value: value.getFormat() === 1 ? value.asInt() : value.asFloat(),
          source: source
        });
      }
    }
    return result;
  }

  isAuthorized(constToRead: string) {
  }

  private getDataType(pluginType: string): com.google.android.gms.fitness.data.DataType {
    // TODO check if the passed type is ok
    const typeOfData = acceptableDataTypesForCommonity[pluginType];
    const dataType = aggregatedDataTypes[typeOfData];
    console.log(">>>> resolved dataType: " + dataType);
    return dataType;
  }

  requestAuthorization(type: string | string[]): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const fitnessOptionsBuilder = FitnessOptions.builder();

      if (typeof(type) === "string") {
        fitnessOptionsBuilder.addDataType(this.getDataType(type), FitnessOptions.ACCESS_READ)
      } else {
        type.forEach(t => fitnessOptionsBuilder.addDataType(this.getDataType(t), FitnessOptions.ACCESS_READ));
      }

      const fitnessOptions = fitnessOptionsBuilder.build();

      if (GoogleSignIn.hasPermissions(GoogleSignIn.getLastSignedInAccount(application.android.currentContext), fitnessOptions)) {
        resolve(true);
        return;
      }

      const activityResultHandler = (args: application.AndroidActivityResultEventData) => {
        application.android.off(application.AndroidApplication.activityResultEvent, activityResultHandler);
        resolve(args.requestCode === GOOGLE_FIT_PERMISSIONS_REQUEST_CODE && args.resultCode === android.app.Activity.RESULT_OK);
      };
      application.android.on(application.AndroidApplication.activityResultEvent, activityResultHandler);

      GoogleSignIn.requestPermissions(
          application.android.foregroundActivity,
          GOOGLE_FIT_PERMISSIONS_REQUEST_CODE,
          GoogleSignIn.getLastSignedInAccount(application.android.currentContext),
          fitnessOptions);
    });
  }
}

export const aggregatedDataTypes = {
  TYPE_STEP_COUNT_DELTA: DataType.AGGREGATE_STEP_COUNT_DELTA,
  TYPE_DISTANCE_DELTA: DataType.AGGREGATE_DISTANCE_DELTA,
  TYPE_CALORIES_EXPENDED: DataType.AGGREGATE_CALORIES_EXPENDED,
  TYPE_HEIGHT: DataType.TYPE_HEIGHT, // TODO or AGGREGATE_HEIGHT_SUMMARY
  TYPE_WEIGHT: DataType.AGGREGATE_WEIGHT_SUMMARY,
  "TYPE_HEART_RATE_BPM": DataType.AGGREGATE_HEART_RATE_SUMMARY,
  TYPE_BODY_FAT_PERCENTAGE: DataType.AGGREGATE_BODY_FAT_PERCENTAGE_SUMMARY,
  TYPE_NUTRITION: DataType.AGGREGATE_NUTRITION_SUMMARY
};

export const acceptableDataTypesForCommonity = {
  steps: 'TYPE_STEP_COUNT_DELTA',
  distance: 'TYPE_DISTANCE_DELTA',
  calories: 'TYPE_CALORIES_EXPENDED',
  // "activity": DataType.TYPE_ACTIVITY_SEGMENT,
  height: 'TYPE_HEIGHT',
  weight: 'TYPE_WEIGHT',
  heartRate: 'TYPE_HEART_RATE_BPM',
  fatPercentage: 'TYPE_BODY_FAT_PERCENTAGE'
  // "nutrition": "TYPE_NUTRITION",
};
