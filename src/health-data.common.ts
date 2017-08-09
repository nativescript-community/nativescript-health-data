import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export interface configurationData {
  gfStartTimeInMillis: number,
  gfEndTimeInMillis: number,
  gfBucketUnit: string, 
  gfBucketSize: number,
  typeOfData: string
}

export class Common extends Observable {
  public hasPermissions: boolean;
  public result: string;

  constructor() {
    super();
  }
}