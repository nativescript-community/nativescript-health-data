import {
    Common,
    ErrorResponse,
    createErrorResponse,
    ConfigurationData,
    ResultResponse,
    createResultResponse
} from "./health-data.common";

export const QuantityTypeNeeded = "quantity_type_needed";
export const CharacteristicTypeNeeded = "characteristic_type_needed";
export const CategoryTypeNeeded = "category_type_needed";
export const QuantityResultNeeded = "quantity_result_needed";
export const CategoryResultNeeded = "category_result_needed";

export class HealthData extends Common {
    healthStore: HKHealthStore;

    constructor() {
        super();
    }
    getCommonData(config: ConfigurationData) {
        return new Promise<ResultResponse>((resolve, reject) => {
            const action = "Getting Common Data";
            if (this.healthStore === null) {
                reject(createErrorResponse(action, "You have to create your client first. Please, use createClient method first"));
            } else if (!acceptableDataTypes[config.typeOfData]) {
                reject(createErrorResponse(action, `The dataType "${config.typeOfData}" is not supported yet for both platforms. Use uncommon method`));
            } else {
                this.getData(config,
                    result => {
                        resolve(createResultResponse(action, "success", config.typeOfData, result));
                    },
                    errorMessage => {
                        reject(createErrorResponse(action, errorMessage));
                    });
            }
        });
    }

    getUncommonData(config: ConfigurationData) {
        return new Promise<ResultResponse>((resolve, reject) => {
            const action = "Getting Uncommon Data";
            if (this.healthStore === null) {
                reject(createErrorResponse(action, "You have to create your client first. Please, use createClient method first"));
            } else {
                this.getData(config, result => {
                        resolve(createResultResponse(action, "success", config.typeOfData, result));
                    }, error => {
                        reject(createErrorResponse(action, error));
                    });
            }
        });
    }

    private getData(
        config: ConfigurationData,
        successCallback,
        failureCallback
    ) {
        let typeOfData = acceptableDataTypes[config.typeOfData];
        if (quantityTypes[typeOfData]) {
            this.requestPermissionForData(
                quantityTypes[typeOfData],
                QuantityTypeNeeded,
                () => {
                    this.askForQuantityOrCategoryData(
                        quantityTypes[typeOfData],
                        QuantityResultNeeded,
                        result => {
                            successCallback(result.data);
                        },
                        error => {
                            failureCallback(error);
                        }
                    );
                },
                error => {
                    failureCallback(error);
                }
            );
        } else if (characteristicTypes[typeOfData]) {
            this.requestPermissionForData(
                characteristicTypes[typeOfData],
                CharacteristicTypeNeeded,
                () => {
                    this.askForCharacteristicData(
                        characteristicTypes[typeOfData],
                        result => {
                            successCallback(result.data);
                        },
                        error => {
                            failureCallback(error);
                        }
                    );
                },
                error => {
                    failureCallback(error);
                }
            );
        } else if (categoryTypes[typeOfData]) {
            this.requestPermissionForData(
                categoryTypes[typeOfData],
                CategoryTypeNeeded,
                () => {
                    this.askForQuantityOrCategoryData(
                        categoryTypes[typeOfData],
                        CategoryResultNeeded,
                        result => {
                            successCallback(result.data);
                        },
                        error => {
                            failureCallback(error);
                        }
                    );
                },
                error => {
                    failureCallback(error);
                }
            );
        } else {
            failureCallback("Type not supported");
        }
    }

    private requestPermissionForData(
        constToRead: string,
        type: string,
        successCallback,
        failureCallback
    ) {
        if (HKHealthStore.isHealthDataAvailable()) {

            let dataToAccess;
            if (type === QuantityTypeNeeded) {
                dataToAccess = HKObjectType.quantityTypeForIdentifier(
                    constToRead
                );
            } else if (type === CharacteristicTypeNeeded) {
                dataToAccess = HKObjectType.characteristicTypeForIdentifier(
                    constToRead
                );
            } else {
                dataToAccess = HKObjectType.categoryTypeForIdentifier(
                    constToRead
                );
            }

            let readDataType = NSSet.setWithObject(dataToAccess);
            this.healthStore.requestAuthorizationToShareTypesReadTypesCompletion(
                null,
                readDataType,
                (success, error) => {
                    if (success) {
                        successCallback();
                    } else {
                        failureCallback(
                            "You does not have permissions for requested data type"
                        );
                    }
                }
            );
        }
    }

    private askForQuantityOrCategoryData(
        constToRead: string,
        type: string,
        successCallback,
        failureCallback
    ) {
        let objectType;
        if (type === QuantityResultNeeded) {
            objectType = HKObjectType.quantityTypeForIdentifier(constToRead);
        } else if (type === CategoryResultNeeded) {
            objectType = HKObjectType.categoryTypeForIdentifier(constToRead);
        }
        let endDateSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(
            HKSampleSortIdentifierEndDate,
            false
        );
        let query = HKSampleQuery.alloc().initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(
            objectType,
            null,
            null,
            NSArray.arrayWithObject(<any>endDateSortDescriptor),
            (query, results, error) => {
                if (results) {
                    let dataToRetrieve = {};
                    dataToRetrieve["type"] = constToRead;
                    dataToRetrieve["data"] = [];
                    let listResults = <NSArray<HKQuantitySample>>results;
                    for (let index = 0; index < listResults.count; index++) {
                        // console.log(listResults.objectAtIndex(index).metadata);
                        dataToRetrieve["data"].push(
                            listResults.objectAtIndex(index).quantity.toString()
                        );
                    }
                    successCallback(dataToRetrieve);
                } else {
                    // console.log('error: ');
                    console.dir(error);
                    failureCallback(error);
                }
            }
        );
        this.healthStore.executeQuery(query);
    }

    private askForCharacteristicData(
        data: any,
        successCallback,
        failureCallback
    ) {
        // console.log('ask for characteristic data ' + data);
        let dataToRetrieve;
        switch (data) {
            case HKCharacteristicTypeIdentifierBiologicalSex:
                dataToRetrieve = {
                    type: data,
                    result: this.healthStore.biologicalSexWithError()
                        .biologicalSex
                };
                break;
            case HKCharacteristicTypeIdentifierBloodType:
                dataToRetrieve = {
                    type: data,
                    result: this.healthStore.bloodTypeWithError().bloodType
                };
                break;
            case HKCharacteristicTypeIdentifierDateOfBirth:
                dataToRetrieve = {
                    type: data,
                    result: this.healthStore.dateOfBirthComponentsWithError()
                        .date
                };
                break;
            case HKCharacteristicTypeIdentifierFitzpatrickSkinType:
                dataToRetrieve = {
                    type: data,
                    result: this.healthStore.fitzpatrickSkinTypeWithError()
                        .skinType
                };
                break;
            case HKCharacteristicTypeIdentifierWheelchairUse:
                dataToRetrieve = {
                    type: data,
                    result: this.healthStore.wheelchairUseWithError()
                        .wheelchairUse
                };
                break;
            default:
                return;
        }
        successCallback(dataToRetrieve);
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
        const action = "Creating Client";
        return new Promise((resolve, reject) => {
            try {
                this.healthStore = HKHealthStore.new();
            } catch (e) {
                reject(createErrorResponse(action, "You cannot initialize a new Health Store instance"));
                return;
            }
            resolve(createResultResponse(action, "Health Store instance initialized successfully"));
        });
    }

}

export const quantityTypes = {
    activeEnergyBurned: HKQuantityTypeIdentifierActiveEnergyBurned,
    appleExerciseTime: HKQuantityTypeIdentifierAppleExerciseTime,
    basalBodyTemperature: HKQuantityTypeIdentifierBasalBodyTemperature,
    basalEnergyBurned: HKQuantityTypeIdentifierBasalEnergyBurned,
    bloodAlcoholContent: HKQuantityTypeIdentifierBloodAlcoholContent,
    bloodGlucose: HKQuantityTypeIdentifierBloodGlucose,
    bloodPressureDiastolic: HKQuantityTypeIdentifierBloodPressureDiastolic,
    bloodPressureSystolic: HKQuantityTypeIdentifierBloodPressureSystolic,
    bodyFatPercentage: HKQuantityTypeIdentifierBodyFatPercentage,
    bodyMass: HKQuantityTypeIdentifierBodyMass,
    bodyMassIndex: HKQuantityTypeIdentifierBodyMassIndex,
    bodyTemperature: HKQuantityTypeIdentifierBodyTemperature,
    dietaryBiotin: HKQuantityTypeIdentifierDietaryBiotin,
    dietaryCaffeine: HKQuantityTypeIdentifierDietaryCaffeine,
    dietaryCalcium: HKQuantityTypeIdentifierDietaryCalcium,
    dietaryCarbohydrates: HKQuantityTypeIdentifierDietaryCarbohydrates,
    dietaryChloride: HKQuantityTypeIdentifierDietaryChloride,
    dietaryCholesterol: HKQuantityTypeIdentifierDietaryCholesterol,
    dietaryChromium: HKQuantityTypeIdentifierDietaryChromium,
    dietaryCopper: HKQuantityTypeIdentifierDietaryCopper,
    dietaryEnergyConsumed: HKQuantityTypeIdentifierDietaryEnergyConsumed,
    dietaryFatMonounsaturated: HKQuantityTypeIdentifierDietaryFatMonounsaturated,
    dietaryFatPolyunsaturated: HKQuantityTypeIdentifierDietaryFatPolyunsaturated,
    dietaryFatSaturated: HKQuantityTypeIdentifierDietaryFatSaturated,
    dietaryFatTotal: HKQuantityTypeIdentifierDietaryFatTotal,
    dietaryFiber: HKQuantityTypeIdentifierDietaryFiber,
    dietaryFolate: HKQuantityTypeIdentifierDietaryFolate,
    dietaryIodine: HKQuantityTypeIdentifierDietaryIodine,
    dietaryIron: HKQuantityTypeIdentifierDietaryIron,
    dietaryMagnesium: HKQuantityTypeIdentifierDietaryMagnesium,
    dietaryManganese: HKQuantityTypeIdentifierDietaryManganese,
    dietaryaMolybdenum: HKQuantityTypeIdentifierDietaryMolybdenum,
    dietaryNiacin: HKQuantityTypeIdentifierDietaryNiacin,
    dietaryPantothenicAcid: HKQuantityTypeIdentifierDietaryPantothenicAcid,
    dietaryPhosphorus: HKQuantityTypeIdentifierDietaryPhosphorus,
    dietaryPotassium: HKQuantityTypeIdentifierDietaryPotassium,
    dietaryProtein: HKQuantityTypeIdentifierDietaryProtein,
    dietaryRiboflavin: HKQuantityTypeIdentifierDietaryRiboflavin,
    dietarySelenium: HKQuantityTypeIdentifierDietarySelenium,
    dietarySodium: HKQuantityTypeIdentifierDietarySodium,
    dietarySugar: HKQuantityTypeIdentifierDietarySugar,
    dietaryThiamin: HKQuantityTypeIdentifierDietaryThiamin,
    dietaryViataminA: HKQuantityTypeIdentifierDietaryVitaminA,
    dietaryVitaminB12: HKQuantityTypeIdentifierDietaryVitaminB12,
    dietaryVitaminB6: HKQuantityTypeIdentifierDietaryVitaminB6,
    dietaryVitaminC: HKQuantityTypeIdentifierDietaryVitaminC,
    dietaryVitaminD: HKQuantityTypeIdentifierDietaryVitaminD,
    dietaryVitaminE: HKQuantityTypeIdentifierDietaryVitaminE,
    dietaryVitaminK: HKQuantityTypeIdentifierDietaryVitaminK,
    dietaryWater: HKQuantityTypeIdentifierDietaryWater,
    dietaryZinc: HKQuantityTypeIdentifierDietaryZinc,
    distanceCycling: HKQuantityTypeIdentifierDistanceCycling,
    distanceSwimming: HKQuantityTypeIdentifierDistanceSwimming,
    distanceWalkingRunning: HKQuantityTypeIdentifierDistanceWalkingRunning,
    distanceWheelChair: HKQuantityTypeIdentifierDistanceWheelchair,
    electrodermalActivity: HKQuantityTypeIdentifierElectrodermalActivity,
    flightsClimbed: HKQuantityTypeIdentifierFlightsClimbed,
    forcedExpiratoryVolume1: HKQuantityTypeIdentifierForcedExpiratoryVolume1,
    forcedVitalCapacity: HKQuantityTypeIdentifierForcedVitalCapacity,
    heartRate: HKQuantityTypeIdentifierHeartRate,
    height: HKQuantityTypeIdentifierHeight,
    inhalerUsage: HKQuantityTypeIdentifierInhalerUsage,
    leanBodyMass: HKQuantityTypeIdentifierLeanBodyMass,
    nikeFuel: HKQuantityTypeIdentifierNikeFuel,
    numberOfTimesFallen: HKQuantityTypeIdentifierNumberOfTimesFallen,
    oxygenSaturation: HKQuantityTypeIdentifierOxygenSaturation,
    peakExpiratoryFlowRate: HKQuantityTypeIdentifierPeakExpiratoryFlowRate,
    peripheralPerfusionIndex: HKQuantityTypeIdentifierPeripheralPerfusionIndex,
    pushCount: HKQuantityTypeIdentifierPushCount,
    respiratoryRate: HKQuantityTypeIdentifierRespiratoryRate,
    stepCount: HKQuantityTypeIdentifierStepCount,
    swimmingStrokeCount: HKQuantityTypeIdentifierSwimmingStrokeCount,
    uvExposure: HKQuantityTypeIdentifierUVExposure
};

export const characteristicTypes = {
    biologicalSex: HKCharacteristicTypeIdentifierBiologicalSex,
    bloodType: HKCharacteristicTypeIdentifierBloodType,
    dateOfBirthComponents: HKCharacteristicTypeIdentifierDateOfBirth,
    fitzpatrickSkinType: HKCharacteristicTypeIdentifierFitzpatrickSkinType,
    wheelchairUse: HKCharacteristicTypeIdentifierWheelchairUse
};

export const categoryTypes = {
    appleStandHour: HKCategoryTypeIdentifierAppleStandHour,
    cervicalMucusQuality: HKCategoryTypeIdentifierCervicalMucusQuality,
    intermenstrualBleeding: HKCategoryTypeIdentifierIntermenstrualBleeding,
    menstrualFlow: HKCategoryTypeIdentifierMenstrualFlow,
    mindfulSession: HKCategoryTypeIdentifierMindfulSession,
    ovulationTestResult: HKCategoryTypeIdentifierOvulationTestResult,
    sexualActivity: HKCategoryTypeIdentifierSexualActivity
    // "sleepAnalysis" : HKCategoryTypeIdentifierSleepAnalysis
};

export const acceptableDataTypes = {
    steps: "stepCount",
    distance: /*"distanceCycling",*/ "distanceWalkingRunning",
    calories: "activeEnergyBurned" /*"basalEnergyBurned"*/,
    // "activity" : "",
    height: "height",
    weight: "bodyMass",
    heartRate: "heartRate",
    fatPercentage: "bodyFatPercentage"
    // "nutrition" : ""
};
