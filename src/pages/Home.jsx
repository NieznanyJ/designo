import React from 'react'
import Navbar from '../components/Navbar'
import WebDesignCard from '../components/cards/WebDesignCard'
import AppDesignCard from '../components/cards/AppDesignCard'
import GraphicDesignCadrd from '../components/cards/GraphicDesignCard'
import Qualities from '../components/Qualities'

function Home() {
  return (
    <div className="home">
      <section className="hero">
      <img className='hero-img-pattern' src="/assets/home/desktop/bg-pattern-hero-home.svg" alt="/" />
        <div className="hero-text-box">
          <h2 className="hero-award">Award-winning custom designs and digital branding solutions</h2>
          <div className="hero-para">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</div>
          <button className='btn'>learn more</button>
        </div>
        <img className='hero-img' src="/assets/home/desktop/image-hero-phone.png" alt="hero-phone" />
      </section>
      
      <section className="design-cards-container">
          <WebDesignCard></WebDesignCard>
          <AppDesignCard></AppDesignCard>
          <GraphicDesignCadrd></GraphicDesignCadrd>
      </section>

      <Qualities></Qualities>

    </div>
  )
}

export default Home