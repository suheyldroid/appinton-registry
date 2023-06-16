import { PropertyBase } from "./base";

export interface PropertySelect extends PropertyBase {
  type: "select";
  default?: string;
  options: any[];
}
