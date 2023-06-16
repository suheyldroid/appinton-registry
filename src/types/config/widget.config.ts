import { Property } from "..";

export interface WidgetConfig {
  icon?: string;
  label?: string;
  name: string;
  description?: string;
  props?: Property[];

  draggable?: boolean | string | ((...params: any[]) => any);
  droppable?: boolean | string | ((...params: any[]) => any);

  stylable?: boolean | string[];
  unstylable?: string[];

  void?: boolean;

  style?: any;
  styles?: string;

  content?: string;
  //toolbar?: ToolbarButtonProps[];
  classes?: string[];
  dmode?: "translate" | "absolute" | "";
}

export interface RegisteredWidgetConfig extends WidgetConfig {
  widget: any;
}
