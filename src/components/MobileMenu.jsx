import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from './Navbar';

function MobileMenu() {

  const [mobileMenuOpen, setMobileMenuOpen] = useContext(NavbarContext);

  const handleMobileMenu = () =>{

    const mobileMenu = document.querySelector(".mobile-menu");
    const lightbox = document.querySelector(".lightbox");

    mobileMenu.classList.toggle('menu-hidden');
    lightbox.classList.toggle("hidden");

    setMobileMenuOpen(prev => {return !prev});


}

  return (
    <>
    <ul className="menu-items mobile-menu menu-hidden">
        <Link to="/about-us" className='link'><li className="menu-item" onClick={handleMobileMenu}>our company</li></Link>
        <Link to="/locations" className='link'><li className="menu-item" onClick={handleMobileMenu}>locations</li></Link>
        <Link to="/contact"  className="link"><li className="menu-item" onClick={handleMobileMenu}>contact</li></Link>
    </ul>
    <div className="lightbox hidden" onClick={handleMobileMenu}></div>
    </>
  )
}

export default MobileMenu