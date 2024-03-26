import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
	const navigate = useNavigate()
	return <div onClick={() => navigate('/about')}>Home</div>
}
