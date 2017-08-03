import { Component } from "@angular/core";
import { HealthData } from "nativescript-health-data";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    healthData: HealthData;

    constructor() {
        this.healthData = new HealthData();
        this.healthData.requestPermissions();
    }

    showData(data: string) {
        console.log('checking for ' + data);
    }

    
}
