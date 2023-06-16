import { PropertyArray } from "./array";
import { PropertyBase } from "./base";
import { PropertyBoolean } from "./boolean";
import { PropertyDate } from "./date";
import { PropertyMultiLineText } from "./multiLineText";
import { PropertyNumber } from "./number";
import { PropertyObject } from "./object";
import { PropertyRange } from "./range";
import { PropertySelect } from "./select";
import { PropertyText } from "./text";

type Property =
  | PropertyArray
  | PropertyBoolean
  | PropertyDate
  | PropertyMultiLineText
  | PropertyNumber
  | PropertyObject
  | PropertyRange
  | PropertySelect
  | PropertyText;

export type {
  Property,
  PropertyBase,
  PropertyArray,
  PropertyBoolean,
  PropertyDate,
  PropertyMultiLineText,
  PropertyNumber,
  PropertyObject,
  PropertyRange,
  PropertySelect,
  PropertyText,
};
