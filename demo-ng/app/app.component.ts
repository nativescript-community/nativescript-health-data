import { Component } from "@angular/core";
import { HealthData } from "nativescript-health-data";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent { 
    healthData: HealthData;

    constructor() {
        this.healthData = new HealthData();
    }

    showData(data: string) {
        this.healthData.getData(data);
    }
}
