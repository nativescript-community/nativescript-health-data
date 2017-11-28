import { Component, NgZone } from "@angular/core";
import { HealthData } from "nativescript-health-data";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent {
    healthData: HealthData;
    resultToShow = '';

    constructor(private ngZone: NgZone) {
        this.healthData = new HealthData();
    }

    getData(data: string) {
        let context = this;

        // const configData = {
        //     gfStartTimeInMillis: new Date(2017, 7, 1).valueOf(),
        //     gfEndTimeInMillis: new Date().valueOf(),
        //     gfBucketUnit: "days",
        //     gfBucketSize: 1,
        //     typeOfData: "bodyMassIndex"
        // };

        // this.healthData.getUncommonData(configData)
        //     .then((fulfilled) => {
        //         this.ngZone.run(() => context.resultToShow = fulfilled);
        //     })
        //     .catch((error) => {
        //         this.ngZone.run(() => context.resultToShow = error);
        //     });

        const configData = {
            gfStartTimeInMillis: new Date(2017, 7, 1).valueOf(),
            gfEndTimeInMillis: new Date().valueOf(),
            gfBucketUnit: 'days',
            gfBucketSize: 1,
            typeOfData: 'distance'
        };
        Promise.all([
            this.healthData.getCommonData(this.changeType(configData, "distance")),
            this.healthData.getCommonData(this.changeType(configData, "steps")),
            this.healthData.getCommonData(this.changeType(configData, "calories")),
            this.healthData.getCommonData(this.changeType(configData, "height")),
            this.healthData.getCommonData(this.changeType(configData, "weight")),
            this.healthData.getCommonData(this.changeType(configData, "heartRate"))
        ])
            .then(arrayofData => {
                this.ngZone.run(() => (context.resultToShow += JSON.stringify(arrayofData)));
                console.log(JSON.stringify(arrayofData));
            })
            .catch(error => {
                console.log(error);
            });
    }

    changeType(config, type) {
        return  Object.assign({}, config, {
            typeOfData: type
        });
    }

    createClient() {
        let context = this;
        this.healthData.createClient()
            .then((fulfilled) => {
                this.ngZone.run(() => context.resultToShow += JSON.stringify(fulfilled));
            })
            .catch((error) => {
                this.ngZone.run(() => context.resultToShow = error);
            });
    }
}
