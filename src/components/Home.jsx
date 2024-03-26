import React from 'react'

export const Home = () => {
	const navigate = useNavigate()
	return <div onClick={() => navigate('/about')}>Home</div>
}
