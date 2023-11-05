import React from 'react'
import { Link } from 'react-router-dom'

function AppDesignCard() {
  return (
    <Link to="/app-design" className='link'>
      <div className="design-card app-dsign-card">
      <h2 className='card-title'>app design</h2>
      <p className='card-projects'>view projects <img className='icon-arrow' src="public\assets\shared\desktop\icon-right-arrow.svg" alt="arrow" /></p>
    </div>
    </Link>
  )
}

export default AppDesignCard