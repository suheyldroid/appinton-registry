import { PropertyBase } from "./base";

export interface PropertyText extends PropertyBase {
  type: "text";
  default?: string;
  maxLength?: number;
  minLength?: number;
  regex?: string;
}
