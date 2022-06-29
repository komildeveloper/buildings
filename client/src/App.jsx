import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Dashboard from './Pages/Admin/Dashboard'
import Login from './Pages/Login/Login'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/admin' element={<Dashboard />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	)
}

export default App
