import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../components/About'
import { Home } from '../components/Home'
export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
			</Routes>
		</BrowserRouter>
	)
}
