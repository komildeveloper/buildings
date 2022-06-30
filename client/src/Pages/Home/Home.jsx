import { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'

function Home() {
	const [company, setCompany] = useState([])

	useEffect(() => {
		fetch(`http://localhost:5000/company`)
			.then(res => res.json())
			.then(data => setCompany(data))
	}, [])

	return (
		<>
			<Navbar />
			<div className='mx-auto max-w-4xl mt-5'>
				<div className='grid grid-cols-4 gap-4'>
					<div className=''>
						<label
							htmlFor='small'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900'
						>
							Company
						</label>
						<select
							id='small'
							className='block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							<option selected>Company</option>
							<option defaultValue='US'>United States</option>
							<option defaultValue='CA'>Canada</option>
							<option defaultValue='FR'>France</option>
							<option defaultValue='DE'>Germany</option>
						</select>
					</div>

					<div className=''>
						<label
							htmlFor='small'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900'
						>
							Complex
						</label>
						<select
							id='small'
							className='block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							<option selected>Complex</option>
							<option defaultValue='US'>United States</option>
							<option defaultValue='CA'>Canada</option>
							<option defaultValue='FR'>France</option>
							<option defaultValue='DE'>Germany</option>
						</select>
					</div>

					<div className=''>
						<label
							htmlFor='small'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900'
						>
							Room
						</label>
						<select
							id='small'
							className='block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							<option selected>Room</option>
							<option defaultValue='US'>United States</option>
							<option defaultValue='CA'>Canada</option>
							<option defaultValue='FR'>France</option>
							<option defaultValue='DE'>Germany</option>
						</select>
					</div>

					<div className=''>
						<label
							htmlFor='small'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900'
						>
							Mortage Duration
						</label>
						<select
							id='small'
							className='block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						>
							<option selected>Mortage</option>
							<option defaultValue='US'>United States</option>
							<option defaultValue='CA'>Canada</option>
							<option defaultValue='FR'>France</option>
							<option defaultValue='DE'>Germany</option>
						</select>
					</div>
				</div>
			</div>

			{company &&
				company.map((e, i) => {
					return (
						<div key={i} className='block bg-sky-300'>
							<h3>{e.company_name}</h3>
							<img alt={e.company_id} src={e.company_logo} />
						</div>
					)
				})}
		</>
	)
}

export default Home
