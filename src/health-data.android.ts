import { Common, IConfigurationData, IResultResponse, IErrorResponse, createIResultResponse, createIErrorResponse} from './health-data.common';
import * as utils from 'tns-core-modules/utils/utils';
import * as application from 'tns-core-modules/application';
import * as platform from 'tns-core-modules/platform';

declare const com: any;
declare const android: any;
var REQUEST_REQUIRED_PERMISSIONS = 1234;
var REQUEST_CODE = 1;

export class HealthData extends Common {
    private mClient: any;

    getData(config: IConfigurationData) {
        // console.dir(config);
        const action = "Getting Data";
        return new Promise((resolve, reject) => {
            if(this.mClient === null) {
                const response: IErrorResponse = createIErrorResponse(action);
                response.code = "001";
                response.description = "You have to create your client first. Please, use createClient method first";
                reject(JSON.stringify(response));
            } else {
                const response: IResultResponse = createIResultResponse(action);
                this.queryFitnessData(config, (result) => {
                    response.data.type = config.typeOfData;
                    response.data.response = result;
                    resolve(JSON.stringify(response));
                });
            } 
        });
    }

    private queryFitnessData(config: IConfigurationData, fn) {
        // [START parse_read_data_result]
        // If the DataReadRequest object specified aggregated data, dataReadResult will be returned
        // as buckets containing DataSets, instead of just DataSets.
        // console.dir(config);
        let readRequest = new com.google.android.gms.fitness.request.DataReadRequest.Builder();

        if(aggregatedDataTypes[config.typeOfData]) {
            // console.log('aqui');
            readRequest = readRequest.aggregate(com.google.android.gms.fitness.data.DataType[config.typeOfData], 
                            aggregatedDataTypes[config.typeOfData]);
            switch(config.gfBucketUnit) {
                case "days":
                    readRequest = readRequest.bucketByTime(config.gfBucketSize, java.util.concurrent.TimeUnit.DAYS);
                    break;
                case "hours":
                    readRequest = readRequest.bucketByTime(config.gfBucketSize, java.util.concurrent.TimeUnit.HOURS);            
                    break;
                case "minutes":
                    readRequest = readRequest.bucketByTime(config.gfBucketSize, java.util.concurrent.TimeUnit.MINUTES);
                    break;
                default:
                    readRequest = readRequest.bucketByTime(config.gfBucketSize, java.util.concurrent.TimeUnit.DAYS);
                    break;
            }
        } else {
            readRequest = readRequest.read(com.google.android.gms.fitness.data.DataType[config.typeOfData])
        }        

        readRequest = readRequest.setTimeRange(config.gfStartTimeInMillis, config.gfEndTimeInMillis, java.util.concurrent.TimeUnit.MILLISECONDS)
                .build();

        let context = this;
        let readResult = com.google.android.gms.fitness.Fitness.HistoryApi.readData(this.mClient, readRequest).setResultCallback(new com.google.android.gms.common.api.ResultCallback({
            onResult: function(result: any) {
                fn(context.parseData(result));
            },
        }));
    }

    private parseData(readResult) {
        // console.log('2');
        let result = [];
        if(readResult.getBuckets().size() > 0) {
            for(let indexBucket = 0; indexBucket < readResult.getBuckets().size(); indexBucket++) {
                let dataSets = readResult.getBuckets().get(indexBucket).getDataSets();
                // console.log(dataSets);
                // result[indexBucket] = {};
                for(let indexDataSet = 0; indexDataSet < dataSets.size(); indexDataSet++) {
                    // result[indexBucket][indexDataSet] = this.dumpDataSet(dataSets.get(indexDataSet));
                    result = result.concat(this.dumpDataSet(dataSets.get(indexDataSet)));
                }
            }
        } else if(readResult.getDataSets().size() > 0) {
            // console.log(readResult.getDataSets());
            for(let index = 0; index < readResult.getDataSets().size(); index++) {
                // result[index] = this.dumpDataSet(readResult.getDataSets().get(index));
                result = result.concat(this.dumpDataSet(readResult.getDataSets().get(index)));
            }
        }
        return result;
    }

    private dumpDataSet(dataSet) {
        // console.log('3');        
        let result = [];
        let dateFormat = java.text.DateFormat.getTimeInstance();
        console.log('Data returned for Data type: ' + dataSet.getDataType().getName());

        for(let index = 0; index < dataSet.getDataPoints().size(); index++) {
            let prev = {};
            let pos = dataSet.getDataPoints().get(index);
            // prev['type'] = pos.getDataType().getName();
            prev['startTime'] = new Date(pos.getStartTime(java.util.concurrent.TimeUnit.MILLISECONDS)).toString();
            prev['endTime'] = new Date(pos.getEndTime(java.util.concurrent.TimeUnit.MILLISECONDS)).toString();            
            // console.log('Data point:');
            // console.log('Type:' + pos.getDataType().getName());
            // console.log('Start:' + new Date(pos.getStartTime(java.util.concurrent.TimeUnit.MILLISECONDS)).toString());
            // console.log('End:' + new Date(pos.getEndTime(java.util.concurrent.TimeUnit.MILLISECONDS)).toString());
            for(let indexField = 0; indexField < pos.getDataType().getFields().size(); indexField++) {
                let field = pos.getDataType().getFields().get(indexField);
                prev[field.getName()] = pos.getValue(field).toString();
                // console.log('Field: ' + field.getName() + ' Value:' + pos.getValue(field));                
            }
            result.push(prev);
        }

        return result;
    }

    private getPermissions(fn) {
        let currentContext = application.android.currentContext;
        if (parseInt(platform.device.sdkVersion) >= 23) {
            if ( (<any>android.support.v4.content.ContextCompat).checkSelfPermission(currentContext, (<any>android).Manifest.permission.GET_ACCOUNTS) != android.content.pm.PackageManager.PERMISSION_GRANTED) {
                let activityRequestPermissionHandler = (args: application.AndroidActivityRequestPermissionsEventData) => {
                    application.android.off(application.AndroidApplication.activityRequestPermissionsEvent, activityRequestPermissionHandler);
                    if (args.requestCode === REQUEST_REQUIRED_PERMISSIONS && args.grantResults.length > 0 && args.grantResults[0] === android.content.pm.PackageManager.PERMISSION_GRANTED) {
                        fn(true);
                    }
                }
                application.android.on(application.AndroidApplication.activityRequestPermissionsEvent, activityRequestPermissionHandler);
                (<any>android.support.v4.app).ActivityCompat.requestPermissions(application.android.currentContext, ['android.permission.GET_ACCOUNTS'], REQUEST_REQUIRED_PERMISSIONS);
            } else {
                fn(true);
            }
        } else {
            fn(true);
        }
    } 

    createClient() {
        let context = this;
        const action = "Creating Client";
        return new Promise((resolve, reject) => {
            context.mClient = new com.google.android.gms.common.api.GoogleApiClient.Builder(application.android.currentContext)
                .addApi(com.google.android.gms.fitness.Fitness.HISTORY_API)
                .addScope(new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_ACTIVITY_READ_WRITE))
                .addConnectionCallbacks(new com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks({
                    onConnected: function (Bundle: android.os.Bundle) {
                        const response: IResultResponse = createIResultResponse(action);
                        response.status.message = "Google Play services connected successfully";
                        resolve(JSON.stringify(response));
                    },
                    onConnectionSuspended: function (i: number) {
                        if (i === new com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks.CAUSE_NETWORK_LOST) {
                            console.log("Connection Lost, Network Lost");
                        } else {
                            console.log("Connection lost, Service Disconnected");
                        }
                    }
                }))
                .addOnConnectionFailedListener(new com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener({
                    onConnectionFailed: function (result: any) {
                        console.log("Google Play services connection failed");
                        if(result.hasResolution()) {
                            context.getPermissions((resultPermissions) => {
                                if(resultPermissions) {
                                    result.startResolutionForResult(application.android.foregroundActivity, REQUEST_CODE);
                                } else {
                                    const response: IErrorResponse = createIErrorResponse(action);
                                    response.code = "002";
                                    response.description = "Google Play services connection failed. " +
                                                    "You have not system permissions to connect to Google Play Services";
                                    reject(JSON.stringify(response));
                                }
                            });
                        } else {
                            const response: IErrorResponse = createIErrorResponse(action);
                            response.code = "003";
                            response.description = "Cannot connect to your Google Account";
                            reject(JSON.stringify(response));
                        }
                    }
                }))
                .build();
            context.mClient.connect();
        });
    }

    constructor() {
        super();
        this.hasPermissions = false;
        this.mClient = null;
    }
}

export const aggregatedDataTypes = {
    TYPE_STEP_COUNT_DELTA: com.google.android.gms.fitness.data.DataType.AGGREGATE_STEP_COUNT_DELTA,
    // TYPE_STEP_COUNT_CUMULATIVE: "",
    // TYPE_STEP_COUNT_CADENCE: "",
    // TYPE_ACTIVITY_SEGMENT: "",
    TYPE_CALORIES_CONSUMED: com.google.android.gms.fitness.data.DataType.AGGREGATE_CALORIES_CONSUMED,
    TYPE_CALORIES_EXPENDED: com.google.android.gms.fitness.data.DataType.AGGREGATE_CALORIES_EXPENDED,
    TYPE_BASAL_METABOLIC_RATE: com.google.android.gms.fitness.data.DataType.AGGREGATE_BASAL_METABOLIC_RATE_SUMMARY,
    TYPE_POWER_SAMPLE: com.google.android.gms.fitness.data.DataType.AGGREGATE_POWER_SUMMARY,
    // TYPE_ACTIVITY_SAMPLE: "",
    // TYPE_ACTIVITY_SAMPLES: "",
    TYPE_HEART_RATE_BPM: com.google.android.gms.fitness.data.DataType.AGGREGATE_HEART_RATE_SUMMARY,
    // TYPE_LOCATION_SAMPLE: "",
    // TYPE_LOCATION_TRACK: "",
    TYPE_DISTANCE_DELTA: com.google.android.gms.fitness.data.DataType.AGGREGATE_DISTANCE_DELTA,
    // TYPE_DISTANCE_CUMULATIVE: "",
    TYPE_SPEED: com.google.android.gms.fitness.data.DataType.AGGREGATE_SPEED_SUMMARY,
    // TYPE_CYCLING_WHEEL_REVOLUTION: "",
    // TYPE_CYCLING_WHEEL_RPM: "",
    // TYPE_CYCLING_PEDALING_CUMULATIVE: "",
    // TYPE_CYCLING_PEDALING_CADENCE: "",
    TYPE_HEIGHT: com.google.android.gms.fitness.data.DataType.AGGREGATE_HEIGHT_SUMMARY,
    TYPE_WEIGHT: com.google.android.gms.fitness.data.DataType.AGGREGATE_WEIGHT_SUMMARY,
    TYPE_BODY_FAT_PERCENTAGE: com.google.android.gms.fitness.data.DataType.AGGREGATE_BODY_FAT_PERCENTAGE_SUMMARY,
    TYPE_NUTRITION: com.google.android.gms.fitness.data.DataType.AGGREGATE_NUTRITION_SUMMARY,
    TYPE_HYDRATION: com.google.android.gms.fitness.data.DataType.AGGREGATE_HYDRATION,
    // TYPE_WORKOUT_EXERCISE: "" 
};