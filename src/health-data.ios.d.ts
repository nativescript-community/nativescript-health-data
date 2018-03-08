import { Common, HealthDataApi, HealthDataType, QueryRequest } from './health-data.common';
export declare class HealthData extends Common implements HealthDataApi {
    healthStore: HKHealthStore;
    constructor();
    isAvailable(): Promise<boolean>;
    isAuthorized(types: Array<HealthDataType>): Promise<boolean>;
    requestAuthorization(types: Array<HealthDataType>): Promise<boolean>;
    query(opts: QueryRequest): Promise<any>;
    private resolveDataType(type);
    private queryForQuantityOrCategoryData(dataType, start, end, aggregateBy, unitString, callback);
    private queryForCharacteristicData(dataType);
}
