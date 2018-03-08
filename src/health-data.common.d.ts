import { Observable } from "tns-core-modules/data/observable";
export interface ConfigurationData {
    startDate: Date;
    endDate: Date;
    gfBucketUnit: string;
    gfBucketSize: number;
    typeOfData: string;
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
export declare class Common extends Observable {
    hasPermissions: boolean;
    result: string;
    constructor();
    protected isSameAggregationInterval(item: ResponseItem, previousItem: ResponseItem, aggregateBy: AggregateBy): boolean;
}
