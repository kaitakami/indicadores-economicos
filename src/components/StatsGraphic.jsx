import React from 'react';

import {
  Card,
  Text,
  LineChart,
  Title,
} from "@tremor/react";

const latency = [
  {
    Date: "28.08.2022",
    "Avg. Response Time": 0.03,
  },
  {
    Date: "29.08.2022",
    "Avg. Response Time": 0.4,
  },
  {
    Date: "30.08.2022",
    "Avg. Response Time": 0.01,
  },
  {
    Date: "31.08.2022",
    "Avg. Response Time": 0.8,
  },
  {
    Date: "01.09.2022",
    "Avg. Response Time": 0.2,
  },
  {
    Date: "02.09.2022",
    "Avg. Response Time": 0.46,
  },
  {
    Date: "03.09.2022",
    "Avg. Response Time": 0.38,
  },
  {
    Date: "04.09.2022",
    "Avg. Response Time": 0.97,
  },
  {
    Date: "05.09.2022",
    "Avg. Response Time": 0.94,
  },
  {
    Date: "06.09.2022",
    "Avg. Response Time": 0.38,
  },
  {
    Date: "07.09.2022",
    "Avg. Response Time": 0.08,
  },
]

const valueFormatter = (number) =>
`${Intl.NumberFormat("us").format(number).toString()}s`;


function StatsGraphic(props) {
  return (
    <Card className='bg-bgComponent ring-none rounded-md px-2 pt-4 md:pr-8 md:pb-8'>
      <div className="text-center">
        <Title className="mt-2 text-textBody">{props.currentDescription} of {props.currentCountry}</Title>
        <Text className="text-center text-textBody">Until: {props.lastDateLoad}</Text>
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