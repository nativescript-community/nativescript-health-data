import { Common } from './health-data.common';
import * as utils from 'tns-core-modules/utils/utils';
import * as application from 'tns-core-modules/application';
import * as platform from 'tns-core-modules/platform';

declare const com: any;
declare const android: any;
var REQUEST_REQUIRED_PERMISSIONS = 1234;
var REQUEST_CODE = 1;

export class HealthData extends Common {
    private mClient: any;
    
    getData(data:string) {
        console.log('nooooooooooob');
    }

    getPermissions(fn) {
        let currentContext = application.android.currentContext;
        if (parseInt(platform.device.sdkVersion) >= 23) {
            // console.log('aqui1');   
            if ( (<any>android.support.v4.content.ContextCompat).checkSelfPermission(currentContext, (<any>android).Manifest.permission.GET_ACCOUNTS) != android.content.pm.PackageManager.PERMISSION_GRANTED) {
                let activityRequestPermissionHandler = (args: application.AndroidActivityRequestPermissionsEventData) => {
                    application.android.off(application.AndroidApplication.activityRequestPermissionsEvent, activityRequestPermissionHandler);
                    if (args.requestCode === REQUEST_REQUIRED_PERMISSIONS && args.grantResults.length > 0 && args.grantResults[0] === android.content.pm.PackageManager.PERMISSION_GRANTED) {
                        this.hasPermissions = true;
                        // console.log('aqui2');    
                        fn();
                    }
                }
                application.android.on(application.AndroidApplication.activityRequestPermissionsEvent, activityRequestPermissionHandler);
                (<any>android.support.v4.app).ActivityCompat.requestPermissions(application.android.currentContext, ['android.permission.GET_ACCOUNTS'], REQUEST_REQUIRED_PERMISSIONS);
            } else {
                // console.log('aqui3');        
                this.hasPermissions = true;
                fn();
            }
        } else {
            this.hasPermissions = true;
            fn();
        }
    } 

    queryFitnessData() {
        // [START parse_read_data_result]
        // If the DataReadRequest object specified aggregated data, dataReadResult will be returned
        // as buckets containing DataSets, instead of just DataSets.
        let context = this;
        let cal = java.util.Calendar.getInstance();
        let now = new java.util.Date();
        cal.setTime(now);
        let endTime = cal.getTimeInMillis();
        cal.add(java.util.Calendar.WEEK_OF_YEAR, -1);
        let startTime = cal.getTimeInMillis();

        let dateFormat = java.text.DateFormat.getDateInstance();
        console.log('1');
        let readRequest = new com.google.android.gms.fitness.request.DataReadRequest.Builder()
            .aggregate(com.google.android.gms.fitness.data.DataType.TYPE_STEP_COUNT_DELTA, 
                            com.google.android.gms.fitness.data.DataType.AGGREGATE_STEP_COUNT_DELTA)
            .bucketByTime(1, java.util.concurrent.TimeUnit.DAYS)
            .setTimeRange(startTime, endTime, java.util.concurrent.TimeUnit.MILLISECONDS)
            .build();
        console.log('2');
        
        let readResult = com.google.android.gms.fitness.Fitness.HistoryApi.readData(this.mClient, readRequest).setResultCallback(new com.google.android.gms.common.api.ResultCallback({
            onResult: function(result: any) {
                context.printData(result);
            },
        }));
        console.log('3');
        // this.printData(readResult);
    }

    printData(readResult: any) {
        console.log('I am going to print');
        if(readResult.getBuckets().size() > 0) {
            for(let indexBucket = 0; indexBucket < readResult.getBuckets().size(); indexBucket++) {
                let dataSets = readResult.getBuckets().get(indexBucket).getDataSets();
                console.log(dataSets);
                for(let indexDataSet = 0; indexDataSet < dataSets.size(); indexDataSet++) {
                    this.dumpDataSet(dataSets.get(indexDataSet));
                }
            }
        } else if(readResult.getDataSets().size() > 0) {
            console.log(readResult.getDataSets());
            for(let index = 0; index < readResult.getDataSets().size(); index++) {
                this.dumpDataSet(readResult.getDataSets().get(index));
            }
        }
    }

    dumpDataSet(dataSet: any) {
        let dateFormat = java.text.DateFormat.getTimeInstance();
        console.log('Data returned for Data type: ' + dataSet.getDataType().getName());

        for(let index = 0; index < dataSet.getDataPoints().size(); index++) {
            let pos = dataSet.getDataPoints().get(index);
            console.log('Data point:');
            console.log('Type:' + pos.getDataType().getName());
            console.log('Start:' + new Date(pos.getStartTime(java.util.concurrent.TimeUnit.MILLISECONDS)).toString());
            console.log('End:' + new Date(pos.getEndTime(java.util.concurrent.TimeUnit.MILLISECONDS)).toString());
            for(let indexField = 0; indexField < pos.getDataType().getFields().size(); indexField++) {
                let field = pos.getDataType().getFields().get(indexField);
                console.log('Field: ' + field.getName() + ' Value:' + pos.getValue(field));                
            }
        }
    }

    createClient() {
        console.log('creating client');
        let context = this;

        this.getPermissions(() => {
            console.log(this.hasPermissions);
            if(this.hasPermissions) {
                this.mClient = new com.google.android.gms.common.api.GoogleApiClient.Builder(application.android.currentContext)
                    .addApi(com.google.android.gms.fitness.Fitness.HISTORY_API)
                    .addScope(new com.google.android.gms.common.api.Scope(com.google.android.gms.common.Scopes.FITNESS_ACTIVITY_READ_WRITE))
                    .addConnectionCallbacks(new com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks({
                        onConnected: function (Bundle: android.os.Bundle) {
                            console.log('Google Play services connected successfully');
                            context.result = "Client created successfully";
                            context.queryFitnessData();
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
                            console.log(result.toString());
                            console.log("Google Play services connection failed");
                            if(result.hasResolution()) {
                                console.log('no?');
                                console.dir(result);
                                result.startResolutionForResult(application.android.foregroundActivity, REQUEST_CODE);
                            } else {
                                console.log('there is no resolution?');
                            }
                        }
                    }))
                    .build();
                this.mClient.connect();
            };
        });
    }

    constructor() {
        super();
        this.hasPermissions = false;
        this.createClient();
    }
}
