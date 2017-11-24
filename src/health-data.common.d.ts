import { Observable } from "tns-core-modules/data/observable";
export interface IConfigurationData {
    gfStartTimeInMillis: number;
    gfEndTimeInMillis: number;
    gfBucketUnit: string;
    gfBucketSize: number;
    typeOfData: string;
}
export interface IResultResponse {
    status: {
        action: string;
        message?: string;
    };
    data: {
        type?: string;
        response?: string;
    };
}
export interface IErrorResponse {
    action: string;
    code?: string;
    description?: string;
}
export declare function createIResultResponse(action: string): {
    status: {
        action: string;
    };
    data: {};
};
export declare function createIErrorResponse(action: string): {
    action: string;
};
export declare class Common extends Observable {
    hasPermissions: boolean;
    result: string;
    constructor();
}
