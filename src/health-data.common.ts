import { Observable } from "tns-core-modules/data/observable";

export interface ConfigurationData {
  startDate: Date;
  endDate: Date;
  gfBucketUnit: string;
  gfBucketSize: number;
  typeOfData: string;
}

export type AggregateBy = "hour" | "day" | "sourceAndDay";

export interface QueryRequest {
  startDate: Date;
  endDate: Date;
  dataType: string;
  aggregateBy?: AggregateBy;
  unit: string;
}

export interface ResponseItem {
  start: Date;
  end: Date;
  value: number;
  source?: string;
}

export interface ResultResponse {
  status: {
    action: string;
    message: string;
  };
  data: {
    type: string;
    response: Array<ResponseItem>;
  };
}

export interface ErrorResponse {
  action: string;
  description: string;
}

export function createResultResponse(action: string, message: string, type?: string, result?: Array<ResponseItem>): ResultResponse {
  return {
    status: {action, message},
    data: {
      type: type || null,
      response: result || null
    }
  };
}

export function createErrorResponse(action: string, description: string): ErrorResponse {
  return {action, description};
}

export class Common extends Observable {
  public hasPermissions: boolean;
  public result: string;

  constructor() {
    super();
  }

  // note that the startdate determines the interval
  protected isSameAggregationInterval(item: ResponseItem, previousItem: ResponseItem, aggregateBy: AggregateBy) {
    const isSameDay = item.start.toDateString() === previousItem.start.toDateString();
    if (aggregateBy === "hour") {
      return isSameDay && item.start.getHours() === previousItem.start.getHours();
    } else if (aggregateBy === "day" || "sourceAndDay") {
      // note that when this function is called, the sources have already been dealt with, so treat it equal to "day"
      return isSameDay;
    } else {
      return false;
    }
  }
}
