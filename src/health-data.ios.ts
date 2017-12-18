import {
    Common,
    ErrorResponse,
    createErrorResponse,
    ConfigurationData,
    ResultResponse,
    ResponseItem,
    createResultResponse
} from './health-data.common';
import * as utils from 'tns-core-modules/utils/utils';
import { HKHealthStore } from './index';

export class HealthData extends Common {
    healthStore: HKHealthStore;

    constructor() {
        super();
        if (!HKHealthStore.isHealthDataAvailable()) {
            this.healthStore = HKHealthStore.new();
        } else {
            console.log('HKHealthStore not available');
        }
    }

    private resolveDataType(constToRead: string): HKObjectType {
        if (quantityTypes[constToRead]) {
            return HKObjectType.quantityTypeForIdentifier(constToRead);
        }
        else if (characteristicTypes[constToRead]) {
            return HKObjectType.characteristicTypeForIdentifier(constToRead);
        }
        else if (categoryTypes[constToRead]) {
            return HKObjectType.categoryTypeForIdentifier(constToRead);
        } else {
            console.log('constant dont exists');
            return null;
        }
    }
    isAvailable(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (HKHealthStore.isHealthDataAvailable()) {
                resolve(true);
            } else {
                console.log('HealthKit no available');
                reject(false);
            }
        });
    }

    requestAuthorization(constToRead: string | string[]): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (HKHealthStore.isHealthDataAvailable()) {
                let dataToAccess;
                let readDataTypes;
                if (typeof constToRead === 'string') {
                    dataToAccess  = this.resolveDataType(constToRead);
                    readDataTypes = NSSet.setWithObject<HKObjectType>(dataToAccess);
                } else {
                    readDataTypes = NSMutableSet.alloc<HKObjectType>().init();
                    constToRead.map((c) => this.resolveDataType(c)).forEach((o) => {
                        readDataTypes.addObject(o);

                    });
                }

                this.healthStore.requestAuthorizationToShareTypesReadTypesCompletion(
                    null,
                    readDataTypes,
                    (success, error) => {
                        if (success) {
                            resolve(true);
                        } else {
                            reject(
                                'You do not have permissions for requested data type'
                            );
                        }
                    }
                );
            }
        });
    }

    query(opts: {startDate: Date, endDate: Date, dataType: string}): Promise<any> {
        return new Promise((resolve, reject) => {
            let typeOfData = acceptableDataTypes[opts.dataType];
            console.log(typeOfData);
            if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {
                this.queryForQuantityOrCategoryData(opts, (res) => {
                    resolve(res);
                });
            } else if (characteristicTypes[typeOfData]) {
                resolve(this.queryForCharacteristicData(opts.dataType));
            } else {
                reject('Type not supported');
            }
        });
    }

    isAuthorized(constToRead: string) {
        return new Promise<boolean>((resolve, reject) => {
            if (HKHealthStore.isHealthDataAvailable()) {
                let constToCheck = this.resolveDataType(constToRead);

                const status: HKAuthorizationStatus = this.healthStore.authorizationStatusForType(constToCheck);
                if (status === HKAuthorizationStatus.NotDetermined) {
                    reject('could ni determinate authorization status');
                }
                if (status === HKAuthorizationStatus.SharingAuthorized) {
                    resolve(true);
                }
                if (status === HKAuthorizationStatus.SharingDenied) {
                    reject('access is denied');
                }

            }

        });
    }

    private convertDatetoNSDate(date: Date): NSDate {
        return NSDate.alloc().initWithTimeIntervalSince1970(date.getTime());
    }
    private queryForQuantityOrCategoryData(
        opts: {startDate: Date, endDate: Date, dataType: string},
        callback: (data: Array<ResponseItem>) => void
    ) {
        let objectType = this.resolveDataType(opts.dataType);

        let endDateSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(
            HKSampleSortIdentifierEndDate,
            false
        );

        let startDate = NSDateComponents.alloc();
        // startDate.date = this.convertDatetoNSDate(opts.startDate);
        startDate.day = opts.startDate.getUTCDate();
        startDate.year = opts.startDate.getUTCFullYear();
        startDate.month = opts.startDate.getUTCMonth() + 1;
        let endDate = NSDateComponents.alloc();
        endDate.day = opts.endDate.getUTCDate();
        endDate.year = opts.endDate.getUTCFullYear();
        endDate.month = opts.endDate.getUTCMonth() + 1;
        let query = HKSampleQuery.alloc()
            .initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(
            objectType,
            HKQuery.predicateForActivitySummariesBetweenStartDateComponentsEndDateComponents(
                startDate,
                endDate
            ),
            null,
            NSArray.arrayWithObject<NSSortDescriptor>(endDateSortDescriptor),
            (query, results, error) => {
                if (results) {
                    let listResults = <NSArray<HKQuantitySample>>results;
                    let parsedData = new Array<ResponseItem>();

                    for (let index = 0; index < listResults.count; index++) {
                        // console.log(listResults.objectAtIndex(index).startDate);
                        // console.log(listResults.objectAtIndex(index).endDate);
                        // console.log(listResults.objectAtIndex(index).quantity);
                        // console.log(listResults.objectAtIndex(index).quantityType);
                        const {
                            startDate,
                            endDate,
                            quantity,
                            quantityType
                        } = listResults.objectAtIndex(index);
                        parsedData.push({
                            start: startDate,
                            end: endDate,
                            value: quantity.toString()
                        } as ResponseItem);
                    }
                    callback(parsedData);
                } else {
                    // console.log('error: ');
                    console.dir(error);
                    callback(error as any);
                }
            }
        );
        this.healthStore.executeQuery(query);
    }

    private queryForCharacteristicData(
        dataType: string
    ) {
        // console.log('ask for characteristic data ' + data);
        let dataToRetrieve;
        switch (characteristicTypes[dataType]) {
            case HKCharacteristicTypeIdentifierBiologicalSex:
                return {
                    type: dataType,
                    result: this.healthStore.biologicalSexWithError()
                        .biologicalSex
                };
            case HKCharacteristicTypeIdentifierBloodType:
                return {
                    type: dataType,
                    result: this.healthStore.bloodTypeWithError().bloodType
                };
            case HKCharacteristicTypeIdentifierDateOfBirth:
                return {
                    type: dataType,
                    result: this.healthStore.dateOfBirthComponentsWithError()
                        .date
                };
            case HKCharacteristicTypeIdentifierFitzpatrickSkinType:
                return {
                    type: dataType,
                    result: this.healthStore.fitzpatrickSkinTypeWithError()
                        .skinType
                };
            case HKCharacteristicTypeIdentifierWheelchairUse:
                return {
                    type: dataType,
                    result: this.healthStore.wheelchairUseWithError()
                        .wheelchairUse
                };
            default:
                console.log('Characteristic not implemented!');
                return null;
        }
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
    steps: 'stepCount',
    distance: /*"distanceCycling",*/ 'distanceWalkingRunning',
    calories: 'activeEnergyBurned' /*"basalEnergyBurned"*/,
    // "activity" : "",
    height: 'height',
    weight: 'bodyMass',
    heartRate: 'heartRate',
    fatPercentage: 'bodyFatPercentage'
    // "nutrition" : ""
};
