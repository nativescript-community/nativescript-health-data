import { Common } from './health-data.common';

export const QuantityTypeNeeded = "quantity_type_needed";
export const CharacteristicTypeNeeded = "characteristic_type_needed";
export const CategoryTypeNeeded = "category_type_needed";
export const QuantityResultNeeded = "quantity_result_needed";
export const CategoryResultNeeded = "category_result_needed";

export class HealthData extends Common {
    healthStore: HKHealthStore;
    permissions = {};
    
    getData(data: string) {        
        // console.log('getting constant ' + data);
        if(quantityTypes[data]) {
            // check previously given permission. TODO
            this.requestPermissionForData(quantityTypes[data], QuantityTypeNeeded, () => {
                if(!this.permissions[quantityTypes[data]]) {
                    return;
                }
                this.askForQuantityOrCategoryData(quantityTypes[data], QuantityResultNeeded);
            });
        } else if(characteristicTypes[data]) {
            this.requestPermissionForData(characteristicTypes[data], CharacteristicTypeNeeded, () => {
                if(!this.permissions[characteristicTypes[data]]) {
                    return;
                }
                this.askForCharacteristicData(characteristicTypes[data]);
            });
        } else if(categoryTypes[data]) {
            this.requestPermissionForData(categoryTypes[data], CategoryTypeNeeded, () => {
                if(!this.permissions[categoryTypes[data]]) {
                    return;
                }
                this.askForQuantityOrCategoryData(categoryTypes[data], CategoryResultNeeded);
            });
        }
    }

    private requestPermissionForData(constToRead: string, type: string, fn) {
        // console.log('request ' + type + ' data');
        if(HKHealthStore.isHealthDataAvailable()) {
            // console.log('Store available');

            let dataToAccess;
            if(type === QuantityTypeNeeded) {
                dataToAccess = HKObjectType.quantityTypeForIdentifier(constToRead);
            } else if(type === CharacteristicTypeNeeded) {
                dataToAccess = HKObjectType.characteristicTypeForIdentifier(constToRead);
            } else {
                dataToAccess = HKObjectType.categoryTypeForIdentifier(constToRead);
            } 

            let readDataType = NSSet.setWithObject(dataToAccess);
            this.healthStore.requestAuthorizationToShareTypesReadTypesCompletion(null, readDataType, (success, error) => {
                if(success) {
                    // console.log('has rights');
                    this.permissions[constToRead] = true;
                    fn();
                    return true;
                } else {
                    // console.log('dont have rights');
                    console.dir(error);
                    this.permissions[constToRead] = false;
                    fn();
                    return false;
                }
            });
        }
    }

    private askForQuantityOrCategoryData(constToRead: string, type: string) {
        let objectType;
        if (type === QuantityResultNeeded) {
            objectType = HKObjectType.quantityTypeForIdentifier(constToRead);
        } else if (type === CategoryResultNeeded) {
            objectType = HKObjectType.categoryTypeForIdentifier(constToRead);
        }
        let endDateSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(HKSampleSortIdentifierEndDate, false);
        let query = HKSampleQuery.alloc().initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(objectType, null, 
            null, NSArray.arrayWithObject(<any>endDateSortDescriptor), (query, results, error) => {
                if(results) {
                    let dataToRetrieve = {};
                    dataToRetrieve['type'] = constToRead;
                    dataToRetrieve['data'] = [];
                    let listResults = (<NSArray<HKQuantitySample>>results);
                    for(let index = 0; index < listResults.count; index++) {
                        dataToRetrieve['data'].push(listResults.objectAtIndex(index).quantity.toString());
                    }
                    this.result = JSON.stringify(dataToRetrieve);
                } else {
                    // console.log('error: ');
                    console.dir(error);
                }
        });
        this.healthStore.executeQuery(query);
    }

    private askForCharacteristicData(data: any) {
        // console.log('ask for characteristic data ' + data);
        let dataToRetrieve;
        switch(data) {
            case HKCharacteristicTypeIdentifierBiologicalSex:
                dataToRetrieve = {
                    "type" : data,
                    "result" : this.healthStore.biologicalSexWithError().biologicalSex
                }
                break;
            case HKCharacteristicTypeIdentifierBloodType:
                dataToRetrieve = {
                    "type" : data,
                    "result" : this.healthStore.bloodTypeWithError().bloodType
                };
                break;
            case HKCharacteristicTypeIdentifierDateOfBirth:
                dataToRetrieve = {
                    "type" : data,
                    "result" : this.healthStore.dateOfBirthComponentsWithError().date
                };
                break;
            case HKCharacteristicTypeIdentifierFitzpatrickSkinType:
                dataToRetrieve = {
                    "type" : data,
                    "result" : this.healthStore.fitzpatrickSkinTypeWithError().skinType
                };
                break;
            case HKCharacteristicTypeIdentifierWheelchairUse:
                dataToRetrieve = {
                    "type" : data,
                    "result" : this.healthStore.wheelchairUseWithError().wheelchairUse
                };                
                break;
            default:
                return;
        }
        this.result = JSON.stringify(dataToRetrieve);
    }
    
    private convertToQuantityIdentifier(data: string) {
        return quantityTypes[data];
    }

    private convertToCharacteristicIdentifier(data: string) {
        return characteristicTypes[data];
    }

    private convertToCategoryIdentifier(data: string) {
        return categoryTypes[data];
    }

    createClient() {
        this.healthStore = HKHealthStore.new();
    }

    constructor() {
        super();
    }
    
}

export const quantityTypes = {
    "appleExerciseTime" : HKQuantityTypeIdentifierAppleExerciseTime,
    "basalBodyTemperature" : HKQuantityTypeIdentifierBasalBodyTemperature,
    "basalEnergyBurned": HKQuantityTypeIdentifierBasalEnergyBurned,
    "bloodAlcoholContent": HKQuantityTypeIdentifierBloodAlcoholContent,
    "bloodGlucose": HKQuantityTypeIdentifierBloodGlucose,
    "bloodPressureDiastolic": HKQuantityTypeIdentifierBloodPressureDiastolic,
    "bloodPressureSystolic": HKQuantityTypeIdentifierBloodPressureSystolic,
    "bodyFatPercentage": HKQuantityTypeIdentifierBodyFatPercentage,
    "bodyMass": HKQuantityTypeIdentifierBodyMass,
    "bodyMassIndex": HKQuantityTypeIdentifierBodyMassIndex,
    "bodyTemperature": HKQuantityTypeIdentifierBodyTemperature,
    "dietaryBiotin": HKQuantityTypeIdentifierDietaryBiotin,
    "dietaryCaffeine": HKQuantityTypeIdentifierDietaryCaffeine,
    "dietaryCalcium": HKQuantityTypeIdentifierDietaryCalcium,
    "dietaryCarbohydrates": HKQuantityTypeIdentifierDietaryCarbohydrates,
    "dietaryChloride": HKQuantityTypeIdentifierDietaryChloride,
    "dietaryCholesterol": HKQuantityTypeIdentifierDietaryCholesterol,
    "dietaryChromium": HKQuantityTypeIdentifierDietaryChromium,
    "dietaryCopper": HKQuantityTypeIdentifierDietaryCopper,
    "dietaryEnergyConsumed": HKQuantityTypeIdentifierDietaryEnergyConsumed,
    "dietaryFatMonounsaturated": HKQuantityTypeIdentifierDietaryFatMonounsaturated,
    "dietaryFatPolyunsaturated": HKQuantityTypeIdentifierDietaryFatPolyunsaturated, 
    "dietaryFatSaturated": HKQuantityTypeIdentifierDietaryFatSaturated,
    "dietaryFatTotal": HKQuantityTypeIdentifierDietaryFatTotal,
    "dietaryFiber": HKQuantityTypeIdentifierDietaryFiber,
    "dietaryFolate": HKQuantityTypeIdentifierDietaryFolate,
    "dietaryIodine": HKQuantityTypeIdentifierDietaryIodine,
    "dietaryIron": HKQuantityTypeIdentifierDietaryIron,
    "dietaryMagnesium": HKQuantityTypeIdentifierDietaryMagnesium,
    "dietaryManganese": HKQuantityTypeIdentifierDietaryManganese,
    "dietaryaMolybdenum": HKQuantityTypeIdentifierDietaryMolybdenum,
    "dietaryNiacin": HKQuantityTypeIdentifierDietaryNiacin,
    "dietaryPantothenicAcid": HKQuantityTypeIdentifierDietaryPantothenicAcid,
    "dietaryPhosphorus": HKQuantityTypeIdentifierDietaryPhosphorus,
    "dietaryPotassium": HKQuantityTypeIdentifierDietaryPotassium,
    "dietaryProtein": HKQuantityTypeIdentifierDietaryProtein,
    "dietaryRiboflavin": HKQuantityTypeIdentifierDietaryRiboflavin,
    "dietarySelenium": HKQuantityTypeIdentifierDietarySelenium,
    "dietarySodium": HKQuantityTypeIdentifierDietarySodium,
    "dietarySugar": HKQuantityTypeIdentifierDietarySugar,
    "dietaryThiamin": HKQuantityTypeIdentifierDietaryThiamin,
    "dietaryViataminA": HKQuantityTypeIdentifierDietaryVitaminA,
    "dietaryVitaminB12": HKQuantityTypeIdentifierDietaryVitaminB12,
    "dietaryVitaminB6": HKQuantityTypeIdentifierDietaryVitaminB6,
    "dietaryVitaminC": HKQuantityTypeIdentifierDietaryVitaminC,
    "dietaryVitaminD": HKQuantityTypeIdentifierDietaryVitaminD,
    "dietaryVitaminE": HKQuantityTypeIdentifierDietaryVitaminE,
    "dietaryVitaminK": HKQuantityTypeIdentifierDietaryVitaminK,
    "dietaryWater": HKQuantityTypeIdentifierDietaryWater,
    "dietaryZinc": HKQuantityTypeIdentifierDietaryZinc,
    "distanceCycling": HKQuantityTypeIdentifierDistanceCycling,
    "distanceSwimming": HKQuantityTypeIdentifierDistanceSwimming,
    "distanceWalkingRunning": HKQuantityTypeIdentifierDistanceWalkingRunning,
    "distanceWheelChair": HKQuantityTypeIdentifierDistanceWheelchair,
    "electrodermalActivity": HKQuantityTypeIdentifierElectrodermalActivity,
    "flightsClimbed": HKQuantityTypeIdentifierFlightsClimbed,
    "forcedExpiratoryVolume1": HKQuantityTypeIdentifierForcedExpiratoryVolume1,
    "forcedVitalCapacity": HKQuantityTypeIdentifierForcedVitalCapacity,
    "heartRate": HKQuantityTypeIdentifierHeartRate,
    "height": HKQuantityTypeIdentifierHeight,
    "inhalerUsage" : HKQuantityTypeIdentifierInhalerUsage,
    "leanBodyMass": HKQuantityTypeIdentifierLeanBodyMass,
    "nikeFuel": HKQuantityTypeIdentifierNikeFuel,
    "numberOfTimesFallen": HKQuantityTypeIdentifierNumberOfTimesFallen,
    "oxygenSaturation": HKQuantityTypeIdentifierOxygenSaturation,
    "peakExpiratoryFlowRate": HKQuantityTypeIdentifierPeakExpiratoryFlowRate,
    "peripheralPerfusionIndex": HKQuantityTypeIdentifierPeripheralPerfusionIndex,
    "pushCount": HKQuantityTypeIdentifierPushCount,
    "respiratoryRate": HKQuantityTypeIdentifierRespiratoryRate,
    "stepCount": HKQuantityTypeIdentifierStepCount,
    "swimmingStrokeCount": HKQuantityTypeIdentifierSwimmingStrokeCount,
    "uvExposure": HKQuantityTypeIdentifierUVExposure,
};

export const characteristicTypes = {
    "biologicalSex" : HKCharacteristicTypeIdentifierBiologicalSex,
    "bloodType" : HKCharacteristicTypeIdentifierBloodType,
    "dateOfBirthComponents" : HKCharacteristicTypeIdentifierDateOfBirth,
    "fitzpatrickSkinType" : HKCharacteristicTypeIdentifierFitzpatrickSkinType,
    "wheelchairUse" : HKCharacteristicTypeIdentifierWheelchairUse
}

export const categoryTypes = {
    "appleStandHour" : HKCategoryTypeIdentifierAppleStandHour,
    "cervicalMucusQuality" : HKCategoryTypeIdentifierCervicalMucusQuality,
    "intermenstrualBleeding" : HKCategoryTypeIdentifierIntermenstrualBleeding,
    "menstrualFlow" : HKCategoryTypeIdentifierMenstrualFlow,
    "mindfulSession" : HKCategoryTypeIdentifierMindfulSession,
    "ovulationTestResult" : HKCategoryTypeIdentifierOvulationTestResult,
    "sexualActivity" : HKCategoryTypeIdentifierSexualActivity,
    "sleepAnalysis" : HKCategoryTypeIdentifierSleepAnalysis
}
