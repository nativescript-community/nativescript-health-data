/// <reference path="android.def.d.ts" />
import { Common, ConfigurationData, ResultResponse } from "./health-data.common";
export declare class HealthData extends Common {
    private mClient;
    getCommonData(config: ConfigurationData): Promise<ResultResponse>;
    getUncommonData(config: ConfigurationData): Promise<ResultResponse>;
    private getData(config, successCallback, failureCallback);
    private queryFitnessData(config, fn);
    private parseData(readResult);
    private dumpDataSet(dataSet);
    private getPermissions(accesses, fn);
    createClient(): Promise<{}>;
    private validateConfiguration(config);
    constructor();
}
export declare const aggregatedDataTypes: {
    TYPE_STEP_COUNT_DELTA: com.google.android.gms.fitness.data.DataType;
    TYPE_DISTANCE_DELTA: com.google.android.gms.fitness.data.DataType;
    TYPE_CALORIES_EXPENDED: com.google.android.gms.fitness.data.DataType;
    TYPE_WEIGHT: com.google.android.gms.fitness.data.DataType;
    TYPE_BODY_FAT_PERCENTAGE: com.google.android.gms.fitness.data.DataType;
    TYPE_NUTRITION: com.google.android.gms.fitness.data.DataType;
};
export declare const acceptableDataTypesForCommonity: {
    steps: string;
    distance: string;
    calories: string;
    height: string;
    weight: string;
    heartRate: string;
    fatPercentage: string;
};
