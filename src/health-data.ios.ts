import {
  BackgroundUpdateFrequency,
  Common,
  HealthDataApi,
  HealthDataType,
  QueryRequest,
  ResponseItem,
  StartMonitoringRequest,
  StopMonitoringRequest
} from './health-data.common';

export class HealthData extends Common implements HealthDataApi {
  private healthStore: HKHealthStore;
  private monitorQueries: Map<string /* type */, HKObserverQuery> = new Map();

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
      this.requestAuthorization([{name: opts.dataType, accessType: "read"}]).then(authorized => {
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

  queryAggregateData(opts: QueryRequest): Promise<Array<ResponseItem>> {
    return new Promise((resolve, reject) => {
      // make sure the user is authorized
      this.requestAuthorization([{name: opts.dataType, accessType: "read"}]).then(authorized => {
        if (!authorized) {
          reject("Not authorized");
          return;
        }

        let typeOfData = acceptableDataTypes[opts.dataType];
        if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {
          this.queryForStatisticsCollectionData(typeOfData, opts, (res, error) => {
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

  startMonitoring(opts: StartMonitoringRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      // make sure the user is authorized
      this.requestAuthorization([{name: opts.dataType, accessType: "read"}]).then(authorized => {
        if (!authorized) {
          reject("Not authorized");
          return;
        }

        let typeOfData = acceptableDataTypes[opts.dataType];
        if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {
          this.monitorData(typeOfData, opts);
          resolve();
        } else {
          reject('Type not supported (yet)');
        }
      });
    });
  }

  stopMonitoring(opts: StopMonitoringRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      let typeOfData = acceptableDataTypes[opts.dataType];
      const objectType = this.resolveDataType(typeOfData);

      if (quantityTypes[typeOfData] || categoryTypes[typeOfData]) {

        const rememberedQuery = this.monitorQueries.get(opts.dataType);
        if (rememberedQuery) {
          this.healthStore.stopQuery(rememberedQuery);
          this.monitorQueries.delete(opts.dataType);
        }

        this.healthStore.disableBackgroundDeliveryForTypeWithCompletion(
            objectType, (success: boolean, error: NSError) => {
              success ? resolve() : reject(error.localizedDescription);
            });
      } else {
        reject('Type not supported (yet)');
      }
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

  private resolveQuantityType(type: string): HKQuantityType {
    if (quantityTypes[type]) {
      return HKQuantityType.quantityTypeForIdentifier(quantityTypes[type]);
    } else {
      console.log("Constant not supported: " + type);
      return null;
    }
  }

  private queryForQuantityOrCategoryData(dataType: string, opts: QueryRequest, callback: (data: Array<ResponseItem>, error: string) => void) {
    const objectType = this.resolveDataType(dataType);

    const predicate = HKQuery.predicateForSamplesWithStartDateEndDateOptions(opts.startDate, opts.endDate, HKQueryOptions.StrictStartDate);

    let endDateSortDescriptor = NSSortDescriptor.alloc().initWithKeyAscending(HKSampleSortIdentifierEndDate, opts.sortOrder !== "desc");
    const sortBy = NSArray.arrayWithObject<NSSortDescriptor>(endDateSortDescriptor);

    // note that passing an invalid 'unitString' will crash the app (can't catch that error either)
    const unit = opts.unit ? HKUnit.unitFromString(opts.unit) : undefined;

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
              if (sample instanceof HKCategorySample) {
                resultItem.value = sample.value;
              } else if (sample instanceof HKQuantitySample) {
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

  private queryForStatisticsCollectionData(dataType: string, opts: QueryRequest, callback: (data: Array<ResponseItem>, error: string) => void) {
    const objectType = this.resolveQuantityType(dataType);
    // note that passing an invalid 'unitString' will crash the app (can't catch that error either)
    const unit = opts.unit ? HKUnit.unitFromString(opts.unit) : undefined;
    const aggregate = NSDateComponents.alloc().init();

    switch (opts.aggregateBy) {
      case("hour"):
          aggregate.hour = 1;
          aggregate.nanosecond = 100;
          break;
      case("day"):
          aggregate.day = 1;
          aggregate.nanosecond = 100;
          break;
    }

    var query = HKStatisticsCollectionQuery.alloc().initWithQuantityTypeQuantitySamplePredicateOptionsAnchorDateIntervalComponents(objectType, null, 16, opts.startDate, aggregate)
    query.initialResultsHandler = function (query: HKStatisticsCollectionQuery, listResults: HKStatisticsCollection, error: NSError) { 
      let statsCollection = listResults;
      const parsedData: Array<ResponseItem> = [];
      statsCollection.enumerateStatisticsFromDateToDateWithBlock(opts.startDate, opts.endDate, function (statistics,stop) {
          if (statistics.sumQuantity()) {
              var startDate = statistics.startDate;
              var endDate = statistics.endDate;
              const resultItem = <ResponseItem>{
                  unit: opts.unit,
                  start: startDate,
                  end: endDate
              };
              resultItem.value = Math.floor(statistics.sumQuantity().doubleValueForUnit(unit));
              parsedData.push(resultItem);
          }
      })
      callback(parsedData, null);
    }
    this.healthStore.executeQuery(query);
  };

  private monitorData(dataType: string, opts: StartMonitoringRequest): void {
    const objectType = this.resolveDataType(dataType);

    let query = HKObserverQuery.alloc().initWithSampleTypePredicateUpdateHandler(
        objectType, null, (observerQuery: HKObserverQuery, handler: () => void, error: NSError) => {
          if (error) {
            opts.onError(error.localizedDescription);
            handler();
          } else {
            // We need to tell iOS when our app is done background processing by calling the handler
            opts.onUpdate(() => handler());
          }
        }
    );

    // remember this query, so we can stop it at a later time
    this.monitorQueries.set(opts.dataType, query);

    this.healthStore.executeQuery(query);

    if (opts.enableBackgroundUpdates) {
      this.healthStore.enableBackgroundDeliveryForTypeFrequencyWithCompletion(
          objectType, this.getHKUpdateFrequency(opts.backgroundUpdateFrequency), (success: boolean, error: NSError) => {
            if (!success) {
              opts.onError(error.localizedDescription);
            }
          });
    }
  }

  private getHKUpdateFrequency(frequency: BackgroundUpdateFrequency): HKUpdateFrequency {
    if (frequency === "weekly") {
      return HKUpdateFrequency.Weekly;
    } else if (frequency === "daily") {
      return HKUpdateFrequency.Daily;
    } else if (frequency === "hourly") {
      return HKUpdateFrequency.Hourly;
    } else {
      return HKUpdateFrequency.Immediate;
    }
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
  // distanceSwimming: HKQuantityTypeIdentifierDistanceSwimming,
  distanceWalkingRunning: HKQuantityTypeIdentifierDistanceWalkingRunning,
  // distanceWheelChair: HKQuantityTypeIdentifierDistanceWheelchair,
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
  // pushCount: HKQuantityTypeIdentifierPushCount,
  respiratoryRate: HKQuantityTypeIdentifierRespiratoryRate,
  stepCount: HKQuantityTypeIdentifierStepCount,
  // swimmingStrokeCount: HKQuantityTypeIdentifierSwimmingStrokeCount,
  uvExposure: HKQuantityTypeIdentifierUVExposure
};

if (typeof HKQuantityTypeIdentifierDistanceSwimming !== 'undefined') {
  Object.assign(quantityTypes, {
    distanceSwimming: HKQuantityTypeIdentifierDistanceSwimming
  });
}
if (typeof HKQuantityTypeIdentifierDistanceWheelchair !== 'undefined') {
  Object.assign(quantityTypes, {
    distanceWheelChair: HKQuantityTypeIdentifierDistanceWheelchair
  });
  // quantityTypes[distanceWheelChair]= HKQuantityTypeIdentifierDistanceWheelchair;
}
if (typeof HKQuantityTypeIdentifierPushCount !== 'undefined') {
  Object.assign(quantityTypes, {
    pushCount: HKQuantityTypeIdentifierPushCount
  });
  // quantityTypes[pushCount]= HKQuantityTypeIdentifierPushCount;
}
if (typeof HKQuantityTypeIdentifierSwimmingStrokeCount !== 'undefined') {
  Object.assign(quantityTypes, {
    swimmingStrokeCount: HKQuantityTypeIdentifierSwimmingStrokeCount
  });
  // quantityTypes[swimmingStrokeCount]= HKQuantityTypeIdentifierSwimmingStrokeCount;
}

const characteristicTypes = {
  biologicalSex: HKCharacteristicTypeIdentifierBiologicalSex,
  bloodType: HKCharacteristicTypeIdentifierBloodType,
  dateOfBirthComponents: HKCharacteristicTypeIdentifierDateOfBirth,
  fitzpatrickSkinType: HKCharacteristicTypeIdentifierFitzpatrickSkinType,
  // wheelchairUse: HKCharacteristicTypeIdentifierWheelchairUse
};
if (typeof HKCharacteristicTypeIdentifierWheelchairUse !== 'undefined') {
  Object.assign(characteristicTypes, {
    wheelchairUse: HKCharacteristicTypeIdentifierWheelchairUse
  });
  // characteristicTypes[wheelchairUse]= HKCharacteristicTypeIdentifierWheelchairUse;
}

const categoryTypes = {
  appleStandHour: HKCategoryTypeIdentifierAppleStandHour,
  cervicalMucusQuality: HKCategoryTypeIdentifierCervicalMucusQuality,
  intermenstrualBleeding: HKCategoryTypeIdentifierIntermenstrualBleeding,
  menstrualFlow: HKCategoryTypeIdentifierMenstrualFlow,
  // mindfulSession: HKCategoryTypeIdentifierMindfulSession,
  ovulationTestResult: HKCategoryTypeIdentifierOvulationTestResult,
  sleepAnalysis : HKCategoryTypeIdentifierSleepAnalysis,
  sexualActivity: HKCategoryTypeIdentifierSexualActivity
};
if (typeof HKCategoryTypeIdentifierMindfulSession !== 'undefined') {
  Object.assign(categoryTypes, {
    mindfulSession: HKCategoryTypeIdentifierMindfulSession
  });
  // categoryTypes[mindfulSession]= HKCategoryTypeIdentifierMindfulSession;
}

const acceptableDataTypes = {
  steps: 'stepCount',
  sleep: 'sleepAnalysis',
  menstrual: 'menstrualFlow',
  ovulation: 'ovulationTestResult',
  mucus: 'cervicalMucusQuality',
  distance: /*"distanceCycling",*/ 'distanceWalkingRunning',
  calories: 'activeEnergyBurned' /*"basalEnergyBurned"*/,
  // "activity" : "",
  height: 'height',
  weight: 'bodyMass',
  heartRate: 'heartRate',
  fatPercentage: 'bodyFatPercentage',
  cardio: 'appleExerciseTime'
  // "nutrition" : ""
};
