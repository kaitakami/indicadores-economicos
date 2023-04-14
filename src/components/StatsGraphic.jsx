import { useEffect } from 'react'
import { useFetchTicker } from '../hooks/useFetchTicker'
import { Card, AreaChart, Title } from '@tremor/react'
import { toast } from 'react-hot-toast'
import { CurrencyDollarIcon } from '@heroicons/react/solid'

const valueFormatter = (number) =>
	`${Intl.NumberFormat('us').format(number).toString()}`

function StatsGraphic({ ticker }) {
	// Se utiliza el tostador para generar los mensajes de estado
	const onLoading = () =>
		toast.loading(
			<span>
				<CurrencyDollarIcon className="inline w-5 mr-1 animate-spin text-dark" />
				loading...
			</span>,
			{
				id: 'loading',
				icon: null,
				className: 'bg-light text-dark',
			},
		)
	const onSuccess = () => {
		toast.dismiss()
		toast.success('data uploaded successfully', {
			id: 'success',
			className: 'bg-light text-dark',
		})
	}
	const onError = (mssj) => {
		toast.dismiss()
		toast.error(mssj, {
			id: 'error',
			className: 'bg-light text-dark',
		})
	}

	const { data, loading, error } = useFetchTicker(ticker)

	useEffect(() => {
		loading && onLoading()
		error && onError(error)
		!loading && !error && onSuccess()
	}, [data])

	return (
		<>
			{!!data && (
				<Card className="bg-component ring-none rounded-md px-2 pt-4 md:pr-6 md:pb-8">
					<div className="text-center">
						<Title className="mt-2 text-body">
							{!!data && data.description}
						</Title>
					</div>
					<AreaChart
						className="mt-4 h-80 text-body"
						data={data.data}
						index="date"
						categories={['value']}
						colors={['emerald']}
						valueFormatter={valueFormatter}
						showLegend={false}
						yAxisWidth={48}
					/>
				</Card>
			)}
		</>
	)
}

export default StatsGraphic
