import { Observable } from "tns-core-modules/data/observable";
export interface ConfigurationData {
    gfStartTimeInMillis: number;
    gfEndTimeInMillis: number;
    gfBucketUnit: string;
    gfBucketSize: number;
    typeOfData: string;
}
export interface ResponseItem {
    start: Date;
    end: Date;
    value: string;
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
}
