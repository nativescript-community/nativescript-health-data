/// <reference path="android.def.d.ts" />
import { Common, QueryRequest } from './health-data.common';
export declare class HealthData extends Common {
    isAvailable(): Promise<boolean>;
    query(opts: QueryRequest): Promise<any>;
    private parseData(readResult);
    private dumpDataSet(dataSet);
    isAuthorized(constToRead: string): void;
    private getDataType(pluginType);
    requestAuthorization(type: string | string[]): Promise<boolean>;
    requestAuthorizationOrig(accesses: string[]): Promise<boolean>;
}
export declare const aggregatedDataTypes: {
    TYPE_STEP_COUNT_DELTA: any;
    TYPE_DISTANCE_DELTA: any;
    TYPE_CALORIES_EXPENDED: any;
    TYPE_HEIGHT: any;
    TYPE_WEIGHT: any;
    "TYPE_HEART_RATE_BPM": any;
    TYPE_BODY_FAT_PERCENTAGE: any;
    TYPE_NUTRITION: any;
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
