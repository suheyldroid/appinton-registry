import { Property } from ".";
import { PropertyBase } from "./base";

export interface PropertyObject extends PropertyBase {
  type: "object";
  fields: Property[];
}
