import { Common, QueryRequest } from './health-data.common';
export declare class HealthData extends Common {
    healthStore: HKHealthStore;
    constructor();
    isAvailable(): Promise<boolean>;
    isAuthorized(type: string | string[]): Promise<boolean>;
    requestAuthorization(constToRead: string | string[]): Promise<boolean>;
    query(opts: QueryRequest): Promise<any>;
    private resolveDataType(constToRead);
    private queryForQuantityOrCategoryData(dataType, start, end, aggregateBy, unitString, callback);
    private queryForCharacteristicData(dataType);
}
