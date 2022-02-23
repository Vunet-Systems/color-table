import { PanelPlugin } from '@grafana/data';
// import { SimpleOptions } from './types';
// import { TableCellDisplayMode, TableFieldOptions } from './types';
import { TableFieldOptions } from '@grafana/schema';
import { TableCellDisplayMode } from '@grafana/ui';
import { TablePanel } from './SimplePanel';
import { PanelOptions, defaultPanelFieldConfig } from './models.gen';
// import { PanelOptions } from './models.gen';

export const plugin = new PanelPlugin<PanelOptions, TableFieldOptions>(TablePanel).useFieldConfig({
  useCustomConfig: (builder) => {
    builder
      .addNumberInput({
        path: 'minWidth',
        name: 'Minimum column width',
        description: 'The minimum width for column auto resizing',
        settings: {
          placeholder: '150',
          min: 50,
          max: 500,
        },
        shouldApply: () => true,
        defaultValue: defaultPanelFieldConfig.minWidth,
      })
      .addNumberInput({
        path: 'width',
        name: 'Column width',
        settings: {
          placeholder: 'auto',
          min: 20,
          max: 300,
        },
        shouldApply: () => true,
        defaultValue: defaultPanelFieldConfig.width,
      })
      .addRadio({
        path: 'align',
        name: 'Column alignment',
        settings: {
          options: [
            { label: 'auto', value: 'auto' },
            { label: 'left', value: 'left' },
            { label: 'center', value: 'center' },
            { label: 'right', value: 'right' },
          ],
        },
        defaultValue: defaultPanelFieldConfig.align,
      })
      .addSelect({
        path: 'displayMode',
        name: 'Cell display mode',
        description: 'Color text, background, show as gauge, etc',
        settings: {
          options: [
            { value: TableCellDisplayMode.Auto, label: 'Auto' },
            { value: TableCellDisplayMode.ColorText, label: 'Color text' },
            { value: TableCellDisplayMode.ColorBackground, label: 'Color background (gradient)' },
            { value: TableCellDisplayMode.ColorBackgroundSolid, label: 'Color background (solid)' },
            { value: TableCellDisplayMode.GradientGauge, label: 'Gradient gauge' },
            { value: TableCellDisplayMode.LcdGauge, label: 'LCD gauge' },
            { value: TableCellDisplayMode.BasicGauge, label: 'Basic gauge' },
            { value: TableCellDisplayMode.JSONView, label: 'JSON View' },
            { value: TableCellDisplayMode.Image, label: 'Image' },
          ],
        },
        defaultValue: defaultPanelFieldConfig.displayMode,
      })
      .addBooleanSwitch({
        path: 'filterable',
        name: 'Column filter',
        description: 'Enables/disables field filters in table',
        defaultValue: defaultPanelFieldConfig.filterable,
      })
      .addBooleanSwitch({
        path: 'hidden',
        name: 'Hide in table',
        defaultValue: undefined,
        hideFromDefaults: true,
      });
  },
});
