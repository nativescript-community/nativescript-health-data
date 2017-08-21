# Health Data for NativeScript
## A cross platform (iOS & Android) plugin 

### Description
This is a NativeScript plugin that abstracts Apple HealthKit and Google Fit repositories to collect some health data from user's smartphone. Unfortunately, I am a starter in NativeScript's plugins development so, because of that, not every data type is available right now.

This work is based on [Cordova Health Plugin](https://github.com/dariosalvi78/cordova-plugin-health) (the propose, not the code). If you are experiencing some kind of issue, feel free to contact me or open a repository issue.   

## Prerequisites
iOS - Cocoapods is [installed](https://guides.cocoapods.org/using/getting-started.html#getting-started)

Android - Latest Google Play services SDK [installed](https://developer.android.com/studio/intro/update.html)

Google Fit API Key - Go to the [Google Developers Console](https://console.developers.google.com/), create a project, and enable the ```Google Fitness API```. Then under credentials, create an OAuth for an Android App. If you are using Linux/OSX, generate your SHA1-key with the code below. Then, make sure you download the result OAuth client key, rename it to ```client_id.json``` and place it in project root directory.

```keytool -exportcert -keystore ~/.android/<debug or production>.keystore -list -v```


## Installation

Install the plugin using the NativeScript CLI tooling

```
tns plugin add nativescript-health-data
```

## Usage 
The examples below are presented in Typescript, such that this [demo](https://github.com/filipemendes1994/nativescript-health-data/tree/master/demo-ng) was developed in Nativescript w/ Angular sample project. So, start for import what matters to you.

```
import { HealthData } from "nativescript-health-data";
``` 

### Create HealthData Client
Before you can grab any kind of user info, you must initialize a client object. Otherwise, you will always get an error response.

```javascript
let healthData = new HealthData();
healthData.createClient()
	.then((fulfilled) => {
    	console.log(fulfilled);
    }).catch((error) => {
    	console.log(error);
    });
```

### Get Data
To collect the user data, simply apply this little snippet.

```
healthData.getCommonData(configData)
	.then((fulfilled) => {
    	console.log(fulfilled);
    }).catch((error) => {
        console.log(error);
    });
```

### Configuration Object
Like you can see, the ```getCommonData(configObj)``` method receives a configuration object, something like this one above.

```
interface IConfigurationData {
  gfStartTimeInMillis: number,
  gfEndTimeInMillis: number,
  gfBucketUnit: string, 
  gfBucketSize: number,
  typeOfData: string
}
```
*Note*: The *gf* prefix attributes are exclusive configurations to Google Fit.

### Success and Error Response Messages
From any API endpoint, you will receive one of these 2 objects. In success case, you will receive this:

```
interface IResultResponse {
  status: {
    action: string,
    message: string
  }, data: {
    type: string,
    response: string
  } 
}
```
In error case, you will receive this one:

```
interface IErrorResponse {
  action: string,
  code?: string,
  description?: string
}
```

## Available Data Types
Unfortunatelly, this plugin is in the beginning. So, the capabilities are the possibles, for now.

| TypeOfData | GoogleFit Data Type | Apple HealthKit Data Type |
| --- | --- | --- |
| distance | TYPE_DISTANCE_DELTA | HKQuantityTypeIdentifierDistanceWalkingRunning |
| steps | TYPE_STEP_COUNT_DELTA | HKQuantityTypeIdentifierStepCount |
| calories | TYPE_CALORIES_EXPENDED | HKQuantityTypeIdentifierActiveEnergyBurned |
| height | TYPE_HEIGHT | HKQuantityTypeIdentifierHeight |
| weight | TYPE_WEIGHT | HKQuantityTypeIdentifierBodyMass |
| hearthRate | TYPE_HEART_RATE_BPM | HKQuantityTypeIdentifierHeartRate |
| fatPercentage | TYPE_BODY_FAT_PERCENTAGE | HKQuantityTypeIdentifierBodyFatPercentage |

I hope I can develop continuously to provide new common data types soon.
However, if you really need other data types besides these ones, you can ask for them but not commonly. For example, if you need data about Systolic Blood Pressure, you can use this snippet, but you will only get success response message if you are using **iOS**.

```
const configData = {
    typeOfData: "bodyMassIndex"
};

this.healthData.getUncommonData(configData)
	.then((fulfilled) => {
    	console.log(fulfilled));
	}).catch((error) => {
		console.log(error);
	});
    
```
You can check available uncommon data in [iOS Plugin File](https://github.com/filipemendes1994/nativescript-health-data/blob/master/src/health-data.ios.ts)

## Appreciations
This plugin was developed while working for SPMS, Shared Services for Ministry of Health (of Portugal), in a very innovative project, written in [Nativescript integrated with Angular](https://github.com/NativeScript/nativescript-angular). My acknowledgment to them for the opportunity.

## License
Apache License Version 2.0, January 2004