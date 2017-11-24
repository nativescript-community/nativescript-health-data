/// <reference path="./android.def.d.ts" />
import {
    Common,
    IConfigurationData,
    IResultResponse,
    IErrorResponse,
    createIResultResponse,
    createIErrorResponse
} from "./health-data.common";
import * as utils from "tns-core-modules/utils/utils";
import * as application from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";

// declare const com: any;
// declare const android: any;
let REQUEST_REQUIRED_PERMISSIONS = 1234;
let REQUEST_CODE = 1;

export class HealthData extends Common {
    private mClient: any;

    getCommonData(config: IConfigurationData) {
        const action = "Getting Common Data";
        return new Promise((resolve, reject) => {
            const errorResponse: IErrorResponse = createIErrorResponse(action);
            if (this.mClient === null) {
                errorResponse.code = "003";
                errorResponse.description =
                    "You have to create your client first. Please, use createClient method first";
                reject(JSON.stringify(errorResponse));
            } else if (!acceptableDataTypesForCommonity[config.typeOfData]) {
                errorResponse.code = "004";
                errorResponse.description =
                    "The dataType is not supported yet for both platforms. Use getAndroidData() method";
                reject(JSON.stringify(errorResponse));
            } else if (!this.validateConfiguration(config)) {
                errorResponse.code = "005";
                errorResponse.description =
                    "Your configuration is not valid. Check the times";
                reject(JSON.stringify(errorResponse));
            } else {
                config.typeOfData =
                    acceptableDataTypesForCommonity[config.typeOfData];
                this.getData(
                    config,
                    result => {
                        const successResponse: IResultResponse = createIResultResponse(
                            action
                        );
                        successResponse.data.type = config.typeOfData;
                        successResponse.data.response = result;
                        resolve(JSON.stringify(successResponse));
                    },
                    errorMessage => {
                        errorResponse.code = "006";
                        errorResponse.description = errorMessage;
                        reject(JSON.stringify(errorResponse));
                    }
                );
            }
        });
    }

    getUncommonData(config: IConfigurationData) {
        const action = "Getting Uncommon Data";
        return new Promise((resolve, reject) => {
            const errorResponse: IErrorResponse = createIErrorResponse(action);
            errorResponse.code = "007";
            errorResponse.description = "Method not yet supported in Android";
            reject(JSON.stringify(errorResponse));
        });
    }

    private getData(
        config: IConfigurationData,
        successCallback,
        failureCallback
    ) {
        this.queryFitnessData(config, result => {
            if (typeof result === typeof []) {
                successCallback(result);
            } else {
                failureCallback(result);
            }
        });
    }

    private queryFitnessData(config: IConfigurationData, fn) {
        // [START parse_read_data_result]
        // If the DataReadRequest object specified aggregated data, dataReadResult will be returned
        // as buckets containing DataSets, instead of just DataSets.
        let readRequest: com.google.android.gms.fitness.request.DataReadRequest.Builder = new com.google.android.gms.fitness.request.DataReadRequest.Builder();

        if (aggregatedDataTypes[config.typeOfData]) {
            readRequest = readRequest.aggregate(
                com.google.android.gms.fitness.data.DataType[config.typeOfData],
                aggregatedDataTypes[config.typeOfData]
            );
            switch (config.gfBucketUnit) {
                case "days":
                    readRequest = readRequest.bucketByTime(
                        config.gfBucketSize,
                        java.util.concurrent.TimeUnit.DAYS
                    );
                    break;
                case "hours":
                    readRequest = readRequest.bucketByTime(
                        config.gfBucketSize,
                        java.util.concurrent.TimeUnit.HOURS
                    );
                    break;
                case "minutes":
                    readRequest = readRequest.bucketByTime(
                        config.gfBucketSize,
                        java.util.concurrent.TimeUnit.MINUTES
                    );
                    break;
                default:
                    readRequest = readRequest.bucketByTime(
                        config.gfBucketSize,
                        java.util.concurrent.TimeUnit.DAYS
                    );
                    break;
            }
        } else {
            readRequest = readRequest.read(
                com.google.android.gms.fitness.data.DataType[config.typeOfData]
            );
        }

        let dataReadRequest = readRequest
            .setTimeRange(
                config.gfStartTimeInMillis,
                config.gfEndTimeInMillis,
                java.util.concurrent.TimeUnit.MILLISECONDS
            )
            .build();

        let context = this;
        try {
            let readResult = com.google.android.gms.fitness.Fitness.HistoryApi
                .readData(this.mClient, dataReadRequest)
                .setResultCallback(new com.google.android.gms.common.api.ResultCallback({
                    onResult: function(result: any) {
                        fn(context.parseData(result));
                    }
                }));
        } catch (e) {
            console.log(e.message);
        }
    }

    private parseData(readResult) {
        let result = [];
        if (readResult.getBuckets().size() > 0) {
            for (
                let indexBucket = 0;
                indexBucket < readResult.getBuckets().size();
                indexBucket++
            ) {
                console.log(readResult.getBuckets().get(indexBucket));
                let dataSets = readResult
                    .getBuckets()
                    .get(indexBucket)
                    .getDataSets();
                console.log(dataSets);
                // result[indexBucket] = {};
                for (
                    let indexDataSet = 0;
                    indexDataSet < dataSets.size();
                    indexDataSet++
                ) {
                    // result[indexBucket][indexDataSet] = this.dumpDataSet(dataSets.get(indexDataSet));
                    result = result.concat(
                        this.dumpDataSet(dataSets.get(indexDataSet))
                    );
                }
            }
        } else if (readResult.getDataSets().size() > 0) {
            // console.log(readResult.getDataSets());
            for (
                let index = 0;
                index < readResult.getDataSets().size();
                index++
            ) {
                // result[index] = this.dumpDataSet(readResult.getDataSets().get(index));
                result = result.concat(
                    this.dumpDataSet(readResult.getDataSets().get(index))
                );
            }
        }
        return result;
    }

    private dumpDataSet(dataSet) {
        let result = [];
        let dateFormat = java.text.DateFormat.getTimeInstance();
        console.log(
            "Data returned for Data type: " + dataSet.getDataType().getName()
        );

        for (let index = 0; index < dataSet.getDataPoints().size(); index++) {
            let prev = {};
            let pos = dataSet.getDataPoints().get(index);
            // prev['type'] = pos.getDataType().getName();
            prev["startTime"] = new Date(
                pos.getStartTime(java.util.concurrent.TimeUnit.MILLISECONDS)
            ).toString();
            prev["endTime"] = new Date(
                pos.getEndTime(java.util.concurrent.TimeUnit.MILLISECONDS)
            ).toString();
            // console.log('Data point:');
            // console.log('Type:' + pos.getDataType().getName());
            // console.log('Start:' + new Date(pos.getStartTime(java.util.concurrent.TimeUnit.MILLISECONDS)).toString());
            // console.log('End:' + new Date(pos.getEndTime(java.util.concurrent.TimeUnit.MILLISECONDS)).toString());
            for (
                let indexField = 0;
                indexField <
                pos
                    .getDataType()
                    .getFields()
                    .size();
                indexField++
            ) {
                let field = pos
                    .getDataType()
                    .getFields()
                    .get(indexField);
                prev[field.getName()] = pos.getValue(field).toString();
                // console.log('Field: ' + field.getName() + ' Value:' + pos.getValue(field));
            }
            result.push(prev);
        }
        return result;
    }

    private getPermissions(accesses: string[], fn) {
        let currentContext = application.android.currentContext;
        if (parseInt(platform.device.sdkVersion) >= 23) {
            if (
                (<any>android.support.v4.content
                    .ContextCompat).checkSelfPermission(
                    currentContext,
                    (<any>android).Manifest.permission[accesses[0]]
                ) !== android.content.pm.PackageManager.PERMISSION_GRANTED ||
                (<any>android.support.v4.content
                    .ContextCompat).checkSelfPermission(
                    currentContext,
                    (<any>android).Manifest.permission[accesses[1]]
                ) !== android.content.pm.PackageManager.PERMISSION_GRANTED ||
                (<any>android.support.v4.content
                    .ContextCompat).checkSelfPermission(
                    currentContext,
                    (<any>android).Manifest.permission[accesses[2]]
                ) !== android.content.pm.PackageManager.PERMISSION_GRANTED
            ) {
                let activityRequestPermissionHandler = (
                    args: application.AndroidActivityRequestPermissionsEventData
                ) => {
                    application.android.off(
                        application.AndroidApplication
                            .activityRequestPermissionsEvent,
                        activityRequestPermissionHandler
                    );
                    if (
                        args.requestCode === REQUEST_REQUIRED_PERMISSIONS &&
                        args.grantResults.length > 0 &&
                        args.grantResults[0] ===
                            android.content.pm.PackageManager
                                .PERMISSION_GRANTED &&
                        args.grantResults[1] ===
                            android.content.pm.PackageManager
                                .PERMISSION_GRANTED &&
                        args.grantResults[2] ===
                            android.content.pm.PackageManager.PERMISSION_GRANTED
                    ) {
                        fn(true);
                    } else {
                        fn(false);
                    }
                };
                application.android.on(
                    application.AndroidApplication
                        .activityRequestPermissionsEvent,
                    activityRequestPermissionHandler
                );
                (<any>android.support.v4.app).ActivityCompat.requestPermissions(
                    application.android.currentContext,
                    [
                        "android.permission." + accesses[0],
                        "android.permission." + accesses[1],
                        "android.permission." + accesses[2]
                    ],
                    REQUEST_REQUIRED_PERMISSIONS
                );
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
            let mClient = new com.google.android.gms.common.api.GoogleApiClient.Builder(
                application.android.currentContext
            )
                .addApi(com.google.android.gms.fitness.Fitness.HISTORY_API)
                .addScope(
                    new com.google.android.gms.common.api.Scope(
                        com.google.android.gms.common.Scopes.FITNESS_ACTIVITY_READ
                    )
                )
                .addScope(
                    new com.google.android.gms.common.api.Scope(
                        com.google.android.gms.common.Scopes.FITNESS_BODY_READ
                    )
                )
                .addScope(
                    new com.google.android.gms.common.api.Scope(
                        com.google.android.gms.common.Scopes.FITNESS_LOCATION_READ
                    )
                )
                .addScope(
                    new com.google.android.gms.common.api.Scope(
                        com.google.android.gms.common.Scopes.FITNESS_NUTRITION_READ
                    )
                )
                .addConnectionCallbacks(
                    new com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks({
                        onConnected: function(Bundle: android.os.Bundle) {
                            const response: IResultResponse = createIResultResponse(
                                action
                            );
                            response.status.message =
                                "Google Play services connected successfully";
                            context.mClient = mClient;
                            resolve(JSON.stringify(response));
                        },
                        onConnectionSuspended: function(i: number) {
                            if (
                                i ===
                                com.google.android.gms.common.api
                                    .GoogleApiClient.ConnectionCallbacks
                                    .CAUSE_NETWORK_LOST
                            ) {
                                console.log(
                                    "Connection Lost, Network Lost"
                                );
                            } else {
                                console.log(
                                    "Connection lost, Service Disconnected"
                                );
                            }
                        }
                    })
                )
                .addOnConnectionFailedListener(
                    new com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener({
                            onConnectionFailed: function(result: any) {
                                console.log(
                                    "Google Play services connection failed"
                                );
                                console.dir(result);
                                if (result.hasResolution()) {
                                    context.getPermissions(
                                        [
                                            "GET_ACCOUNTS",
                                            "ACCESS_FINE_LOCATION",
                                            "BODY_SENSORS"
                                        ],
                                        resultPermissions => {
                                            if (resultPermissions) {
                                                result.startResolutionForResult(
                                                    application.android
                                                        .foregroundActivity,
                                                    REQUEST_CODE
                                                );
                                            } else {
                                                context.mClient = null;
                                                const response: IErrorResponse = createIErrorResponse(
                                                    action
                                                );
                                                response.code = "001";
                                                response.description =
                                                    "Google Play services connection failed. You have not system permissions to connect to Google Play Services";
                                                reject(
                                                    JSON.stringify(response)
                                                );
                                            }
                                        }
                                    );
                                } else {
                                    context.mClient = null;
                                    const response: IErrorResponse = createIErrorResponse(
                                        action
                                    );
                                    response.code = "002";
                                    response.description =
                                        "Cannot connect to your Google Account";
                                    reject(JSON.stringify(response));
                                }
                            }
                        }
                    )
                )
                .build();
            mClient.connect();
        });
    }

    private validateConfiguration(config: IConfigurationData) {
        return config.gfEndTimeInMillis > config.gfStartTimeInMillis;
    }

    constructor() {
        super();
        this.hasPermissions = false;
        this.mClient = null;
    }
}

export const aggregatedDataTypes = {
    TYPE_STEP_COUNT_DELTA:
        com.google.android.gms.fitness.data.DataType.AGGREGATE_STEP_COUNT_DELTA,
    TYPE_DISTANCE_DELTA:
        com.google.android.gms.fitness.data.DataType.AGGREGATE_DISTANCE_DELTA,
    TYPE_CALORIES_EXPENDED:
        com.google.android.gms.fitness.data.DataType
            .AGGREGATE_CALORIES_EXPENDED,
    // "TYPE_HEIGHT": com.google.android.gms.fitness.data.DataType.AGGREGATE_HEIGHT_SUMMARY,
    TYPE_WEIGHT:
        com.google.android.gms.fitness.data.DataType.AGGREGATE_WEIGHT_SUMMARY,
    // "TYPE_HEART_RATE_BPM": com.google.android.gms.fitness.data.DataType.AGGREGATE_HEART_RATE_SUMMARY,
    TYPE_BODY_FAT_PERCENTAGE:
        com.google.android.gms.fitness.data.DataType
            .AGGREGATE_BODY_FAT_PERCENTAGE_SUMMARY,
    TYPE_NUTRITION:
        com.google.android.gms.fitness.data.DataType.AGGREGATE_NUTRITION_SUMMARY
};

export const acceptableDataTypesForCommonity = {
    steps: "TYPE_STEP_COUNT_DELTA",
    distance: "TYPE_DISTANCE_DELTA",
    calories: "TYPE_CALORIES_EXPENDED",
    // "activity": com.google.android.gms.fitness.data.DataType.TYPE_ACTIVITY_SEGMENT,
    height: "TYPE_HEIGHT",
    weight: "TYPE_WEIGHT",
    heartRate: "TYPE_HEART_RATE_BPM",
    fatPercentage: "TYPE_BODY_FAT_PERCENTAGE"
    // "nutrition": "TYPE_NUTRITION",
};
