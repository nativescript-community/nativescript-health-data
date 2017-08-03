import { Common } from './health-data.common';
export declare const RETURN_NOT_SUPPORTED = "const not supported";
export declare const RETURN_NO_PROBLEMS = "ok";
export declare const RETURN_HAS_RIGHTS = "permissions conceded";
export declare const RETURN_DOES_NOT_HAS_RIGHTS = "permissions denied";
export declare class HealthData extends Common {
    healthStore: HKHealthStore;
    permissions: {};
    showData(data: string): void;
    private askForData(constToRead);
    private convertToIdentifier(data);
    requestPermissions(data: string, fn: any): void;
    constructor();
}
