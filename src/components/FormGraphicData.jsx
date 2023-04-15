import { Combobox, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/outline'

function FormGraphicData(props) {
	const [query, setQuery] = useState({ country: '', ticker: '' })

	const filteredCountries =
		query.country === ''
			? props.countries
			: props.countries.filter((country) =>
					country
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.country.toLowerCase().replace(/\s+/g, '')),
			  )

	const filteredTickers =
		query.ticker === ''
			? props.indices.filter(
					(index) => index.country === props.currentDataTicker.country,
			  )
			: props.indices
					.filter((index) => index.country === props.currentDataTicker.country)
					.filter((index) =>
						index.name
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(query.ticker.toLowerCase().replace(/\s+/g, '')),
					)

	return (
		<>
			<form
				className="flex flex-col items-start mx-auto w-full pb-5 max-w-lg"
				action="/"
			>
				{/* select country */}
				<div className="flex flex-col w-full sm:mt-4">
					<label
						htmlFor="country"
						className="w-fit mr-2 text-stone-300 font-medium"
					>
						Selecciona el país:
					</label>
					<Combobox
						value={props.currentDataTicker.country}
						onChange={(e) => {
							props.setCurrentDataTicker({
								ticker: '',
								country: e,
							})
						}}
					>
						<div className="relative mt-1">
							<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-300 sm:text-sm max-w-lg">
								<Combobox.Input
									className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
									displayValue={(country) => country}
									onChange={(event) =>
										setQuery((prev) => ({
											...prev,
											country: event.target.value,
										}))
									}
								/>
								<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
									<ChevronDownIcon
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</Combobox.Button>
							</div>
							<Transition
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
								afterLeave={() =>
									setQuery((prev) => ({ ...prev, country: '' }))
								}
							>
								<Combobox.Options className="absolute z-10 bt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
									{filteredCountries.length === 0 && query !== '' ? (
										<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
											No se encontraron resultados
										</div>
									) : (
										filteredCountries.map((country) => (
											<Combobox.Option
												key={country}
												className={({ active }) =>
													`relative cursor-default select-none py-2 pl-10 pr-4 ${
														active ? 'bg-sky-600 text-white' : 'text-gray-900'
													}`
												}
												value={country}
											>
												{({ selected, active }) => (
													<>
														<span
															className={`block truncate ${
																selected ? 'font-medium' : 'font-normal'
															}`}
														>
															{country}
														</span>
														{selected ? (
															<span
																className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																	active ? 'text-white' : 'text-sky-600'
																}`}
															>
																<CheckIcon
																	className="h-5 w-5"
																	aria-hidden="true"
																/>
															</span>
														) : null}
													</>
												)}
											</Combobox.Option>
										))
									)}
								</Combobox.Options>
							</Transition>
						</div>
					</Combobox>
				</div>
				{/* select index */}
				{props.currentDataTicker.country && (
					<div className="flex flex-col w-full sm:mt-4">
						<label
							htmlFor="country"
							className="mr-2 text-stone-300 font-medium"
						>
							Selecciona el índice:
						</label>
						<Combobox
							value={props.currentDataTicker.ticker || ''}
							onChange={(e) => {
								props.setCurrentDataTicker((prev) => ({
									...prev,
									ticker: e.ticker,
								}))
							}}
						>
							<div className="relative mt-1 w-full">
								<div className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-300 sm:text-sm">
									<Combobox.Input
										className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
										displayValue={(ticker) => ticker}
										onChange={(event) =>
											setQuery((prev) => ({
												...prev,
												ticker: event.target.value,
											}))
										}
									/>
									<Combobox.Button className="absolute z-10 inset-y-0 right-0 flex items-center pr-2">
										<ChevronDownIcon
											className="h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
									</Combobox.Button>
								</div>
								<Transition
									as={Fragment}
									leave="transition ease-in duration-100"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
									afterLeave={() =>
										setQuery((prev) => ({ ...prev, ticker: '' }))
									}
								>
									<Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
										{filteredTickers.length === 0 && query.ticker !== '' ? (
											<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
												No se encontraron resultados
											</div>
										) : (
											filteredTickers.map((index) => (
												<Combobox.Option
													key={index.ticker}
													className={({ active }) =>
														`relative cursor-default select-none py-2 pl-10 pr-4 ${
															active ? 'bg-sky-600 text-white' : 'text-gray-900'
														}`
													}
													value={index}
												>
													{({ selected, active }) => (
														<>
															<span
																className={`block truncate ${
																	selected ? 'font-medium' : 'font-normal'
																}`}
															>
																{index.name}
															</span>
															{index.ticker ===
															props.currentDataTicker.ticker ? (
																<span
																	className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																		active ? 'text-white' : 'text-sky-600'
																	}`}
																>
																	<CheckIcon
																		className="h-5 w-5"
																		aria-hidden="true"
																	/>
																</span>
															) : null}
														</>
													)}
												</Combobox.Option>
											))
										)}
									</Combobox.Options>
								</Transition>
							</div>
						</Combobox>
					</div>
				)}
			</form>
		</>
	)
}

export default FormGraphicData
