import { Observable } from 'tns-core-modules/data/observable';
import { HealthData } from 'nativescript-health-data';

export class HelloWorldModel extends Observable {
  public message: string;
  private healthData: HealthData;

  constructor() {
    super();
    this.healthData = new HealthData();
    this.healthData.requestPermissions();
  }
}