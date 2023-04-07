import React, { useEffect } from 'react'
import { Card, LineChart, Title } from '@tremor/react'
import { ExclamationCircleIcon } from '@heroicons/react/outline'

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`
  
function StatsGraphic(props) {
  useEffect(() => {
    if(props.data && props.dataStats.ticker!==props.currentDataTicker.ticker) {
      props.updateData
      console.log(props.data)
    }
  }, [props.currentDataTicker])

  return (
    <>
      <div className='hidden'>
        {props.loading && props.onLoading()}
        {props.error && props.onError(props.error)}
        {!props.loading && !props.error && props.onSuccess()}
      </div>
      <Card className="bg-component ring-none rounded-md px-2 pt-4 md:pr-6 md:pb-8">
        <div className="text-center">
          <Title className="mt-2 text-body">
            {props.currentDataTicker.register} {(!!props.currentDataTicker.register && !!props.currentDataTicker.country) && "of"} {props.currentDataTicker.country}
            {(!props.currentDataTicker.register && !props.currentDataTicker.country) && <span><ExclamationCircleIcon className='inline w-5 mr-1 animate-pulse text-dark' /> Inicia seleccionando un país y un indíce</span>}
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
        />
      </Card>
    </>
  )
}

export default StatsGraphic
