import React from 'react'
import { Link } from 'react-router-dom'

function WebDesignCard() {
  return (
    <Link to="/web-design" className='link'>
      <div className="design-card web-dsign-card">
        <h2 className='card-title'>web design</h2>
        <p className='card-projects'>view projects <img className='icon-arrow' src="public\assets\shared\desktop\icon-right-arrow.svg" alt="arrow" /></p>
      </div>
    </Link>
  )
}

export default WebDesignCard