import { Property } from ".";
import { PropertyBase } from "./base";

export interface PropertyArray extends PropertyBase {
  type: "array";
  default?: any[];
  itemType: Property;
}
