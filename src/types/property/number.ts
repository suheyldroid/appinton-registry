import { PropertyBase } from "./base";

export interface PropertyNumber extends PropertyBase {
  type: "number";
  default?: number;
  min?: number;
  max?: number;
  step?: number;
}
