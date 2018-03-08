import { Observable } from "tns-core-modules/data/observable";

export interface ConfigurationData {
  startDate: Date;
  endDate: Date;
  gfBucketUnit: string;
  gfBucketSize: number;
  typeOfData: string;
}

export interface HealthDataType {
  name: string;
  accessType: "read" | "write" | "readAndWrite"
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

  protected aggregate(parsedData: Array<ResponseItem>, aggregateBy?: AggregateBy): Array<ResponseItem> {
    if (aggregateBy) {
      let result: Array<ResponseItem> = [];
      if (aggregateBy === "sourceAndDay") {
        // extract the unique sources
        const distinctSources: Set<string> = new Set();
        parsedData.forEach(item => distinctSources.add(item.source));
        // for each source, filter and aggregate the data
        distinctSources.forEach(source => this.aggregateData(parsedData.filter(item => item.source === source), aggregateBy, result));
      } else {
        this.aggregateData(parsedData, aggregateBy, result);
      }
      return result;
    } else {
      return parsedData;
    }
  }

  private aggregateData(parsedData: Array<ResponseItem>, aggregateBy: AggregateBy, result: Array<ResponseItem>): void {
    parsedData.forEach((item, i) => {
      const previousItem = i === 0 ? null : parsedData[i - 1];
      if (previousItem === null || !this.isSameAggregationInterval(item, previousItem, aggregateBy)) {
        result.push(<ResponseItem>{
          source: item.source,
          start: item.start,
          end: item.end,
          value: item.value
        })
      } else {
        result[result.length - 1].value += item.value;
        result[result.length - 1].end = item.end;
      }
    });
  }

  // note that the startdate determines the interval
  private isSameAggregationInterval(item: ResponseItem, previousItem: ResponseItem, aggregateBy: AggregateBy) {
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
