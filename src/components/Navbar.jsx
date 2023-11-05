import React from 'react'
import MobileMenu from './MobileMenu';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


export const NavbarContext = React.createContext();

function Navbar() {


    const screenWidth = window.innerWidth;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    

    const handleMobileMenu = () =>{

        const mobileMenu = document.querySelector(".mobile-menu");
        const lightbox = document.querySelector(".lightbox");

        mobileMenu.classList.toggle('menu-hidden');
        lightbox.classList.toggle("hidden");

        setMobileMenuOpen(prev => {return !prev});


    }

    const closeMobileMenu = () =>{

        const mobileMenu = document.querySelector(".mobile-menu");
        const lightbox = document.querySelector(".lightbox");

        if (!mobileMenu.classList.contains("manu-hidden"))
        {
            mobileMenu.classList.add('menu-hidden');
        }
        if(!lightbox.classList.contains("hidden"))
        {
            lightbox.classList.add("hidden");
        }

        setMobileMenuOpen(prev => {return false});


    }

    return (
        <NavbarContext.Provider value={[mobileMenuOpen, setMobileMenuOpen]}>

        <nav className="navigation">
            <div className="navbar">
                <Link to="/home" className='link'><img src="/assets/shared/desktop/logo-dark.png"  alt="Designo" className="logo" onClick={closeMobileMenu}/></Link>
                {(screenWidth < 768) && (!mobileMenuOpen) && 
                
                <img src="/assets/shared/mobile/icon-hamburger.svg" alt="Menu" className='menu-btn' onClick={handleMobileMenu} />
                
                }
                {(screenWidth < 768) && (mobileMenuOpen) && 
                
                <img src="/assets/shared/mobile/icon-close.svg" alt="Menu" className='menu-btn' onClick={handleMobileMenu} />
                
                }

                {screenWidth >= 768 && 
                    <ul className="menu-items navbar-menu">
                        <Link to="/about-us" className='link'><li className="menu-item" >our company</li></Link>
                        <Link to="/locations" className='link'><li className="menu-item" >locations</li></Link>
                        <Link to="/contact"  className="link"><li className="menu-item" >contact</li></Link>
                    </ul>
                }

            </div>
            {screenWidth < 768 && 
                <MobileMenu ></MobileMenu>}
            
        </nav>


        </NavbarContext.Provider>



    )
}

export default Navbar