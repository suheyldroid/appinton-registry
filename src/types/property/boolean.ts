import { PropertyBase } from "./base";

export interface PropertyBoolean extends PropertyBase {
  type: "boolean";
  default?: boolean;
}
