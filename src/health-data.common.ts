import { Observable } from "tns-core-modules/data/observable";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";

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

export function createIResultResponse(action: string) {
    return {
        status: { action },
        data: {}
    };
}

export function createIErrorResponse(action: string) {
    return { action };
}

export class Common extends Observable {
    public hasPermissions: boolean;
    public result: string;

    constructor() {
        super();
    }
}
