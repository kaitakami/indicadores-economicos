import Layout from './components/Layout'
import StatsGraphic from './components/StatsGraphic'
import FormGraphicData from './components/FormGraphicData'
import { countries } from './utils/countries'
import { indices } from './utils/indices.js'
import { useState } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/outline'

const App = () => {
	const [currentDataTicker, setCurrentDataTicker] = useState({
		ticker: '',
		country: '',
	})

	return (
		<Layout>
			<section className="flex flex-col gap-4 content-between max-w-2xl mx-auto my-4">
				<FormGraphicData
					setCurrentDataTicker={setCurrentDataTicker}
					currentDataTicker={currentDataTicker}
					countries={countries}
					indices={indices}
				/>

				{!(currentDataTicker.ticker && currentDataTicker.country) && (
					<span className="text-center">
						<ExclamationCircleIcon className="inline w-5 mr-1 animate-pulse text-dark" />{' '}
						Inicia seleccionando un país y un indíce
					</span>
				)}

				{currentDataTicker.ticker && currentDataTicker.country && (
					<StatsGraphic ticker={currentDataTicker.ticker} />
				)}
			</section>
		</Layout>
	)
}

export default App
