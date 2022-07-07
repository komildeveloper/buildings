import { Link } from 'react-router-dom'

function AdminNavbar() {
	return (
		<>
			<nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-700'>
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
				</div>
			</nav>

			<div className='flex'>
				<div className='grow'>
					<div className='w-60 h-full overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 absolute'>
						<ul className='relative'>
							<li>
								<a
									href='#'
									className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<svg
										className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
										<path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
									</svg>
									<span className='ml-3'>Dashboard</span>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<svg
										className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
											clipRule='evenodd'
										></path>
									</svg>
									<span className='flex-1 ml-3 whitespace-nowrap'>Users</span>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<svg
										className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='flex-1 ml-3 whitespace-nowrap'>
										Products
									</span>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<svg
										className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='flex-1 ml-3 whitespace-nowrap'>Sign In</span>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<svg
										className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
											clip-rule='evenodd'
										></path>
									</svg>
									<span className='flex-1 ml-3 whitespace-nowrap'>Sign Up</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default AdminNavbar
