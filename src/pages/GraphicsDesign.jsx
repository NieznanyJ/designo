import React from 'react'
import WebDesignCard from '../components/cards/WebDesignCard'
import AppDesignCard from '../components/cards/AppDesignCard'

function GraphicsDesign() {
  return (
    <section className='web-desgin-page inner-page'>
      <header className='inner-page-header'> 
        <h1 className='inner-page-header-title'>graphic desing</h1>
        <p className='inner-page-header-text'>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
     </header>

     <section className='inner-page-body'>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\graphic-design\desktop\image-change.jpg" alt="TIM BROWN" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>TIM BROWN</h2>
        <p className='inner-page-card-text'>A book cover designed for Tim Brown's new release, 'Change'</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\graphic-design\desktop\image-boxed-water.jpg" alt="BOXED WATER" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>BOXED WATER</h2>
        <p className='inner-page-card-text'>A simple packaging concept made for Boxed Water</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\graphic-design\desktop\image-science.jpg" alt="SCIENCE!" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>SCIENCE!</h2>
        <p className='inner-page-card-text'>A poster made in collaboration with the Federal Art Project</p>
        </div>
      </div>
      
      
     </section>

     <section className="design-cards-container inner-page-design-cards-container">
          
          <WebDesignCard></WebDesignCard>
          <AppDesignCard></AppDesignCard>
      </section>
    </section>
  )
}

export default GraphicsDesign