import { Common } from './health-data.common';
export declare class HealthData extends Common {
    private mClient;
    getData(data: string, startTimeInMillis: number, endTimeInMillis: number, bucketUnit: string, bucketSize: number, fn: any): void;
    private queryFitnessData(data, startTimeInMillis, endTimeInMillis, bucketUnit, bucketSize, fn);
    private parseData(readResult);
    private dumpDataSet(dataSet);
    private getPermissions(fn);
    createClient(): void;
    constructor();
}
