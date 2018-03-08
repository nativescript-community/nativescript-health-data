import { AggregateBy, Common, QueryRequest, ResponseItem } from './health-data.common';

export class HealthData extends Common {
  healthStore: HKHealthStore;

  constructor() {
    super();
    if (HKHealthStore.isHealthDataAvailable()) {
      this.healthStore = HKHealthStore.new();
    }
  }

  isAvailable(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.healthStore !== undefined);
    });
  }

  isAuthorized(type: string | string[]): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (this.healthStore === undefined) {
        reject("Health not available");
        return;
      }

      if (typeof(type) === "string") {
        const authStatus = this.healthStore.authorizationStatusForType(this.resolveDataType(acceptableDataTypes[type]));
        console.log(">>>> authStatus: " + authStatus);
        resolve(authStatus === HKAuthorizationStatus.SharingAuthorized);
      } else {
        let authorized = true;
        type.forEach(t => {
          authorized = authorized &&
              this.healthStore.authorizationStatusForType(this.resolveDataType(acceptableDataTypes[t])) === HKAuthorizationStatus.SharingAuthorized;
        });
        resolve(authorized);
      }
    });
  }

  requestAuthorization(constToRead: string | string[]): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (this.healthStore === undefined) {
        reject("Health not available");
        return;
      }

      let dataToAccess;
      let readDataTypes;
      if (typeof constToRead === "string") {
        dataToAccess = this.resolveDataType(acceptableDataTypes[constToRead]);
        readDataTypes = NSSet.setWithObject<HKObjectType>(dataToAccess);
      } else {
        readDataTypes = NSMutableSet.alloc<HKObjectType>().init();
        constToRead.forEach(c => readDataTypes.addObject(this.resolveDataType(acceptableDataTypes[c])));
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
    });
  }

  query(opts: QueryRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      let typeOfData = acceptableDataTypes[opts.dataType];
      if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {
        this.queryForQuantityOrCategoryData(typeOfData, opts.startDate, opts.endDate, opts.aggregateBy, opts.unit, (res, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(res)
          }
        });
      } else if (characteristicTypes[typeOfData]) {
        resolve(this.queryForCharacteristicData(typeOfData));
      } else {
        reject('Type not supported');
      }
    });
  }

  private resolveDataType(constToRead: string): HKObjectType {
    if (quantityTypes[constToRead]) {
      return HKObjectType.quantityTypeForIdentifier(quantityTypes[constToRead]);
    } else if (characteristicTypes[constToRead]) {
      return HKObjectType.characteristicTypeForIdentifier(characteristicTypes[constToRead]);
    } else if (categoryTypes[constToRead]) {
      return HKObjectType.categoryTypeForIdentifier(categoryTypes[constToRead]);
    } else {
      console.log("Constant not supported: " + constToRead);
      return null;
    }
  }

  private queryForQuantityOrCategoryData(dataType: string, start: Date, end: Date, aggregateBy: AggregateBy, unitString: string, callback: (data: Array<ResponseItem>, error: string) => void) {
    let objectType = this.resolveDataType(dataType);

    const predicate = HKQuery.predicateForSamplesWithStartDateEndDateOptions(start, end, HKQueryOptions.StrictStartDate);

    let endDateSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(HKSampleSortIdentifierEndDate, true);
    const sortBy = NSArray.arrayWithObject<NSSortDescriptor>(endDateSortDescriptor);

    // note that passing an invalid 'unitString' will crash the app (can't catch that error either)
    const unit = HKUnit.unitFromString(unitString);

    let query = HKSampleQuery.alloc().initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(
        objectType, predicate, null, sortBy, (query: HKSampleQuery, listResults: NSArray<HKSample>, error: NSError) => {
          if (listResults) {
            const parsedData: Array<ResponseItem> = [];

            for (let index = 0; index < listResults.count; index++) {
              const sample: HKSample = listResults.objectAtIndex(index);
              const {startDate, endDate, source} = sample;

              const resultItem = <ResponseItem>{
                source: source.name,
                start: startDate,
                end: endDate
              };

              // TODO other types, see https://github.com/Telerik-Verified-Plugins/HealthKit/blob/c6b15ea8096bae3e61dc71a3cb0098da44f411fd/src/ios/HealthKit.m#L1333
              if (sample instanceof HKQuantitySample) {
                if ((<HKQuantitySample>sample).quantity.isCompatibleWithUnit(unit)) {
                  resultItem.value = (<HKQuantitySample>sample).quantity.doubleValueForUnit(unit)
                } else {
                  console.log("Incompatible unit passed: " + unitString + " (" + unit + ")");
                }
              }

              parsedData.push(resultItem);
            }

            callback(this.aggregate(parsedData, aggregateBy), null);
          } else {
            console.dir(error);
            callback(null, error.localizedDescription);
          }
        }
    );
    this.healthStore.executeQuery(query);
  }

  private queryForCharacteristicData(dataType: string) {
    // console.log('ask for characteristic data ' + data);
    let dataToRetrieve;
    switch (characteristicTypes[dataType]) {
      case HKCharacteristicTypeIdentifierBiologicalSex:
        return {
          type: dataType,
          result: this.healthStore.biologicalSexWithError().biologicalSex
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
          result: this.healthStore.fitzpatrickSkinTypeWithError().skinType
        };
      case HKCharacteristicTypeIdentifierWheelchairUse:
        return {
          type: dataType,
          result: this.healthStore.wheelchairUseWithError().wheelchairUse
        };
      default:
        console.log('Characteristic not implemented!');
        return null;
    }
  }
}

const quantityTypes = {
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

const characteristicTypes = {
  biologicalSex: HKCharacteristicTypeIdentifierBiologicalSex,
  bloodType: HKCharacteristicTypeIdentifierBloodType,
  dateOfBirthComponents: HKCharacteristicTypeIdentifierDateOfBirth,
  fitzpatrickSkinType: HKCharacteristicTypeIdentifierFitzpatrickSkinType,
  wheelchairUse: HKCharacteristicTypeIdentifierWheelchairUse
};

const categoryTypes = {
  appleStandHour: HKCategoryTypeIdentifierAppleStandHour,
  cervicalMucusQuality: HKCategoryTypeIdentifierCervicalMucusQuality,
  intermenstrualBleeding: HKCategoryTypeIdentifierIntermenstrualBleeding,
  menstrualFlow: HKCategoryTypeIdentifierMenstrualFlow,
  mindfulSession: HKCategoryTypeIdentifierMindfulSession,
  ovulationTestResult: HKCategoryTypeIdentifierOvulationTestResult,
  sexualActivity: HKCategoryTypeIdentifierSexualActivity
  // "sleepAnalysis" : HKCategoryTypeIdentifierSleepAnalysis
};

const acceptableDataTypes = {
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
