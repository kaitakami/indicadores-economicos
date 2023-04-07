import Layout from './components/Layout'
import StatsGraphic from './components/StatsGraphic'
import FormGraphicData from './components/FormGraphicData'
import { useFetchTicker } from './hooks/useFetchTicker'
import { useOrderIndicesList } from './hooks/useOrderIndicesList'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { CurrencyDollarIcon } from '@heroicons/react/solid'

const App = () => {
	const [currentDataTicker, setCurrentDataTicker] = useState({})

	const { data, loading, error, handleCancelRequest } = useFetchTicker(
		currentDataTicker.ticker,
	)

	const [dataStats, setDataStats] = useState({ data: [] })
	const filterCodes = useOrderIndicesList()

	// Se utiliza el tostador para generar los mensajes de estado
	const notifyLoading = () =>
		toast.loading(
			<span>
				<CurrencyDollarIcon className="inline w-5 mr-1 animate-spin text-dark" />
				loading...
			</span>,
			{
				id: 'hopefully',
				icon: null,
				className: 'bg-light text-dark',
			},
		)
	const notifySuccess = () => {
		toast.dismiss()
		toast.success('data uploaded successfully', {
			id: 'successfully',
			className: 'bg-light text-dark',
		})
	}
	const notifyError = (mssj) => {
		toast.dismiss()
		toast.error(mssj, {
			id: 'wrongly',
			className: 'bg-light text-dark',
		})
	}

	function updateData() {
		if (data) {
			setDataStats(data)
			console.log(data.ticker + '-' + currentDataTicker.ticker)
		} else {
			setDataStats((prevState) => ({
				...prevState,
				data: [],
			}))
		}
	}

	useEffect(() => {
		updateData()
	}, [currentDataTicker])

	return (
		<Layout>
			<section className="flex flex-col gap-4 content-between max-w-2xl mx-auto my-4">
				<FormGraphicData
					setCurrentDataTicker={setCurrentDataTicker}
					currentDataTicker={currentDataTicker}
					filterCodes={filterCodes}
					render={(item) => (
						<ItemFormGraphic
							key={item.code}
							code={item.code}
							codeType={item.codeType}
							description={item.description}
							setCurrentDataTicker={setCurrentDataTicker}
							currentDataTicker={currentDataTicker}
							setDataStats={setDataStats}
						/>
					)}
				/>

				<StatsGraphic
					currentDataTicker={currentDataTicker}
					dataStats={dataStats}
					error={error}
					loading={loading}
					handleCancelRequest={handleCancelRequest}
					onSuccess={notifySuccess}
					onLoading={notifyLoading}
					onError={notifyError}
					data={data}
					updateData={updateData}
				/>
			</section>
		</Layout>
	)
}

export default App

function ItemFormGraphic(props) {
	// Si el string del Option tiene más de 30 caracteres, se corta en el caracter número 30 y se colocan 3 puntos
	const cutWorld = () => {
		if (props.description.length > 30) {
			return `${props.description.slice(0, 30)}...`
		} else {
			return props.description
		}
	}

	function changeCurrentData(type, value) {
		props.setCurrentDataTicker((prevState) => ({
			...prevState, // destructuring del estado
			[type]: value, // agregando o modificando valores a currentDataticker
		}))
		props.setDataStats((prevState) => ({
			...prevState, // destructuring del estado
			[type]: value, // agregando o modificando valores a currentDataticker
		}))
	}

	return (
		<option
			value={props.code}
			title={props.description}
			onClick={() => {
				changeCurrentData(props.codeType, props.description)
			}}
		>
			{cutWorld()}
		</option>
	)
}
