import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
	const navigate = useNavigate()
	return <div onClick={() => navigate('/')}>About</div>
}
