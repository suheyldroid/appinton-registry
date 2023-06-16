import { PropertyBase } from "./base";

export interface PropertyDate extends PropertyBase {
  type: "date";
  default?: Date;
  includeTime?: boolean;
  maxDate?: Date;
  minDate?: Date;
}
