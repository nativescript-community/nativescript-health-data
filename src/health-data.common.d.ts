import { Observable } from 'tns-core-modules/data/observable';
export interface configurationData {
    gfStartTimeInMillis: number;
    gfEndTimeInMillis: number;
    gfBucketUnit: string;
    gfBucketSize: number;
    typeOfData: string;
}
export declare class Common extends Observable {
    hasPermissions: boolean;
    result: string;
    constructor();
}
