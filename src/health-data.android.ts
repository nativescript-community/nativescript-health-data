/// <reference path="./android.def.d.ts" />
import {
    Common,
    ConfigurationData,
    ResultResponse,
    ErrorResponse,
    createResultResponse,
    createErrorResponse
} from "./health-data.common";
import * as utils from "tns-core-modules/utils/utils";
import * as application from "tns-core-modules/application";
import * as platform from "tns-core-modules/platform";


let REQUEST_REQUIRED_PERMISSIONS = 1234;
let REQUEST_CODE = 1;

export class HealthData extends Common {
    private mClient: any;

    getCommonData(config: ConfigurationData) {
        return new Promise<ResultResponse>((resolve, reject) => {
            const action = "Getting Common Data";
            if (this.mClient === null) {
                reject(createErrorResponse(
                    action,
                    "You have to create your client first. Please, use createClient method first"
                ));
            } else if (!acceptableDataTypesForCommonity[config.typeOfData]) {
                reject(createErrorResponse(
                    action,
                    "The dataType is not supported yet for both platforms. Use getAndroidData() method"
                ));
            } else if (!this.validateConfiguration(config)) {
                reject(createErrorResponse(
                    action,
                    "Your configuration is not valid. Check the Dates"
                ));
            } else {
                this.getData(
                    config,
                    result => {
                        resolve(createResultResponse(
                            action,
                            "success",
                            config.typeOfData,
                            result
                        ));
                    },
                    error => {
                        reject(createErrorResponse(action, error));
                    }
                );
            }
        });
    }

    getUncommonData(config: ConfigurationData) {
        const action = "Getting Uncommon Data";
        return new Promise<ResultResponse>((resolve, reject) => {
            reject(createErrorResponse(action, "Method not yet supported in Android"));
        });
    }

    private getData(
        config: ConfigurationData,
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

    private queryFitnessData(config: ConfigurationData, fn) {
        // [START parse_read_data_result]
        // If the DataReadRequest object specified aggregated data, dataReadResult will be returned
        // as buckets containing DataSets, instead of just DataSets.
        let readRequest = new com.google.android.gms.fitness.request.DataReadRequest.Builder();
        let typeOfData = acceptableDataTypesForCommonity[config.typeOfData];
        if (aggregatedDataTypes[typeOfData]) {
            readRequest = readRequest.aggregate(
                com.google.android.gms.fitness.data.DataType[typeOfData],
                aggregatedDataTypes[typeOfData]
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
                com.google.android.gms.fitness.data.DataType[typeOfData]
            );
        }

        let dataReadRequest = readRequest
            .setTimeRange(
                config.startDate.getTime(),
                config.endDate.getTime(),
                java.util.concurrent.TimeUnit.MILLISECONDS
            )
            .build();

        let context = this;
        try {
            let readResult = com.google.android.gms.fitness.Fitness.HistoryApi.readData(
                this.mClient,
                dataReadRequest
            ).setResultCallback(
                new com.google.android.gms.common.api.ResultCallback({
                    onResult: function(result) {
                        fn(context.parseData(result as any));
                    }
                })
            );
        } catch (e) {
            console.log(e.message);
        }
    }

    private parseData(readResult: com.google.android.gms.fitness.result.DataReadResult) {
        let result = [];
        if (readResult.getBuckets().size() > 0) {
            for (
                let indexBucket = 0;
                indexBucket < readResult.getBuckets().size();
                indexBucket++
            ) {
                // console.log(readResult.getBuckets().get(indexBucket));
                let dataSets = readResult
                    .getBuckets()
                    .get(indexBucket)
                    .getDataSets();
                for (
                    let indexDataSet = 0;
                    indexDataSet < dataSets.size();
                    indexDataSet++
                ) {
                    result = result.concat(
                        this.dumpDataSet(dataSets.get(indexDataSet))
                    );
                }
            }
        } else if (readResult.getDataSets().size() > 0) {
            for (
                let index = 0;
                index < readResult.getDataSets().size();
                index++
            ) {
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
        for (let index = 0; index < dataSet.getDataPoints().size(); index++) {
            let pos = dataSet.getDataPoints().get(index);

            // console.log('Data point: ');
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

                result.push({
                    start: new Date(pos.getStartTime(java.util.concurrent.TimeUnit.MILLISECONDS)),
                    end: new Date(pos.getEndTime(java.util.concurrent.TimeUnit.MILLISECONDS)),
                    value: pos.getValue(field).toString()
                });
                // console.log('Field: ' + field.getName() + ' Value:' + pos.getValue(field));
            }
        }
        return result;
    }

    private getPermissions(accesses: string[], fn) {
        let currentContext = application.android.currentContext;
        if (parseInt(platform.device.sdkVersion) >= 23) {
            const contextCompat = <any>android.support.v4.content.ContextCompat;
            const permissions = (<any>android).Manifest.permission;
            const packageManager = android.content.pm.PackageManager;
            if (
                contextCompat.checkSelfPermission(
                    currentContext,
                    permissions[accesses[0]]
                ) !== packageManager.PERMISSION_GRANTED ||
                contextCompat.checkSelfPermission(
                    currentContext,
                    permissions[accesses[1]]
                ) !== packageManager.PERMISSION_GRANTED ||
                contextCompat.checkSelfPermission(
                    currentContext,
                    permissions[accesses[2]]
                ) !== packageManager.PERMISSION_GRANTED
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
                            packageManager.PERMISSION_GRANTED &&
                        args.grantResults[1] ===
                            packageManager.PERMISSION_GRANTED &&
                        args.grantResults[2] ===
                            packageManager.PERMISSION_GRANTED
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
                    new com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks(
                        {
                            onConnected: function(Bundle: android.os.Bundle) {
                                const response: ResultResponse = createResultResponse(
                                    action, "Google Play services connected successfully"
                                );
                                context.mClient = mClient;
                                resolve(response);
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
                        }
                    )
                )
                .addOnConnectionFailedListener(
                    new com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener(
                        {
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
                                                reject(createErrorResponse(
                                                    action, "Google Play services connection failed. You have not system permissions to connect to Google Play Services"
                                                ));
                                            }
                                        }
                                    );
                                } else {
                                    context.mClient = null;
                                    reject(createErrorResponse(
                                        action,
                                        "Cannot connect to your Google Account"
                                    ));
                                }
                            }
                        }
                    )
                )
                .build();
            mClient.connect();
        });
    }

    private validateConfiguration(config: ConfigurationData) {
        return config.endDate > config.startDate;
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
