/// <reference path="android.def.d.ts" />
import { Common, QueryRequest } from './health-data.common';
export declare class HealthData extends Common {
    isAvailable(): Promise<boolean>;
    isAuthorized(type: string | string[]): Promise<boolean>;
    requestAuthorization(type: string | string[]): Promise<boolean>;
    query(opts: QueryRequest): Promise<any>;
    private parseData(readResult, aggregateBy?);
    private dumpDataSet(dataSet, aggregateBy?);
    private getDataType(pluginType);
}
