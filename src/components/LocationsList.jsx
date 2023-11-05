import React from 'react'
import { Link } from 'react-router-dom'

function LocationsList() {
  return (
    <ul className='location-list'>
      <li className="location-item">
      <img className='location-item-circle' src="public\assets\home\desktop\bg-pattern-hero-home.svg" alt="" />
        <img className='location-item-img' src="public\assets\shared\desktop\illustration-canada.svg" alt="Canada" />
        <h3 className="location-list-title">canada</h3>
        <Link className='link' to="/locations"><button className='scn-btn btn'>see location</button></Link>
      </li>
      <li className="location-item">
              <img className='location-item-circle' src="public\assets\home\desktop\bg-pattern-hero-home.svg" alt="" />

        <img className='location-item-img' src="public\assets\shared\desktop\illustration-australia.svg" alt="Australia" />
        <h3 className="location-list-title">australia</h3>
        <Link className='link' to="/locations"><button className='scn-btn btn'>see location</button></Link>
      </li>
      <li className="location-item">
      <img className='location-item-circle' src="public\assets\home\desktop\bg-pattern-hero-home.svg" alt="" />

        <img className='location-item-img' src="public\assets\shared\desktop\illustration-united-kingdom.svg" alt="United Kingdom" />
        <h3 className="location-list-title">UNITED KINGDOM</h3>
        <Link className='link' to='/locations'>
          <button className='scn-btn btn'>see location</button>
        </Link>
      </li>
    </ul>
  )
}

export default LocationsList