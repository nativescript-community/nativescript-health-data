/// <reference path="android.def.d.ts" />
import { Common, HealthDataApi, HealthDataType, QueryRequest } from './health-data.common';
export declare class HealthData extends Common implements HealthDataApi {
    isAvailable(): Promise<boolean>;
    isAuthorized(types: Array<HealthDataType>): Promise<boolean>;
    requestAuthorization(types: Array<HealthDataType>): Promise<boolean>;
    query(opts: QueryRequest): Promise<any>;
    private parseData(readResult, aggregateBy?);
    private dumpDataSet(dataSet, aggregateBy?);
    private getDataType(pluginType);
}
