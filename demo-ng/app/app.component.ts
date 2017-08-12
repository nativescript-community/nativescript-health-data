import { Component, NgZone } from "@angular/core";
import { HealthData } from "nativescript-health-data";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent { 
    healthData: HealthData;
    resultToShow: any;

    constructor(private ngZone: NgZone) {
        this.healthData = new HealthData();
    }

    getData(data: string) {
        let context = this;
        
        const configData = {
            gfStartTimeInMillis: new Date(2017, 7, 1).valueOf(),
            gfEndTimeInMillis: new Date().valueOf(),
            gfBucketUnit: "days",
            gfBucketSize: 1,
            typeOfData: "weight"
        };

        this.healthData.getCommonData(configData)
            .then((fulfilled) => {
                this.ngZone.run(() => context.resultToShow = fulfilled);
            })
            .catch((error) => {
                this.ngZone.run(() => context.resultToShow = error);
            });
    }

    createClient() {
        let context = this;
        this.healthData.createClient()
            .then((fulfilled) => {
                this.ngZone.run(() => context.resultToShow = fulfilled);
            })
            .catch((error) => {
                this.ngZone.run(() => context.resultToShow = error);
            });
    }
}
