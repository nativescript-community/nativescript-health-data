import { Common } from './health-data.common';
export declare const QuantityTypeNeeded = "quantity_type_needed";
export declare const CharacteristicTypeNeeded = "characteristic_type_needed";
export declare const CategoryTypeNeeded = "category_type_needed";
export declare const QuantityResultNeeded = "quantity_result_needed";
export declare const CategoryResultNeeded = "category_result_needed";
export declare class HealthData extends Common {
    healthStore: HKHealthStore;
    permissions: {};
    getData(data: string): void;
    private requestPermissionForData(constToRead, type, fn);
    private askForQuantityOrCategoryData(constToRead, type);
    private askForCharacteristicData(data);
    private convertToQuantityIdentifier(data);
    private convertToCharacteristicIdentifier(data);
    private convertToCategoryIdentifier(data);
    constructor();
}
export declare const quantityTypes: {
    "appleExerciseTime": string;
    "basalBodyTemperature": string;
    "basalEnergyBurned": string;
    "bloodAlcoholContent": string;
    "bloodGlucose": string;
    "bloodPressureDiastolic": string;
    "bloodPressureSystolic": string;
    "bodyFatPercentage": string;
    "bodyMass": string;
    "bodyMassIndex": string;
    "bodyTemperature": string;
    "dietaryBiotin": string;
    "dietaryCaffeine": string;
    "dietaryCalcium": string;
    "dietaryCarbohydrates": string;
    "dietaryChloride": string;
    "dietaryCholesterol": string;
    "dietaryChromium": string;
    "dietaryCopper": string;
    "dietaryEnergyConsumed": string;
    "dietaryFatMonounsaturated": string;
    "dietaryFatPolyunsaturated": string;
    "dietaryFatSaturated": string;
    "dietaryFatTotal": string;
    "dietaryFiber": string;
    "dietaryFolate": string;
    "dietaryIodine": string;
    "dietaryIron": string;
    "dietaryMagnesium": string;
    "dietaryManganese": string;
    "dietaryaMolybdenum": string;
    "dietaryNiacin": string;
    "dietaryPantothenicAcid": string;
    "dietaryPhosphorus": string;
    "dietaryPotassium": string;
    "dietaryProtein": string;
    "dietaryRiboflavin": string;
    "dietarySelenium": string;
    "dietarySodium": string;
    "dietarySugar": string;
    "dietaryThiamin": string;
    "dietaryViataminA": string;
    "dietaryVitaminB12": string;
    "dietaryVitaminB6": string;
    "dietaryVitaminC": string;
    "dietaryVitaminD": string;
    "dietaryVitaminE": string;
    "dietaryVitaminK": string;
    "dietaryWater": string;
    "dietaryZinc": string;
    "distanceCycling": string;
    "distanceSwimming": string;
    "distanceWalkingRunning": string;
    "distanceWheelChair": string;
    "electrodermalActivity": string;
    "flightsClimbed": string;
    "forcedExpiratoryVolume1": string;
    "forcedVitalCapacity": string;
    "heartRate": string;
    "height": string;
    "inhalerUsage": string;
    "leanBodyMass": string;
    "nikeFuel": string;
    "numberOfTimesFallen": string;
    "oxygenSaturation": string;
    "peakExpiratoryFlowRate": string;
    "peripheralPerfusionIndex": string;
    "pushCount": string;
    "respiratoryRate": string;
    "stepCount": string;
    "swimmingStrokeCount": string;
    "uvExposure": string;
};
export declare const characteristicTypes: {
    "biologicalSex": string;
    "bloodType": string;
    "dateOfBirthComponents": string;
    "fitzpatrickSkinType": string;
    "wheelchairUse": string;
};
export declare const categoryTypes: {
    "appleStandHour": string;
    "cervicalMucusQuality": string;
    "intermenstrualBleeding": string;
    "menstrualFlow": string;
    "mindfulSession": string;
    "ovulationTestResult": string;
    "sexualActivity": string;
    "sleepAnalysis": string;
};
