import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';



function Footer({pathname}) {

    useEffect(()=>{
        const footer = document.querySelector(".footer");
        if (pathname === "/contact"){
          footer.style.paddingTop = "3rem";
        }
        else{
            footer.style.paddingTop = "250px";
        }
    },[pathname])

    return (
        <footer className="footer">

            

            <div className="footer-navigation">
            <img className='footer-logo' src="/assets/shared/desktop/logo-light.png" alt="logo" />
            <div className="line"></div>
            <ul className="menu-items footer-menu">
            <Link to="/about-us" className='link'><li className="menu-item" >our company</li></Link>
            <Link to="/locations" className='link'><li className="menu-item" >locations</li></Link>
            <Link to="/contact"  className="link"><li className="menu-item" >contact</li></Link>
            </ul>
            </div>

            <div className="contact-info-container">
                <div className="street-info">
                    <p className='contact-text'>Designo Central Office</p>
                    <p className='streen-name'>
                    3886 Wellington Street</p> 
                    <p className='city-name'>
                    Toronto, Ontario M9C 3/5
                    </p>
                    </div>
                <div className="phone-info">
                    <p className='contact-text'>Contact Us (Central Office)</p>
                    <p className='phone-nr'>P : +1 253-863-8967</p>
                    <p className='email'>M : contact@designo.co</p>
                </div>
            </div>

            <div className="social-container">
                <img src="/assets/shared/desktop/icon-facebook.svg" alt="facebook" className="social-icon" />
                <img src="/assets/shared/desktop/icon-youtube.svg" alt="youtube" className="social-icon" />
                <img src="/assets/shared/desktop/icon-twitter.svg" alt="twitter" className="social-icon" />
                <img src="/assets/shared/desktop/icon-pinterest.svg" alt="pinterest" className="social-icon" />
                <img src="/assets/shared/desktop/icon-instagram.svg" alt="instagram" className="social-icon" />
            </div>

        </footer>
    )
}

export default Footer