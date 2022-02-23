type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
}
// export declare enum TableCellDisplayMode {
//   Auto = "auto",
//   BasicGauge = "basic",
//   ColorBackground = "color-background",
//   ColorBackgroundSolid = "color-background-solid",
//   ColorText = "color-text",
//   GradientGauge = "gradient-gauge",
//   Image = "image",
//   JSONView = "json-view",
//   LcdGauge = "lcd-gauge"
// }
// export interface TableFieldOptions {
//   align: string;
//   displayMode: TableCellDisplayMode;
//   hidden?: boolean;
//   minWidth?: number;
//   width?: number;
//   filterable?: boolean;
// }
