function FormGraphicData(props) {
	const getFormInfo = (ele) => {
		props.setCurrentDataTicker((prevState) => ({
			...prevState, // destructuring del estado
			[ele.target.name]: ele.target.value, // agregando o modificando valores a currentDataticker
		}))
		if (`${ele.target.name}` === 'country') {
			props.setCurrentDataTicker((prevState) => ({
				...prevState,
				ticker: '',
			}))
		}
	}

	return (
		<>
			<form
				className="w-fit h-fit flex flex-col items-start mx-auto"
				action="/"
			>
				{/* select country */}
				<div className="flex flex-col w-fit sm:flex-row sm:mt-4">
					<label htmlFor="country" className="w-fit mr-2">
						Selecciona el país:
					</label>
					<select
						name="country"
						id="country"
						className={`min-w-min max-w-fit my-2 p-1 bg-text text-darkBody rounded-sm cursor-pointer text-sm sm:my-0 sm:mx-2 sm:text-base ${
							props.currentDataTicker.country === '' && 'text-gray-500'
						} focus:text-darkBody`}
						onChange={getFormInfo}
					>
						<option value="">- Selecciona un país -</option>
						{props.countries.map((item) => (
							<ItemFormGraphic key={item} value={item} description={item} />
						))}
					</select>
				</div>
				{/* select index */}
				{props.currentDataTicker.country && (
					<div className="flex flex-col w-fit sm:flex-row sm:mt-4">
						<label htmlFor="ticker" className="w-fit mr-2">
							Selecciona un índice:
						</label>
						<select
							name="ticker"
							id="ticker"
							className={`min-w-min max-w-fit my-2 p-1 bg-text text-darkBody rounded-sm cursor-pointer text-sm sm:my-0 sm:mx-2 sm:text-base ${
								props.currentDataTicker.ticker === '' && 'text-gray-500'
							} focus:text-darkBody`}
							onChange={getFormInfo}
						>
							<option value="">- Selecciona un índice -</option>
							{props.indices.map(
								(item) =>
									item.country &&
									item.country === props.currentDataTicker.country && (
										<ItemFormGraphic
											key={item.ticker}
											value={item.ticker}
											description={item.name}
										/>
									),
							)}
						</select>
					</div>
				)}
			</form>
		</>
	)
}

export default FormGraphicData

function ItemFormGraphic(props) {
	// Si el string del Option tiene más de 30 caracteres, se corta en el caracter número 30 y se colocan 3 puntos
	const cutWorld = (word) => {
		if (word.length > 30) {
			return `${word.slice(0, 30)}...`
		} else {
			return word
		}
	}

	return (
		<option value={props.value} title={props.description}>
			{cutWorld(props.description)}
		</option>
	)
}
