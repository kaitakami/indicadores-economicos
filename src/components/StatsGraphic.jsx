import { useEffect } from 'react'
import { useFetchTicker } from '../hooks/useFetchTicker'
import { Card, AreaChart, Title } from '@tremor/react'
import { toast } from 'react-hot-toast'
import { CurrencyDollarIcon } from '@heroicons/react/solid'
import { Button } from './ui/Button'

const valueFormatter = (number) =>
	`${Intl.NumberFormat('us').format(number).toString()}`

function StatsGraphic({ ticker }) {
	const { data, loading, error, setError, handleCancelRequest } = useFetchTicker(ticker)

	// Se utiliza el tostador para generar los mensajes de estado
	const onLoading = () => {
		toast.loading(
			<span>
				<CurrencyDollarIcon className="inline w-5 mr-1 animate-spin text-dark" />
				Cargando...
			</span>,
			{
				id: 'loading',
				icon: null,
				className: 'bg-light text-dark text-center',
			},
		)
	}
	const onCancel = () => {
		if(loading) {
			handleCancelRequest();
			if(!error) {
				onError("Solicitud cancelada");
			}
		}
	}
	const onError = (mssj) => {
		toast.dismiss('loading')
		toast.error(mssj, {
			id: 'error',
			className: 'bg-light text-dark text-center',
		})
		setError(null)
	}
	const onSuccess = () => {
		toast.dismiss()
		toast.success('Datos subidos con éxito', {
			id: 'success',
			className: 'bg-light text-dark text-center',
		})
	}

	useEffect(() => {
		loading && onLoading()
		error && onError(error)
		!loading && !error && onSuccess()
	}, [data])

	return (
		<>
			<Button 
				className={'mx-auto'} 
				variant={'default'} 
				type={'button'} 
				onClick={onCancel}
			>
				Cancelar
			</Button>
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
