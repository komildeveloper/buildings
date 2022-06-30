import { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'

function Home() {
	const [company, setCompany] = useState([])
	const [complex, setComplex] = useState([])
	const [complexAddress, setComplexAddress] = useState([])
	const [rooms, setRooms] = useState(null)
	const [banks, setBanks] = useState(null)
	const [mortage, setMortage] = useState(null)

	useEffect(() => {
		fetch(`http://localhost:5000/company`)
			.then(res => res.json())
			.then(data => setCompany(data))
	}, [])

	useEffect(() => {
		fetch(`http://localhost:5000/complex`)
			.then(res => res.json())
			.then(data => setComplex(data))
	}, [])
	useEffect(() => {
		fetch(`http://localhost:5000/complex-address`)
			.then(res => res.json())
			.then(data => setComplexAddress(data))
	}, [])
	useEffect(() => {
		fetch(`http://localhost:5000/rooms`)
			.then(res => res.json())
			.then(data => setRooms(data))
	}, [])
	useEffect(() => {
		fetch(`http://localhost:5000/banks`)
			.then(res => res.json())
			.then(data => setBanks(data))
	}, [])
	useEffect(() => {
		fetch(`http://localhost:5000/mortage`)
			.then(res => res.json())
			.then(data => setMortage(data))
	}, [])

	return (
		<>
			<Navbar />
			<div className='mx-auto max-w-4xl mt-5'>
				<div className='grid grid-cols-4 gap-4'>
					<div className=''>
						<label
							htmlFor='company'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900'
						>
							Company
						</label>
						<select
							id='company'
							className='block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							<option selected hidden>
								Company
							</option>
							{company &&
								company.map((e, i) => {
									return (
										<option key={i} defaultValue={e.company_name}>
											{e.company_name}
										</option>
									)
								})}
						</select>
					</div>

					<div className=''>
						<label
							htmlFor='complex'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900'
						>
							Complex
						</label>
						<select
							id='complex'
							className='block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							<option selected hidden>
								Complex
							</option>
							{complex &&
								complex.map((e, i) => {
									return (
										<option key={i} defaultValue={e.complex_name}>
											{e.complex_name}
										</option>
									)
								})}
						</select>
					</div>

					<div className=''>
						<label
							htmlFor='rooms'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900'
						>
							Rooms
						</label>
						<select
							id='rooms'
							className='block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							<option selected hidden>
								Rooms
							</option>
							{rooms &&
								rooms.map((e, i) => {
									return (
										<option key={i} defaultValue={e.room_number}>
											{e.room_number}
										</option>
									)
								})}
						</select>
					</div>

					<div className=''>
						<label
							htmlFor='mortage'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900'
						>
							Mortage Duration
						</label>
						<select
							id='mortage'
							className='block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							<option selected hidden>
								Mortage
							</option>
							{mortage &&
								mortage.map((e, i) => {
									return (
										<option key={i} defaultValue={e.mortage_year}>
											{e.mortage_year}
										</option>
									)
								})}
						</select>
					</div>
				</div>

				{company &&
					company.map((e, i) => {
						return (
							<div
								key={i}
								className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
							>
								<div className='flex justify-end px-4 pt-4'></div>
								<div className='flex flex-col items-center pb-10'>
									<img
										className='mb-3 w-24 h-24 rounded-full shadow-lg'
										src={e.company_logo}
										alt='Bonnie image'
									/>
									<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
										{e.company_name}
									</h5>
								</div>
							</div>
						)
					})}
			</div>
		</>
	)
}

export default Home
