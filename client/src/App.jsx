import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import DashboardPage from './Pages/Admin/DashboardPage'
import LoginPage from './Pages/Login/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import NotFound from './Pages/NotFound/NotFound'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/admin' element={<DashboardPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
