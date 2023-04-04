import Layout from './components/Layout'
import StatsGraphic from './components/StatsGraphic'
import FormGraphicData from './components/FormGraphicData'
import { useFetchTicker } from './hooks/useFetchTicker'
import { useOrderIndicesList } from './hooks/useOrderIndicesList'
import { useState, useEffect } from 'react'
import '../public/coin.svg'

const App = () => {
  const [dataStats, setDataStats] = useState({ data: [] })
  const [currentDataTicker, setCurrentDataTicker] = useState({
    ticker: 'M3YDAZ',
    register: '3 month yield',
    country: 'Afghanistan',
  })

  const { data, loading, error, handleCancelRequest } = useFetchTicker(
    currentDataTicker.ticker
  )
  const filterCodes = useOrderIndicesList()

  useEffect(() => {
    if (data) {
      setDataStats(data)
    }
  }, [currentDataTicker])

  useEffect(() => {
    if (data) {
      setDataStats(data)
    }
  }, [])

  function changeCurrentIndex(type, value) {
    const newObject = currentDataTicker
    if (type === 'register') {
      newObject.register = `${value}`
      setCurrentDataTicker(newObject)
    } else {
      newObject.country = `${value}`
      setCurrentDataTicker(newObject)
    }
  }

  return (
    <Layout>
      <section className="flex flex-col gap-4 content-between max-w-2xl mx-auto my-4">
        <FormGraphicData
          setCurrentDataTicker={setCurrentDataTicker}
          currentDataTicker={currentDataTicker}
          filterCodes={filterCodes}
          dataStats={dataStats}
          render={(item) => (
            <ItemFormGraphic
              key={item.code}
              code={item.code}
              codeType={item.codeType}
              description={item.description}
              changeCurrentIndex={changeCurrentIndex}
            />
          )}
        />

        <StatsGraphic
          currentDataTicker={currentDataTicker}
          dataStats={dataStats}
          loading={loading}
          error={error}
          handleCancelRequest={handleCancelRequest}
          onLoading={() => <span><img src="../public/coin.svg" alt="coin" className='inline mr-4 w-6 h-6 animate-spin sm:w-8 sm:h-8' />Loading...</span>}
          onError={() => <span>Not Found</span>}
          render={() => <span>{currentDataTicker.register} of {currentDataTicker.country}</span>}
        / >
      </section>
    </Layout>
  )
}

export default App

function ItemFormGraphic(props) {
  const cutWorld = () => {
    if (props.description.length > 30) {
      return `${props.description.slice(0, 30)}...`
    } else {
      return props.description
    }
  }
  return (
    <option
      value={props.code}
      title={props.description}
      onClick={() => {
        props.changeCurrentIndex(props.codeType, props.description)
      }}
    >
      {cutWorld()}
    </option>
  )
}
