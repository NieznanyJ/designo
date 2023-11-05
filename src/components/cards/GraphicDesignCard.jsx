import React from 'react'
import { Link } from 'react-router-dom'

function GraphicDesignCard() {
  return (
    <Link to="/graphic-design" className='link'>
      <div className="design-card graphic-dsign-card">
      <h2 className='card-title'>graphic design</h2>
      <p className='card-projects'>view projects <img className='icon-arrow' src="public\assets\shared\desktop\icon-right-arrow.svg" alt="arrow" /></p>
    </div>
    </Link>
  )
}

export default GraphicDesignCard