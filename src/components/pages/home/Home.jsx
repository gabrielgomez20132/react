import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <p>home</p>
            <Link to="/Characters">Ver Personajes</Link>
        </div>
    )
}

export default Home