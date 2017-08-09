import { Common, configurationData } from './health-data.common';
export declare class HealthData extends Common {
    private mClient;
    getData(config: configurationData, fn: any): void;
    private queryFitnessData(config, fn);
    private parseData(readResult);
    private dumpDataSet(dataSet);
    private getPermissions(fn);
    createClient(): void;
    constructor();
}
export declare const aggregatedDataTypes: {
    TYPE_STEP_COUNT_DELTA: any;
    TYPE_CALORIES_CONSUMED: any;
    TYPE_CALORIES_EXPENDED: any;
    TYPE_BASAL_METABOLIC_RATE: any;
    TYPE_POWER_SAMPLE: any;
    TYPE_HEART_RATE_BPM: any;
    TYPE_DISTANCE_DELTA: any;
    TYPE_SPEED: any;
    TYPE_HEIGHT: any;
    TYPE_WEIGHT: any;
    TYPE_BODY_FAT_PERCENTAGE: any;
    TYPE_NUTRITION: any;
    TYPE_HYDRATION: any;
};
