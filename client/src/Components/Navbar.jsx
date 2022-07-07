import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<>
			<nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<Link to='/' className='flex items-center'>
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							CheapHouse
						</span>
					</Link>
					<div className='flex md:order-2'>
						<button
							data-collapse-toggle='mobile-menu-4'
							type='button'
							className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							aria-controls='mobile-menu-4'
							aria-expanded='false'
						>
							<span className='sr-only'>Open main menu</span>
							<svg
								className='w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								></path>
							</svg>
							<svg
								className='hidden w-6 h-6'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</button>
					</div>
					<div
						className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
						id='mobile-menu-4'
					>
						<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
							<li>
								<Link
									to='/'
									className='block py-2 px-3 text-md rounded-md bg-gray-100 hover:bg-gray-700 hover:text-sky-100'
									aria-current='page'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to='/admin'
									className='block py-2 px-3 text-md rounded-md bg-gray-100 hover:bg-gray-700 hover:text-sky-100'
									aria-current='page'
								>
									Admin
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
