import {
  Common,
  HealthDataApi,
  HealthDataType,
  QueryRequest,
  ResponseItem,
  StartMonitoringRequest,
  StopMonitoringRequest
} from './health-data.common';
import * as utils from 'tns-core-modules/utils/utils';
import { ad } from 'tns-core-modules/utils/utils';
import * as application from 'tns-core-modules/application';
import getApplicationContext = ad.getApplicationContext;

const GOOGLE_FIT_PERMISSIONS_REQUEST_CODE = 2;

declare const android, com, global: any;

const AppPackageName = useAndroidX() ? global.androidx.core.app : android.support.v4.app;
const ContentPackageName = useAndroidX() ? global.androidx.core.content : android.support.v4.content;

function useAndroidX () {
  return global.androidx && global.androidx.appcompat;
}

// android imports
const DataReadRequest = com.google.android.gms.fitness.request.DataReadRequest;
const DataSource = com.google.android.gms.fitness.data.DataSource;
const DataType = com.google.android.gms.fitness.data.DataType;
const Fitness = com.google.android.gms.fitness.Fitness;
const GoogleApiAvailability = com.google.android.gms.common.GoogleApiAvailability;
const TimeUnit = java.util.concurrent.TimeUnit;
const FitnessOptions = com.google.android.gms.fitness.FitnessOptions;
const GoogleSignIn = com.google.android.gms.auth.api.signin.GoogleSignIn;

export class HealthData extends Common implements HealthDataApi {
  isAvailable(updateGooglePlayServicesIfNeeded = true): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const gApi = GoogleApiAvailability.getInstance();
      const apiResult = gApi.isGooglePlayServicesAvailable(utils.ad.getApplicationContext());
      const available = apiResult === com.google.android.gms.common.ConnectionResult.SUCCESS;
      if (!available && updateGooglePlayServicesIfNeeded && gApi.isUserResolvableError(apiResult)) {
        // show a dialog offering the user to update (no need to wait for it to finish)
        gApi.showErrorDialogFragment(application.android.foregroundActivity || application.android.startActivity, apiResult, 1, new android.content.DialogInterface.OnCancelListener({
          onCancel: dialogInterface => console.log("Google Play Services update dialog was canceled")
        }));
      }
      resolve(available);
    });
  }

  isAuthorized(types: Array<HealthDataType>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const fitnessOptionsBuilder = FitnessOptions.builder();

      types.filter(t => t.accessType === "read" || t.accessType === "readAndWrite")
          .forEach(t => fitnessOptionsBuilder.addDataType(this.getDataType(t.name), FitnessOptions.ACCESS_READ));
      types.filter(t => t.accessType === "write" || t.accessType === "readAndWrite")
          .forEach(t => fitnessOptionsBuilder.addDataType(this.getDataType(t.name), FitnessOptions.ACCESS_WRITE));

      resolve(GoogleSignIn.hasPermissions(
          GoogleSignIn.getLastSignedInAccount((application.android.foregroundActivity || application.android.startActivity)),
          fitnessOptionsBuilder.build()));
    });
  }

  requestAuthorization(types: Array<HealthDataType>): Promise<boolean> {
    return Promise.all([
      this.requestHardwarePermissions(),
      this.requestAuthorizationInternal(types)
    ]).then(results => Promise.resolve(results[0] && results[1]));
  }

  requestAuthorizationInternal(types: Array<HealthDataType>): Promise<boolean> {    return new Promise<boolean>((resolve, reject) => {
      const fitnessOptionsBuilder = FitnessOptions.builder();

      types.filter(t => t.accessType === "read" || t.accessType === "readAndWrite")
          .forEach(t => fitnessOptionsBuilder.addDataType(this.getDataType(t.name), FitnessOptions.ACCESS_READ));
      types.filter(t => t.accessType === "write" || t.accessType === "readAndWrite")
          .forEach(t => fitnessOptionsBuilder.addDataType(this.getDataType(t.name), FitnessOptions.ACCESS_WRITE));

      const fitnessOptions = fitnessOptionsBuilder.build();

      if (GoogleSignIn.hasPermissions(GoogleSignIn.getLastSignedInAccount((application.android.foregroundActivity || application.android.startActivity)), fitnessOptions)) {
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
          GoogleSignIn.getLastSignedInAccount((application.android.foregroundActivity || application.android.startActivity)),
          fitnessOptions);
    });
  }

  query(opts: QueryRequest): Promise<Array<ResponseItem>> {
    return new Promise((resolve, reject) => {
      try {
        // make sure the user is authorized
        this.requestAuthorizationInternal([{name: opts.dataType, accessType: "read"}]).then(authorized => {
          if (!authorized) {
            reject("Not authorized");
            return;
          }

          const readRequest = new DataReadRequest.Builder()
          // using 'read' instead of 'aggregate' for now, for more finegrain control
          //     .aggregate(DataType.TYPE_STEP_COUNT_DELTA, DataType.AGGREGATE_STEP_COUNT_DELTA)
          //     .bucketByTime(1, TimeUnit.HOURS)
              .read(this.getDataType(opts.dataType))
              .setTimeRange(opts.startDate.getTime(), opts.endDate.getTime(), TimeUnit.MILLISECONDS)
              .build();

          Fitness.getHistoryClient((application.android.foregroundActivity || application.android.startActivity), GoogleSignIn.getLastSignedInAccount((application.android.foregroundActivity || application.android.startActivity)))
              .readData(readRequest)
              .addOnSuccessListener(new com.google.android.gms.tasks.OnSuccessListener({
                onSuccess: (dataReadResponse: any /* com.google.android.gms.fitness.result.DataReadResponse */) => {
                  resolve(this.parseData(dataReadResponse.getResult(), opts));
                }
              }))
              .addOnFailureListener(new com.google.android.gms.tasks.OnFailureListener({
                onFailure: (exception: any) => {
                  reject(exception.getMessage());
                }
              }))
              .addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete: (task: any) => {
                  // noop
                }
              }));
        });

      } catch (e) {
        reject(e);
      }
    });
  }

  queryAggregateData(opts: QueryRequest): Promise<Array<ResponseItem>> {
    return new Promise((resolve, reject) => {
      try {
        // make sure the user is authorized
        this.requestAuthorizationInternal([{name: opts.dataType, accessType: "read"}]).then(authorized => {
          if (!authorized) {
            reject("Not authorized");
            return;
          }

          switch (opts.aggregateBy) {
            case("hour"):
                var _aggregateBy = TimeUnit.HOURS
                break;
            case("day"):
                var _aggregateBy = TimeUnit.DAYS
                break;
            default:
                var _aggregateBy = TimeUnit.DAYS
          }

          const myDataSource = new DataSource.Builder()
              .setDataType(this.getDataType(opts.dataType))
              .setType(DataSource.TYPE_DERIVED)
              .setStreamName(this.getStreamName(opts.dataType))
              .setAppPackageName("com.google.android.gms")
              .build();

          const readRequest = new DataReadRequest.Builder()
              .aggregate(myDataSource, this.getAggregatedDataType(opts.dataType))
              .setTimeRange(opts.startDate.getTime(), opts.endDate.getTime(), TimeUnit.MILLISECONDS)
              .bucketByTime(1, _aggregateBy)
              .enableServerQueries()
              .build();
        
          Fitness.getHistoryClient((application.android.foregroundActivity || application.android.startActivity), GoogleSignIn.getLastSignedInAccount((application.android.foregroundActivity || application.android.startActivity)))
              .readData(readRequest)
              .addOnSuccessListener(new com.google.android.gms.tasks.OnSuccessListener({
                onSuccess: (dataReadResponse: any /* com.google.android.gms.fitness.result.DataReadResponse */) => {
                  resolve(this.parseData(dataReadResponse.getResult(), opts));
                }
              }))
              .addOnFailureListener(new com.google.android.gms.tasks.OnFailureListener({
                onFailure: (exception: any) => {
                  reject(exception.getMessage());
                }
              }))
              .addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
                onComplete: (task: any) => {
                  // noop
                }
              }));
        });
      } 
      catch (e) {
        reject(e);
      }
    });
  }

  startMonitoring(opts: StartMonitoringRequest): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      reject("Not supported");
    });
  }

  stopMonitoring(opts: StopMonitoringRequest): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      reject("Not supported");
    });
  }

  private parseData(readResult: any /* com.google.android.gms.fitness.result.DataReadResult */, opts: QueryRequest) {
    let result = [];
    if (readResult.getBuckets().size() > 0) {
      for (let indexBucket = 0; indexBucket < readResult.getBuckets().size(); indexBucket++) {
        let dataSets = readResult.getBuckets().get(indexBucket).getDataSets();
        for (let indexDataSet = 0; indexDataSet < dataSets.size(); indexDataSet++) {
          result = result.concat(this.dumpDataSet(dataSets.get(indexDataSet), opts));
        }
      }
    } else if (readResult.getDataSets().size() > 0) {
      for (let index = 0; index < readResult.getDataSets().size(); index++) {
        result = result.concat(this.dumpDataSet(readResult.getDataSets().get(index), opts));
      }
    }

    // the result is sorted asc, so reverse in case that was requested
    if (opts.sortOrder === "desc") {
      result = result.reverse();
    }

    return result;
  }

  private dumpDataSet(dataSet: any /* com.google.android.gms.fitness.data.DataSet */, opts: QueryRequest) {
    const parsedData: Array<ResponseItem> = [];
    const packageManager = getApplicationContext().getPackageManager();
    const packageToAppNameCache = new Map<string, string>();

    for (let index = 0; index < dataSet.getDataPoints().size(); index++) {
      const pos = dataSet.getDataPoints().get(index);

      for (let indexField = 0; indexField < pos.getDataType().getFields().size(); indexField++) {
        let field = pos.getDataType().getFields().get(indexField);
        const value = pos.getValue(field);

        // Note that the bit below is not yet required - per the README
        /*
        // Google Fit seems to have fixed unit types, so either:
        // - convert these in the plugin, or
        // - report the unit and have the user handle it (opting for this one for now)
        let unit = opts.unit;
        if (opts.dataType === "distance") {
          unit = "m";
        }
        */

        const packageName = pos.getOriginalDataSource().getAppPackageName();
        let source = packageName ? packageName : pos.getOriginalDataSource().getStreamName();
        if (packageName) {
          if (!packageToAppNameCache.has(packageName)) {
            try {
              const appName = packageManager.getApplicationLabel(packageManager.getApplicationInfo(packageName, android.content.pm.PackageManager.GET_META_DATA));
              packageToAppNameCache.set(packageName, appName);
            } catch (ignore) {
              // the app has probably been uninstalled, so use the package name
              packageToAppNameCache.set(packageName, packageName);
            }
          }
          source = packageToAppNameCache.get(packageName);
        }

        parsedData.push(<ResponseItem>{
          start: new Date(pos.getStartTime(TimeUnit.MILLISECONDS)),
          end: new Date(pos.getEndTime(TimeUnit.MILLISECONDS)),
          // https://developers.google.com/android/reference/com/google/android/gms/fitness/data/Value
          value: value.getFormat() === 1 ? value.asInt() : Math.round(value.asFloat() * 1000) / 1000,
          unit: opts.unit,
          source: source
        });
      }
    }

    return this.aggregate(parsedData, opts.aggregateBy);
  }

  private getAggregatedDataType(pluginType: string): any /*com.google.android.gms.fitness.data.DataType */ {
    // TODO check if the passed type is ok
    const typeOfData = acceptableDataTypesForCommonity[pluginType];
    return aggregatedDataTypes[typeOfData];
  }

  private getDataType(pluginType: string): any /*com.google.android.gms.fitness.data.DataType */ {
    // TODO check if the passed type is ok
    const typeOfData = acceptableDataTypesForCommonity[pluginType];
    return dataTypes[typeOfData];
  }

  private getStreamName(pluginType: string): any /*com.google.android.gms.fitness.data.DataType */ {
    // TODO check if the passed type is ok
    const typeOfData = acceptableDataTypesForCommonity[pluginType];
    return streamNames[typeOfData];
  }

  private requestHardwarePermissions(): Promise<boolean> {
    return this.requestPermissionFor(this.permissionsNeeded()
        .filter(permission => !this.wasPermissionGranted(permission)));
  }

  private wasPermissionGranted(permission: any) {
    let hasPermission = android.os.Build.VERSION.SDK_INT < 23; // Android M. (6.0)
    if (!hasPermission) {
      hasPermission = android.content.pm.PackageManager.PERMISSION_GRANTED ===
          ContentPackageName.ContextCompat.checkSelfPermission(
              utils.ad.getApplicationContext(),
              permission);
    }
    return hasPermission;
  }

  private wasPermissionsGrantedForAll(): boolean {
    return this.permissionsNeeded().every(permission => this.wasPermissionGranted(permission));
  }

  private requestPermissionFor(permissions: any[]): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (!this.wasPermissionsGrantedForAll()) {
        const activityRequestPermissionsHandler = args => {
          application.android.off(application.AndroidApplication.activityRequestPermissionsEvent, activityRequestPermissionsHandler);
          resolve(true);
        };

        application.android.on(application.AndroidApplication.activityRequestPermissionsEvent, activityRequestPermissionsHandler);

        AppPackageName.ActivityCompat.requestPermissions(
            application.android.foregroundActivity,
            permissions,
            235 // irrelevant since we simply invoke onPermissionGranted
        );
      } else {
        resolve(true);
      }
    });
  }

  private permissionsNeeded(): any[] {
    const permissions = [
      android.Manifest.permission.ACCESS_FINE_LOCATION,
      android.Manifest.permission.ACCESS_NETWORK_STATE,
      android.Manifest.permission.GET_ACCOUNTS];

    if (android.os.Build.VERSION.SDK_INT > 19) {
      permissions.push(android.Manifest.permission.BODY_SENSORS);
    }

    return permissions;
  }
}

const aggregatedDataTypes = {
  TYPE_STEP_COUNT_DELTA: DataType.AGGREGATE_STEP_COUNT_DELTA,
  TYPE_DISTANCE_DELTA: DataType.AGGREGATE_DISTANCE_DELTA,
  TYPE_CALORIES_EXPENDED: DataType.AGGREGATE_CALORIES_EXPENDED,
  TYPE_HEIGHT: DataType.TYPE_HEIGHT,
  // TYPE_WEIGHT: DataType.AGGREGATE_WEIGHT_SUMMARY,
  TYPE_WEIGHT: DataType.TYPE_WEIGHT,
  TYPE_HEART_RATE_BPM: DataType.AGGREGATE_HEART_RATE_SUMMARY,
  TYPE_BODY_FAT_PERCENTAGE: DataType.AGGREGATE_BODY_FAT_PERCENTAGE_SUMMARY,
  TYPE_NUTRITION: DataType.AGGREGATE_NUTRITION_SUMMARY,
  TYPE_HEART_POINTS: DataType.TYPE_HEART_POINTS
};

const dataTypes = {
  TYPE_STEP_COUNT_DELTA: DataType.TYPE_STEP_COUNT_DELTA,
  TYPE_DISTANCE_DELTA: DataType.TYPE_DISTANCE_DELTA,
  TYPE_CALORIES_EXPENDED: DataType.TYPE_CALORIES_EXPENDED,
  TYPE_HEIGHT: DataType.TYPE_HEIGHT,
  TYPE_WEIGHT: DataType.TYPE_WEIGHT,
  TYPE_HEART_RATE_BPM: DataType.TYPE_HEART_RATE_BPM,
  TYPE_BODY_FAT_PERCENTAGE: DataType.TYPE_BODY_FAT_PERCENTAGE,
  TYPE_NUTRITION: DataType.TYPE_NUTRITION,
  TYPE_HEART_POINTS: DataType.TYPE_HEART_POINTS
};
const streamNames = {
  TYPE_STEP_COUNT_DELTA: "estimated_steps",
  TYPE_DISTANCE_DELTA: "merge_distance_delta",
  TYPE_CALORIES_EXPENDED: "merge_calories_expended"
};

const acceptableDataTypesForCommonity = {
  steps: 'TYPE_STEP_COUNT_DELTA',
  distance: 'TYPE_DISTANCE_DELTA',
  calories: 'TYPE_CALORIES_EXPENDED',
  // "activity": DataType.TYPE_ACTIVITY_SEGMENT,
  height: 'TYPE_HEIGHT',
  weight: 'TYPE_WEIGHT',
  heartRate: 'TYPE_HEART_RATE_BPM',
  fatPercentage: 'TYPE_BODY_FAT_PERCENTAGE',
  cardio: 'TYPE_HEART_POINTS'
  // "nutrition": "TYPE_NUTRITION",
};
