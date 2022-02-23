import React, { Component } from 'react';
// import React from 'react';
// import { PanelProps } from '@grafana/data';
import { DataFrame, PanelProps } from '@grafana/data';
// import { SimpleOptions } from 'types';
import { PanelOptions } from './models.gen';
import { Table } from '@grafana/ui';

interface Props extends PanelProps<PanelOptions> {}

// export const TablePanel: React.FC<Props> = ({ options, data, width, height }) => {
// return (
//   <div>
//     <Table data={data.series[0]} height={500} width={width} />
//   </div>
// );
// };

export class TablePanel extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  renderTable(frame: DataFrame, width: number, height: number) {
    // const { options } = this.props;
    // const footerValues = options.footer?.show ? getFooterCells(frame, options.footer) : undefined;

    return (
      <Table
        height={height}
        width={width}
        data={frame}
        // footerValues={footerValues}
      />
    );
  }

  render() {
    const { data, height, width } = this.props;
    console.log('DATA');
    console.log(data);

    // const frames = data.series;
    // const count = frames?.length;
    // const hasFields = frames[0]?.fields.length;

    return <div>{this.renderTable(data.series[0], width, height)}</div>;
  }
}
