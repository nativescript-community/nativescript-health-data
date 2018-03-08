import { Component } from "@angular/core";
import { AggregateBy, HealthData } from "nativescript-health-data";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})

export class AppComponent {
  healthData: HealthData;
  resultToShow = "";

  constructor() {
    this.healthData = new HealthData();
  }

  isAvailable(): void {
    console.log(">>>> is avail called");
    this.resultToShow = this.healthData.isAvailable() ? "Health Data available" : "Health Data not available :(";
  }

  requestAuthForVariousTypes(): void {
    this.healthData.requestAuthorization(["height", "weight", "steps", "distance"])
        .then(authenticated => setTimeout(() => alert({ title: "Authentication result", message: "" + authenticated, okButtonText: "Ok!"}), 500))
        .catch(error => console.log("Request auth error: ", error));
  }

  getData(dataType: string, unit: string, aggregateBy?: AggregateBy): void {
    this.healthData.query(
        {
          startDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
          endDate: new Date(), // now
          dataType: dataType,
          unit: unit,
          aggregateBy: aggregateBy
        })
        .then(result => this.resultToShow = JSON.stringify(result))
        .catch(error => this.resultToShow = error);
  }
}
