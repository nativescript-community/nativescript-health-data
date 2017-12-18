/// <reference path="./android.def.d.ts" />
import {
    Common,
    ConfigurationData,
    ResultResponse,
    ErrorResponse,
    createResultResponse,
    createErrorResponse
} from './health-data.common';
import * as utils from 'tns-core-modules/utils/utils';
import * as application from 'tns-core-modules/application';
import * as platform from 'tns-core-modules/platform';

const REQUEST_REQUIRED_PERMISSIONS = 1234;
const REQUEST_CODE = 1;

// android imports

const DataType = com.google.android.gms.fitness.data.DataType;
const GoogleApiClient = com.google.android.gms.common.api.GoogleApiClient;
const Fitness = com.google.android.gms.fitness.Fitness;
const Scope = com.google.android.gms.common.api.Scope;
const Scopes = com.google.android.gms.common.Scopes;
const TimeUnit = java.util.concurrent.TimeUnit;
const GoogleApiAvailability = com.google.android.gms.common.GoogleApiAvailability;
const DataReadRequest  = com.google.android.gms.fitness.request.DataReadRequest;
const PackageManager = android.content.pm.PackageManager;
const HistoryApi = com.google.android.gms.fitness.Fitness.HistoryApi;
const ResultCallback = com.google.android.gms.common.api.ResultCallback;
const ContextCompat = <any>android.support.v4.content.ContextCompat;



export class HealthData extends Common {
    private mClient: com.google.android.gms.common.api.GoogleApiClient;

    isAvailable(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // first check that the Google APIs are available
            let gapi = GoogleApiAvailability.getInstance();
            let apiresult = gapi.isGooglePlayServicesAvailable(
                utils.ad.getApplicationContext()
            );
            if (
                apiresult ===
                com.google.android.gms.common.ConnectionResult.SUCCESS
            ) {
                // then check that Google Fit is actually installed
                let pm = utils.ad
                    .getApplicationContext()
                    .getPackageManager() as android.content.pm.PackageManager;
                try {
                    pm.getPackageInfo(
                        'com.google.android.apps.fitness',
                        PackageManager.GET_ACTIVITIES
                    );
                    // Success return object
                    resolve(true);
                } catch (e) {
                    console.log('Google fit is not intalled!');
                    reject(false);
                }
            } else {
                console.log('aperantly you dont have google apis installed');
                reject(false);
            }
        });
    }

    private queryFitnessData(config: ConfigurationData, fn) {
        // [START parse_read_data_result]
        // If the DataReadRequest object specified aggregated data, dataReadResult will be returned
        // as buckets containing DataSets, instead of just DataSets.
        let readRequest = new DataReadRequest.Builder();
        let typeOfData = acceptableDataTypesForCommonity[config.typeOfData];
        if (aggregatedDataTypes[typeOfData]) {
            readRequest = readRequest.aggregate(
                DataType[typeOfData],
                aggregatedDataTypes[typeOfData]
            );
            switch (config.gfBucketUnit) {
                case 'days':
                    readRequest = readRequest.bucketByTime(
                        config.gfBucketSize,
                        TimeUnit.DAYS
                    );
                    break;
                case 'hours':
                    readRequest = readRequest.bucketByTime(
                        config.gfBucketSize,
                        TimeUnit.HOURS
                    );
                    break;
                case 'minutes':
                    readRequest = readRequest.bucketByTime(
                        config.gfBucketSize,
                        TimeUnit.MINUTES
                    );
                    break;
                default:
                    readRequest = readRequest.bucketByTime(
                        config.gfBucketSize,
                        TimeUnit.DAYS
                    );
                    break;
            }
        } else {
            readRequest = readRequest.read(
                DataType[typeOfData]
            );
        }

        let dataReadRequest = readRequest
            .setTimeRange(
                config.startDate.getTime(),
                config.endDate.getTime(),
                TimeUnit.MILLISECONDS
            )
            .build();

        try {
            let readResult = HistoryApi.readData(
                this.mClient,
                dataReadRequest
            ).setResultCallback(
                new ResultCallback({
                    onResult: (result) => {
                        fn(this.parseData(result as any));
                    }
                })
            );
        } catch (e) {
            console.log(e.message);
        }
    }

    private parseData(
        readResult: com.google.android.gms.fitness.result.DataReadResult
    ) {
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
            // console.log('Start:' + new Date(pos.getStartTime(TimeUnit.MILLISECONDS)).toString());
            // console.log('End:' + new Date(pos.getEndTime(TimeUnit.MILLISECONDS)).toString());
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
                    start: new Date(
                        pos.getStartTime(
                            TimeUnit.MILLISECONDS
                        )
                    ),
                    end: new Date(
                        pos.getEndTime(
                            TimeUnit.MILLISECONDS
                        )
                    ),
                    value: pos.getValue(field).toString()
                });
                // console.log('Field: ' + field.getName() + ' Value:' + pos.getValue(field));
            }
        }
        return result;
    }
    isAuthorized(constToRead: string) {

    }
    requestAuthorization(accesses: string[]): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const currentContext = application.android.currentContext;
            if (parseInt(platform.device.sdkVersion) >= 23) {
                const hasPremissions = accesses.reduce((acc, cur) => {
                    if (!acc) {
                        return acc;
                    }
                    if (
                        ContextCompat.checkSelfPermission(currentContext, cur) !==
                        PackageManager.PERMISSION_GRANTED
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                }, true);
                if (hasPremissions) {
                    let activityRequestPermissionHandler = (
                        args: application.AndroidActivityRequestPermissionsEventData
                    ) => {
                        application.android.off(
                            application.AndroidApplication.activityRequestPermissionsEvent,
                            activityRequestPermissionHandler
                        );
                        if (
                            args.requestCode === REQUEST_REQUIRED_PERMISSIONS &&
                            args.grantResults.length > 0 &&
                            args.grantResults[0] ===
                                PackageManager.PERMISSION_GRANTED &&
                            args.grantResults[1] ===
                                PackageManager.PERMISSION_GRANTED &&
                            args.grantResults[2] ===
                                PackageManager.PERMISSION_GRANTED
                        ) {
                            resolve(true);
                        } else {
                            reject(false);
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
                            'android.permission.' + accesses[0],
                            'android.permission.' + accesses[1],
                            'android.permission.' + accesses[2]
                        ],
                        REQUEST_REQUIRED_PERMISSIONS
                    );
                } else {
                    resolve(true);
                }
            } else {
                resolve(true);
            }
        });
    }

    private connect(): Promise<ResultResponse> {
        const action = 'Creating Client';
        return new Promise((resolve, reject) => {
            let mClient = new GoogleApiClient.Builder(application.android.currentContext)
                .addApi(Fitness.HISTORY_API)
                .addApi(Fitness.SESSIONS_API)
                .addApi(Fitness.RECORDING_API)
                .addScope(new Scope(Scopes.FITNESS_ACTIVITY_READ))
                .addScope(new Scope(Scopes.FITNESS_BODY_READ))
                .addScope(new Scope(Scopes.FITNESS_LOCATION_READ))
                .addScope(new Scope(Scopes.FITNESS_NUTRITION_READ))
                .addConnectionCallbacks(new GoogleApiClient.ConnectionCallbacks({
                    onConnected: (Bundle: android.os.Bundle) => {
                        const response = createResultResponse(
                            action,
                            'Google Play services connected successfully'
                        );
                        this.mClient = mClient;
                        resolve(response);
                    },
                    onConnectionSuspended: (i: number) => {
                        if (
                            i ===
                            GoogleApiClient
                                .ConnectionCallbacks
                                .CAUSE_NETWORK_LOST
                        ) {
                            console.log(
                                'Connection Lost, Network Lost'
                            );
                        } else {
                            console.log(
                                'Connection lost, Service Disconnected'
                            );
                        }
                    }
                })
            ).addOnConnectionFailedListener(
                new GoogleApiClient.OnConnectionFailedListener({
                    onConnectionFailed: (result: com.google.android.gms.common.ConnectionResult) => {
                        console.log(
                            'Google Play services connection failed'
                        );
                        if (result.hasResolution()) {
                            this.requestAuthorization(
                                [
                                    'GET_ACCOUNTS',
                                    'ACCESS_FINE_LOCATION',
                                    'BODY_SENSORS'
                                ])
                                .then(resultPermissions => {
                                    if (resultPermissions) {
                                        result.startResolutionForResult(
                                            application.android
                                                .foregroundActivity,
                                            REQUEST_CODE
                                        );
                                    } else {
                                        this.mClient = null;
                                        reject(
                                            createErrorResponse(
                                                action,
                                                'Google Play services connection failed. You have not system permissions to connect to Google Play Services'
                                            )
                                        );
                                    }
                                });
                        } else {
                            this.mClient = null;
                            reject(
                                createErrorResponse(
                                    action,
                                    'Cannot connect to your Google Account'
                                )
                            );
                        }
                    }
                })
            ).build();
            mClient.connect();
        });
    }

    private validateConfiguration(config: ConfigurationData) {
        return config.endDate > config.startDate;
    }

    constructor() {
        super();
        this.mClient = null;
    }
}

export const aggregatedDataTypes = {
    TYPE_STEP_COUNT_DELTA: DataType.AGGREGATE_STEP_COUNT_DELTA,
    TYPE_DISTANCE_DELTA: DataType.AGGREGATE_DISTANCE_DELTA,
    TYPE_CALORIES_EXPENDED: DataType.AGGREGATE_CALORIES_EXPENDED,
    // "TYPE_HEIGHT": DataType.AGGREGATE_HEIGHT_SUMMARY,
    TYPE_WEIGHT: DataType.AGGREGATE_WEIGHT_SUMMARY,
    // "TYPE_HEART_RATE_BPM": DataType.AGGREGATE_HEART_RATE_SUMMARY,
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
