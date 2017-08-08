import { Common } from './health-data.common';
export declare class HealthData extends Common {
    private mClient;
    getData(data: string): void;
    getPermissions(fn: any): void;
    queryFitnessData(): void;
    printData(readResult: any): void;
    dumpDataSet(dataSet: any): void;
    createClient(): void;
    constructor();
}
