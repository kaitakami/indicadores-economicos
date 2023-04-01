import React, { useEffect } from 'react';

import {
  Card,
  Text,
  LineChart,
  Title,
} from "@tremor/react";

const valueFormatter = (number) =>
`${Intl.NumberFormat("us").format(number).toString()}s`;

const latency = [];

function StatsGraphic(props) {
  return (
    <Card className='bg-component ring-none rounded-md px-2 pt-4 md:pr-8 md:pb-8'>
      <div className="text-center">
        <Title className="mt-2 text-body">{props.currentDataTicker.register} of {props.currentDataTicker.country}</Title>
      </div>
      <LineChart
        className="mt-4 h-80 text-textBody"
        data={latency}
        index="Date"
        categories={["Avg. Response Time"]}
        colors={["lime"]}
        valueFormatter={valueFormatter}
        showLegend={false}
        yAxisWidth={48}
      />
    </Card>
  )
}

export default StatsGraphic;