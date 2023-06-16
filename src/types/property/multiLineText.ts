import { PropertyText } from "./text";

export interface PropertyMultiLineText extends Omit<PropertyText, "type"> {
  type: "multiLineText";
}
