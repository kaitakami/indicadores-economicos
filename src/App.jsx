import Layout from './components/Layout'
import StatsGraphic from './components/StatsGraphic'
import FormGraphicData from './components/FormGraphicData'
import { useFetchTicker } from './hooks/useFetchTicker'
import { useOrderIndicesList } from './hooks/useOrderIndicesList'
import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { CurrencyDollarIcon } from '@heroicons/react/solid'

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

  // Se utiliza el tostador para generar los mensajes de estado
  const notifyLoading = () => toast.loading(
    <span><CurrencyDollarIcon className='inline w-5 mr-1 animate-spin text-dark' />loading...</span>, {
    id: 'hopefully',
    icon: null,
    className: 'bg-light text-dark',
  });
  const notifySuccess = () => {
    toast.dismiss()
    toast.success(
      'data uploaded successfully', {
      id: 'successfully',
      className: 'bg-light text-dark',
    });
  }
  const notifyError = (mssj) => {
    toast.dismiss()
    toast.error(
      mssj, {
      id: 'wrongly',
      className: 'bg-light text-dark',
    });
  }

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

  function changeCurrentData(type, value) {
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
              changeCurrentData={changeCurrentData}
            />
          )}
        />

        <StatsGraphic
          currentDataTicker={currentDataTicker}
          dataStats={dataStats}
          loading={loading}
          error={error}
          handleCancelRequest={handleCancelRequest}
          onSuccess={notifySuccess}
          onLoading={notifyLoading}
          onError={notifyError}
        />
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
        props.changeCurrentData(props.codeType, props.description)
      }}
    >
      {cutWorld()}
    </option>
  )
}
