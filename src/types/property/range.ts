import { PropertyNumber } from "./number";

export interface PropertyRange extends Omit<PropertyNumber, "type"> {
  type: "range";
  min: number;
  max: number;
  step: number;
}
