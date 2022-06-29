function Login() {
	return (
		<>
			<div className='flex items-center justify-center min-h-screen bg-gray-100'>
				<div className='px-8 py-6 mt-4 text-left bg-white shadow-lg'>
					<h3 className='text-2xl font-bold text-center'>
						Login to your account
					</h3>
					<form action='/login' method='POST'>
						<div className='mt-4'>
							<label className='block' htmlFor='email'>
								Email
							</label>
							<input
								type='email'
								name='email'
								placeholder='Email'
								className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
							/>
						</div>
						<div className='mt-4'>
							<label className='block' htmlFor='email'>
								Password
							</label>
							<input
								type='password'
								name='password'
								placeholder='Password'
								className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600'
							/>
						</div>
						<div className='flex items-baseline justify-between'>
							<button
								type='submit'
								className='px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
