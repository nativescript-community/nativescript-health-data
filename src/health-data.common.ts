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
    value: number;
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

export function createResultResponse(action: string, message: string, type?: string, result?: Array<ResponseItem>): ResultResponse {
    return {
        status: { action, message },
        data: {
            type: type || null,
            response: result || null
        }
    };
}

export function createErrorResponse(action: string, description: string): ErrorResponse {
    return { action, description };
}

export class Common extends Observable {
    public hasPermissions: boolean;
    public result: string;

    constructor() {
        super();
    }
}
