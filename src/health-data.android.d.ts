import { Common, IConfigurationData } from './health-data.common';
export declare class HealthData extends Common {
    private mClient;
    getCommonData(config: IConfigurationData): Promise<{}>;
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
    "TYPE_STEP_COUNT_DELTA": any;
    "TYPE_DISTANCE_DELTA": any;
    "TYPE_CALORIES_EXPENDED": any;
    "TYPE_WEIGHT": any;
    "TYPE_BODY_FAT_PERCENTAGE": any;
    "TYPE_NUTRITION": any;
};
export declare const acceptableDataTypesForCommonity: {
    "steps": string;
    "distance": string;
    "calories": string;
    "height": string;
    "weight": string;
    "heartRate": string;
    "fatPercentage": string;
};
