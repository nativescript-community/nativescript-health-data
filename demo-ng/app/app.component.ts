import { Component } from "@angular/core";
import { HealthData } from "nativescript-health-data";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent { 
    messageToShow: string;
    healthData: HealthData;
    
    constructor() {
        this.healthData = new HealthData();
    }

    getData(data: string) {
        let context = this;

        let now = new Date();
        let before = new Date(2017, 7, 1);
        
        let configData = {
            gfStartTimeInMillis: before.valueOf(),
            gfEndTimeInMillis: now.valueOf(),
            gfBucketUnit: "days",
            gfBucketSize: 1,
            typeOfData: "TYPE_STEP_COUNT_DELTA"
        };

        this.healthData.getData(configData, (returnValue) => {
            context.messageToShow = returnValue;
        });
    }

    createClient() {
        this.healthData.createClient();
    }
}
