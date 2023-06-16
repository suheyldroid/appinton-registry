import { ClusterConfigType, RegisteredWidgetConfig } from "./types";

export * from "./types";
export function ClusterConfigBuilder(config: ClusterConfigType) {
  return config;
}

export function WidgetBuilder(config: RegisteredWidgetConfig) {
  return config;
}

class ClusterBuilder {
  widgets: RegisteredWidgetConfig[] = [];

  registerWidget(widget: RegisteredWidgetConfig) {
    this.widgets.push(widget);
  }

  build() {
    return {
      widgetsConfig: this.widgets.map((widget) => ({
        ...widget,
        widget: undefined,
      })),
      widgets: this.widgets,
    };
  }
}

export default new ClusterBuilder();
