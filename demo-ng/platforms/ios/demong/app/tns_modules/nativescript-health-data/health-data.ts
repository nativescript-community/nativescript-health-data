import { Common } from './health-data.common';

declare var HKHealthStore: any;

export const RETURN_NOT_SUPPORTED = "const not supported";
export const RETURN_NO_PROBLEMS = "ok";
export const RETURN_HAS_RIGHTS = "permissions conceded";
export const RETURN_DOES_NOT_HAS_RIGHTS = "permissions denied";

export class HealthData extends Common {
    healthStore: HKHealthStore;
    permissions = {};
    
    showData(data: string) {        
        console.log('getting constant');
        let constToRead = this.convertToIdentifier(data);
        if(constToRead === "") return;

        console.log('constant ' + constToRead + ' retrieved');
        if(this.permissions[constToRead] === undefined) {
            // access permission not determined
            console.log('i donnot know if i have permission');
            this.requestPermissions(constToRead, () => {
                console.log('callback')
                if(!this.permissions[constToRead]) {
                    return;
                }
                this.askForData(constToRead);
            });
        } else if (this.permissions[constToRead]) {
            // access permission granted
            console.log('permission granted');
            this.permissions[constToRead] = true;
            this.askForData(constToRead);
        }
    }

    private askForData(constToRead: any) {
        let endDateSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(HKSampleSortIdentifierEndDate, false);
        let query = HKSampleQuery.alloc().initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(HKObjectType.quantityTypeForIdentifier(constToRead), null, 
            null, NSArray.arrayWithObject(<any>endDateSortDescriptor), (query, results, error) => {
                if(results) {
                    this.result = '';
                    let listResults = (<NSArray<HKQuantitySample>>results);
                    for(let index = 0; index < listResults.count; index++) {
                        this.result += listResults.objectAtIndex(index).quantityType + ' ' + listResults.objectAtIndex(index).quantity + '\n';
                    }
                    console.log('NEW MESSAGE: ' + this.result);
                } else {
                    console.log('error: ');
                    console.dir(error);
                }
        });
        this.healthStore.executeQuery(query);
    }

    private convertToIdentifier(data: string) {
        switch(data) {
            case "bodyMassIndex" :
                return HKQuantityTypeIdentifierBodyMassIndex;
            case "bloodPressureSystolic" :
                return HKQuantityTypeIdentifierBloodPressureSystolic;
            case "bloodPressureDiastolic" :
                return HKQuantityTypeIdentifierBloodPressureDiastolic;
            default :
                return "";
        }
    }

    requestPermissions(data: string, fn) {
        if(HKHealthStore.isHealthDataAvailable()) {
            console.log('Store available');

            let dataToAccess = HKObjectType.quantityTypeForIdentifier(data);
            let readDataType = NSSet.setWithObject(dataToAccess);

            console.log(this.healthStore.dateOfBirthWithError());
            this.healthStore.requestAuthorizationToShareTypesReadTypesCompletion(null, readDataType, (success, error) => {
                if(success) {
                    console.log('has rights');
                    this.permissions[data] = true;
                    fn();
                    return true;
                } else {
                    console.log('dont have rights');
                    console.dir(error);
                    this.permissions[data] = false;
                    fn();
                    return false;
                }
            });
        }
    }

    constructor() {
        super();
        this.healthStore = HKHealthStore.new();
    }
    
}

