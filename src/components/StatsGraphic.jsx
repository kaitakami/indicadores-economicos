import React, { useEffect } from 'react'

import { Card, LineChart, Title } from '@tremor/react'

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`

function StatsGraphic(props) {
  useEffect(() => {
    console.log('--------------------')
    // console.log(props.dataStats)
    console.log(props.currentDataTicker)
  }, [props.currentDataTicker])

  return (
    <>
      <div className='hidden'>
        {!!props.error && !props.loading && props.onError(props.error)}
        {!!props.loading && !props.error && props.onLoading()}
        {!props.loading && !props.error && props.onSuccess()}
      </div>
      <Card className="bg-component ring-none rounded-md px-2 pt-4 md:pr-6 md:pb-8">
        <div className="text-center">
          <Title className="mt-2 text-body">
            {props.currentDataTicker.register} of {props.currentDataTicker.country}
          </Title>
        </div>
        <LineChart
          className="mt-4 h-80 text-body"
          data={props.dataStats.data}
          index="date"
          categories={['value']}
          colors={['lime']}
          valueFormatter={valueFormatter}
          showLegend={false}
          yAxisWidth={48}
          scaleLineColor={["black"]}
        />
      </Card>
    </>
  )
}

export default StatsGraphic
