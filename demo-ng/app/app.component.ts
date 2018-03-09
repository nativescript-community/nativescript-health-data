import { Component } from "@angular/core";
import { alert } from "tns-core-modules/ui/dialogs";
import { AggregateBy, HealthData, HealthDataType } from "nativescript-health-data";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})

export class AppComponent {
  private static TYPES: Array<HealthDataType> = [
    {name: "height", accessType: "write"},
    {name: "weight", accessType: "readAndWrite"},
    {name: "steps", accessType: "read"},
    {name: "distance", accessType: "read"},
    {name: "heartRate", accessType: "read"},
    {name: "fatPercentage", accessType: "read"}
  ];

  private healthData: HealthData;
  resultToShow = "";

  constructor() {
    this.healthData = new HealthData();
  }

  isAvailable(): void {
    this.healthData.isAvailable()
        .then(available => this.resultToShow = available ? "Health Data available" : "Health Data not available :(");
  }

  isAuthorized(): void {
    this.healthData.isAuthorized([<HealthDataType>{name: "weight", accessType: "read"}])
        .then(authorized => this.resultToShow = (authorized ? "" : "Not ") + "authorized for " + JSON.stringify(AppComponent.TYPES));
  }

  requestAuthForVariousTypes(): void {
    this.healthData.requestAuthorization(AppComponent.TYPES)
        .then(authorized => setTimeout(() => alert({
          title: "Authentication result",
          message: (authorized ? "" : "Not ") + "authorized for " + JSON.stringify(AppComponent.TYPES),
          okButtonText: "Ok!"
        }), 300))
        .catch(error => console.log("Request auth error: ", error));
  }

  getData(dataType: string, unit: string, aggregateBy?: AggregateBy): void {
    this.healthData.query(
        {
          startDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
          endDate: new Date(), // now
          dataType: dataType,
          unit: unit,
          aggregateBy: aggregateBy,
          sortOrder: "desc"
        })
        .then(result => {
          console.log(JSON.stringify(result));
          this.resultToShow = JSON.stringify(result);
        })
        .catch(error => this.resultToShow = error);
  }
}
