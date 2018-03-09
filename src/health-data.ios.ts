import { Common, HealthDataApi, HealthDataType, QueryRequest, ResponseItem } from './health-data.common';

export class HealthData extends Common implements HealthDataApi {
  private healthStore: HKHealthStore;

  constructor() {
    super();
    if (HKHealthStore.isHealthDataAvailable()) {
      this.healthStore = HKHealthStore.new();
    }
  }

  isAvailable(updateGooglePlayServicesIfNeeded? /* for Android */: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.healthStore !== undefined);
    });
  }

  isAuthorized(types: Array<HealthDataType>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (this.healthStore === undefined) {
        reject("Health not available");
        return;
      }

      let authorized = true;
      types.forEach(t => {
        authorized = authorized &&
            this.healthStore.authorizationStatusForType(this.resolveDataType(acceptableDataTypes[t.name])) === HKAuthorizationStatus.SharingAuthorized;
      });
      resolve(authorized);
    });
  }

  requestAuthorization(types: Array<HealthDataType>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (this.healthStore === undefined) {
        reject("Health not available");
        return;
      }

      let readDataTypes = NSMutableSet.alloc<HKObjectType>().init();
      let writeDataTypes = NSMutableSet.alloc<HKObjectType>().init();
      types.filter(t => t.accessType === "read" || t.accessType === "readAndWrite")
          .forEach(t => readDataTypes.addObject(this.resolveDataType(acceptableDataTypes[t.name])));
      types.filter(t => t.accessType === "write" || t.accessType === "readAndWrite")
          .forEach(t => writeDataTypes.addObject(this.resolveDataType(acceptableDataTypes[t.name])));

      this.healthStore.requestAuthorizationToShareTypesReadTypesCompletion(
          writeDataTypes,
          readDataTypes,
          (success, error) => {
            if (success) {
              resolve(true);
            } else {
              reject('You do not have permissions for requested data type');
            }
          }
      );
    });
  }

  query(opts: QueryRequest): Promise<Array<ResponseItem>> {
    return new Promise((resolve, reject) => {
      // make sure the user is authorized
      this.requestAuthorization([{ name: opts.dataType, accessType: "read"}]).then(authorized => {
        if (!authorized) {
          reject("Not authorized");
          return;
        }

        let typeOfData = acceptableDataTypes[opts.dataType];
        if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {
          this.queryForQuantityOrCategoryData(typeOfData, opts, (res, error) => {
            if (error) {
              reject(error);
            } else {
              resolve(res);
            }
          });
          // } else if (characteristicTypes[typeOfData]) {
          //   resolve(this.queryForCharacteristicData(typeOfData));
        } else {
          reject('Type not supported (yet)');
        }
      });
    });
  }

  private resolveDataType(type: string): HKObjectType {
    if (quantityTypes[type]) {
      return HKObjectType.quantityTypeForIdentifier(quantityTypes[type]);
    } else if (characteristicTypes[type]) {
      return HKObjectType.characteristicTypeForIdentifier(characteristicTypes[type]);
    } else if (categoryTypes[type]) {
      return HKObjectType.categoryTypeForIdentifier(categoryTypes[type]);
    } else {
      console.log("Constant not supported: " + type);
      return null;
    }
  }

  private queryForQuantityOrCategoryData(dataType: string, opts: QueryRequest, callback: (data: Array<ResponseItem>, error: string) => void) {
    let objectType = this.resolveDataType(dataType);

    const predicate = HKQuery.predicateForSamplesWithStartDateEndDateOptions(opts.startDate, opts.endDate, HKQueryOptions.StrictStartDate);

    let endDateSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(HKSampleSortIdentifierEndDate, opts.sortOrder !== "desc");
    const sortBy = NSArray.arrayWithObject<NSSortDescriptor>(endDateSortDescriptor);

    // note that passing an invalid 'unitString' will crash the app (can't catch that error either)
    const unit = HKUnit.unitFromString(opts.unit);

    let query = HKSampleQuery.alloc().initWithSampleTypePredicateLimitSortDescriptorsResultsHandler(
        objectType, predicate, null, sortBy, (query: HKSampleQuery, listResults: NSArray<HKSample>, error: NSError) => {
          if (listResults) {
            const parsedData: Array<ResponseItem> = [];

            for (let index = 0; index < listResults.count; index++) {
              const sample: HKSample = listResults.objectAtIndex(index);
              const {startDate, endDate, source} = sample;

              const resultItem = <ResponseItem>{
                source: source.name,
                unit: opts.unit,
                start: startDate,
                end: endDate
              };

              // TODO other types, see https://github.com/Telerik-Verified-Plugins/HealthKit/blob/c6b15ea8096bae3e61dc71a3cb0098da44f411fd/src/ios/HealthKit.m#L1333
              if (sample instanceof HKQuantitySample) {
                if ((<HKQuantitySample>sample).quantity.isCompatibleWithUnit(unit)) {
                  resultItem.value = (<HKQuantitySample>sample).quantity.doubleValueForUnit(unit);
                } else {
                  console.log("Incompatible unit passed: " + opts.unit + " (" + unit + ")");
                }
              }

              parsedData.push(resultItem);
            }

            callback(this.aggregate(parsedData, opts.aggregateBy), null);
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
