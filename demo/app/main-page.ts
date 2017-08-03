import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {HelloWorldModel} from './main-view-model';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function showBodyMassIndex(args: observable.EventData) {
    let healthData = (<pages.Page>args.object).bindingContext.healthData;
    console.log('looking for bodyMassIndex');
}

export function showBloodPressureSystolic(args: observable.EventData) {
    let healthData = (<pages.Page>args.object).bindingContext.healthData;
    console.log('looking for BloodPressureSystolic');
}

export function showBloodPressureDistolic(args: observable.EventData) {
    let healthData = (<pages.Page>args.object).bindingContext.healthData;
    console.log('looking for BloodPressureDistolic');
}