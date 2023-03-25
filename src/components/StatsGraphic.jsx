import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/solid";

import {
  Card,
  Text,
  Divider,
  LineChart,
  Icon,
  Title,
  Tracker,
  Flex,
  Bold,
} from "@tremor/react";

const latency = [
  {
    Date: "01.01.2022",
    "Avg. Response Time": 0.95,
  },
  {
    Date: "19.04.2022",
    "Avg. Response Time": 0.55,
  },
  {
    Date: "20.04.2022",
    "Avg. Response Time": 0.47,
  },
  {
    Date: "21.04.2022",
    "Avg. Response Time": 0.4,
  },
  {
    Date: "22.04.2022",
    "Avg. Response Time": 0.55,
  },
  {
    Date: "23.04.2022",
    "Avg. Response Time": 0.89,
  },
  {
    Date: "24.04.2022",
    "Avg. Response Time": 0.4,
  },
  {
    Date: "25.04.2022",
    "Avg. Response Time": 0.0,
  },
  {
    Date: "26.04.2022",
    "Avg. Response Time": 0.6,
  },
  {
    Date: "27.04.2022",
    "Avg. Response Time": 0.25,
  },
  {
    Date: "28.04.2022",
    "Avg. Response Time": 0.89,
  },
  {
    Date: "29.04.2022",
    "Avg. Response Time": 0.94,
  },
  {
    Date: "30.04.2022",
    "Avg. Response Time": 0.44,
  },
  {
    Date: "01.05.2022",
    "Avg. Response Time": 0.66,
  },
  {
    Date: "02.05.2022",
    "Avg. Response Time": 0.06,
  },
  {
    Date: "03.05.2022",
    "Avg. Response Time": 0.68,
  },
  {
    Date: "04.05.2022",
    "Avg. Response Time": 0.49,
  },
  {
    Date: "05.05.2022",
    "Avg. Response Time": 0.66,
  },
  {
    Date: "06.05.2022",
    "Avg. Response Time": 0.37,
  },
  {
    Date: "07.05.2022",
    "Avg. Response Time": 0.52,
  },
  {
    Date: "08.05.2022",
    "Avg. Response Time": 0.07,
  },
  {
    Date: "09.05.2022",
    "Avg. Response Time": 0.03,
  },
  {
    Date: "10.05.2022",
    "Avg. Response Time": 0.76,
  },
  {
    Date: "11.05.2022",
    "Avg. Response Time": 0.5,
  },
  {
    Date: "12.05.2022",
    "Avg. Response Time": 0.06,
  },
  {
    Date: "13.05.2022",
    "Avg. Response Time": 0.04,
  },
  {
    Date: "14.05.2022",
    "Avg. Response Time": 0.42,
  },
  {
    Date: "15.05.2022",
    "Avg. Response Time": 0.3,
  },
  {
    Date: "16.05.2022",
    "Avg. Response Time": 0.58,
  },
  {
    Date: "17.05.2022",
    "Avg. Response Time": 0.98,
  },
  {
    Date: "18.05.2022",
    "Avg. Response Time": 0.59,
  },
  {
    Date: "19.05.2022",
    "Avg. Response Time": 0.17,
  },
  {
    Date: "20.05.2022",
    "Avg. Response Time": 0.92,
  },
  {
    Date: "21.05.2022",
    "Avg. Response Time": 0.68,
  },
  {
    Date: "22.05.2022",
    "Avg. Response Time": 0.71,
  },
  {
    Date: "23.05.2022",
    "Avg. Response Time": 0.89,
  },
  {
    Date: "24.05.2022",
    "Avg. Response Time": 0.18,
  },
  {
    Date: "25.05.2022",
    "Avg. Response Time": 0.81,
  },
  {
    Date: "26.05.2022",
    "Avg. Response Time": 0.08,
  },
  {
    Date: "27.05.2022",
    "Avg. Response Time": 0.75,
  },
  {
    Date: "28.05.2022",
    "Avg. Response Time": 0.75,
  },
  {
    Date: "29.05.2022",
    "Avg. Response Time": 0.23,
  },
  {
    Date: "30.05.2022",
    "Avg. Response Time": 0.66,
  },
  {
    Date: "31.05.2022",
    "Avg. Response Time": 0.33,
  },
  {
    Date: "01.06.2022",
    "Avg. Response Time": 0.75,
  },
  {
    Date: "02.06.2022",
    "Avg. Response Time": 0.17,
  },
  {
    Date: "03.06.2022",
    "Avg. Response Time": 0.01,
  },
  {
    Date: "04.06.2022",
    "Avg. Response Time": 0.44,
  },
  {
    Date: "05.06.2022",
    "Avg. Response Time": 0.71,
  },
  {
    Date: "06.06.2022",
    "Avg. Response Time": 0.24,
  },
  {
    Date: "07.06.2022",
    "Avg. Response Time": 0.81,
  },
  {
    Date: "08.06.2022",
    "Avg. Response Time": 0.78,
  },
  {
    Date: "09.06.2022",
    "Avg. Response Time": 0.27,
  },
  {
    Date: "10.06.2022",
    "Avg. Response Time": 0.63,
  },
  {
    Date: "11.06.2022",
    "Avg. Response Time": 0.86,
  },
  {
    Date: "12.06.2022",
    "Avg. Response Time": 0.87,
  },
  {
    Date: "13.06.2022",
    "Avg. Response Time": 0.01,
  },
  {
    Date: "14.06.2022",
    "Avg. Response Time": 0.15,
  },
  {
    Date: "15.06.2022",
    "Avg. Response Time": 0.14,
  },
  {
    Date: "16.06.2022",
    "Avg. Response Time": 0.17,
  },
  {
    Date: "17.06.2022",
    "Avg. Response Time": 0.43,
  },
  {
    Date: "18.06.2022",
    "Avg. Response Time": 0.71,
  },
  {
    Date: "19.06.2022",
    "Avg. Response Time": 0.07,
  },
  {
    Date: "20.06.2022",
    "Avg. Response Time": 0.81,
  },
  {
    Date: "21.06.2022",
    "Avg. Response Time": 0.52,
  },
  {
    Date: "22.06.2022",
    "Avg. Response Time": 0.19,
  },
  {
    Date: "23.06.2022",
    "Avg. Response Time": 0.61,
  },
  {
    Date: "24.06.2022",
    "Avg. Response Time": 0.95,
  },
  {
    Date: "25.06.2022",
    "Avg. Response Time": 0.64,
  },
  {
    Date: "26.06.2022",
    "Avg. Response Time": 0.98,
  },
  {
    Date: "27.06.2022",
    "Avg. Response Time": 0.1,
  },
  {
    Date: "28.06.2022",
    "Avg. Response Time": 0.9,
  },
  {
    Date: "29.06.2022",
    "Avg. Response Time": 0.51,
  },
  {
    Date: "30.06.2022",
    "Avg. Response Time": 0.01,
  },
  {
    Date: "01.07.2022",
    "Avg. Response Time": 0.99,
  },
  {
    Date: "02.07.2022",
    "Avg. Response Time": 0.26,
  },
  {
    Date: "03.07.2022",
    "Avg. Response Time": 0.94,
  },
  {
    Date: "04.07.2022",
    "Avg. Response Time": 0.54,
  },
  {
    Date: "05.07.2022",
    "Avg. Response Time": 0.76,
  },
  {
    Date: "06.07.2022",
    "Avg. Response Time": 0.23,
  },
  {
    Date: "07.07.2022",
    "Avg. Response Time": 0.15,
  },
  {
    Date: "08.07.2022",
    "Avg. Response Time": 0.2,
  },
  {
    Date: "09.07.2022",
    "Avg. Response Time": 0.83,
  },
  {
    Date: "10.07.2022",
    "Avg. Response Time": 0.78,
  },
  {
    Date: "11.07.2022",
    "Avg. Response Time": 0.9,
  },
  {
    Date: "12.07.2022",
    "Avg. Response Time": 0.92,
  },
  {
    Date: "13.07.2022",
    "Avg. Response Time": 0.69,
  },
  {
    Date: "14.07.2022",
    "Avg. Response Time": 0.34,
  },
  {
    Date: "15.07.2022",
    "Avg. Response Time": 0.93,
  },
  {
    Date: "16.07.2022",
    "Avg. Response Time": 0.24,
  },
  {
    Date: "17.07.2022",
    "Avg. Response Time": 0.37,
  },
  {
    Date: "18.07.2022",
    "Avg. Response Time": 0.98,
  },
  {
    Date: "19.07.2022",
    "Avg. Response Time": 0.19,
  },
  {
    Date: "20.07.2022",
    "Avg. Response Time": 0.51,
  },
  {
    Date: "21.07.2022",
    "Avg. Response Time": 0.07,
  },
  {
    Date: "22.07.2022",
    "Avg. Response Time": 0.23,
  },
  {
    Date: "23.07.2022",
    "Avg. Response Time": 0.67,
  },
  {
    Date: "24.07.2022",
    "Avg. Response Time": 0.76,
  },
  {
    Date: "25.07.2022",
    "Avg. Response Time": 0.23,
  },
  {
    Date: "26.07.2022",
    "Avg. Response Time": 2.47,
  },
  {
    Date: "27.07.2022",
    "Avg. Response Time": 0.02,
  },
  {
    Date: "28.07.2022",
    "Avg. Response Time": 0.2,
  },
  {
    Date: "29.07.2022",
    "Avg. Response Time": 0.14,
  },
  {
    Date: "30.07.2022",
    "Avg. Response Time": 0.98,
  },
  {
    Date: "31.07.2022",
    "Avg. Response Time": 0.76,
  },
  {
    Date: "01.08.2022",
    "Avg. Response Time": 0.06,
  },
  {
    Date: "02.08.2022",
    "Avg. Response Time": 0.75,
  },
  {
    Date: "03.08.2022",
    "Avg. Response Time": 0.7,
  },
  {
    Date: "04.08.2022",
    "Avg. Response Time": 0.53,
  },
  {
    Date: "05.08.2022",
    "Avg. Response Time": 0.91,
  },
  {
    Date: "06.08.2022",
    "Avg. Response Time": 0.47,
  },
  {
    Date: "07.08.2022",
    "Avg. Response Time": 0.19,
  },
  {
    Date: "08.08.2022",
    "Avg. Response Time": 0.05,
  },
  {
    Date: "09.08.2022",
    "Avg. Response Time": 0.91,
  },
  {
    Date: "10.08.2022",
    "Avg. Response Time": 0.43,
  },
  {
    Date: "11.08.2022",
    "Avg. Response Time": 0.06,
  },
  {
    Date: "12.08.2022",
    "Avg. Response Time": 0.58,
  },
  {
    Date: "13.08.2022",
    "Avg. Response Time": 0.07,
  },
  {
    Date: "14.08.2022",
    "Avg. Response Time": 0.09,
  },
  {
    Date: "15.08.2022",
    "Avg. Response Time": 0.19,
  },
  {
    Date: "16.08.2022",
    "Avg. Response Time": 0.03,
  },
  {
    Date: "17.08.2022",
    "Avg. Response Time": 0.59,
  },
  {
    Date: "18.08.2022",
    "Avg. Response Time": 0.86,
  },
  {
    Date: "19.08.2022",
    "Avg. Response Time": 0.25,
  },
  {
    Date: "20.08.2022",
    "Avg. Response Time": 0.85,
  },
  {
    Date: "21.08.2022",
    "Avg. Response Time": 0.19,
  },
  {
    Date: "22.08.2022",
    "Avg. Response Time": 0.91,
  },
  {
    Date: "23.08.2022",
    "Avg. Response Time": 0.05,
  },
  {
    Date: "24.08.2022",
    "Avg. Response Time": 0.36,
  },
  {
    Date: "25.08.2022",
    "Avg. Response Time": 0.16,
  },
  {
    Date: "26.08.2022",
    "Avg. Response Time": 0.66,
  },
  {
    Date: "27.08.2022",
    "Avg. Response Time": 0.44,
  },
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
const availability = [
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" }
];

const valueFormatter = (number) =>
`${Intl.NumberFormat("us").format(number).toString()}s`;


function StatsGraphic() {

  return (
    <Card>
      <div className="text-center">
        <Title className="mt-2">All services are online</Title>
        <Text className="text-center">As of September 7th, 1:46 PM</Text>
      </div>

      <Divider />

      <Flex className="mt-4 whitespace-nowrap">
        <Flex justifyContent="start" className="space-x-2">
          <Icon icon={CheckCircleIcon} color="emerald" />
          <Text>
            <Bold>API</Bold>
          </Text>
        </Flex>
        <Text>99.87% uptime</Text>
      </Flex>
      <Tracker data={availability} className="mt-2" />
      <Title className="mt-6">Avg. response time per day</Title>
      <LineChart
        className="mt-4 h-80"
        data={latency}
        index="Date"
        categories={["Avg. Response Time"]}
        colors={["gray"]}
        valueFormatter={valueFormatter}
        showLegend={false}
        yAxisWidth={48}
      />
    </Card>
  )
}

export default StatsGraphic;