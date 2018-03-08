export interface ConfigurationData {
    startDate: Date;
    endDate: Date;
    gfBucketUnit: string;
    gfBucketSize: number;
    typeOfData: string;
}
export interface HealthDataType {
    name: string;
    accessType: "read" | "write" | "readAndWrite";
}
export declare type AggregateBy = "hour" | "day" | "sourceAndDay";
export interface QueryRequest {
    startDate: Date;
    endDate: Date;
    dataType: string;
    aggregateBy?: AggregateBy;
    unit: string;
}
export interface ResponseItem {
    start: Date;
    end: Date;
    value: number;
    source?: string;
}
export interface ResultResponse {
    status: {
        action: string;
        message: string;
    };
    data: {
        type: string;
        response: Array<ResponseItem>;
    };
}
export interface ErrorResponse {
    action: string;
    description: string;
}
export declare function createResultResponse(action: string, message: string, type?: string, result?: Array<ResponseItem>): ResultResponse;
export declare function createErrorResponse(action: string, description: string): ErrorResponse;
export interface HealthDataApi {
    isAvailable(): Promise<boolean>;
    isAuthorized(types: Array<HealthDataType>): Promise<boolean>;
    requestAuthorization(types: Array<HealthDataType>): Promise<boolean>;
    query(opts: QueryRequest): Promise<any>;
}
export declare abstract class Common {
    protected aggregate(parsedData: Array<ResponseItem>, aggregateBy?: AggregateBy): Array<ResponseItem>;
    private aggregateData(parsedData, aggregateBy, result);
    private isSameAggregationInterval(item, previousItem, aggregateBy);
}
