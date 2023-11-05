import React from 'react'
import WebDesignCard from '../components/cards/WebDesignCard'
import GraphicDesignCard from '../components/cards/GraphicDesignCard'

function AppDesign() {
  return (
    <section className='web-desgin-page inner-page'>
      <header className='inner-page-header'> 
        <h1 className='inner-page-header-title'>app desing</h1>
        <p className='inner-page-header-text'>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
     </header>

     <section className='inner-page-body'>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\app-design\desktop\image-airfilter.jpg" alt="AIRFILTER" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>AIRFILTER</h2>
        <p className='inner-page-card-text'>Solving the problem of poor indoor air quality by filtering the air</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\app-design\desktop\image-eyecam.jpg" alt="EYECAM" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>EYECAM</h2>
        <p className='inner-page-card-text'>Product that lets you edit your favorite photos and videos at any time</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\app-design\desktop\image-faceit.jpg" alt="FACEIT" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>FACEIT</h2>
        <p className='inner-page-card-text'>Get to meet your favorite internet superstar with the faceit app</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\app-design\desktop\image-todo.jpg" alt="TODO" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>TODO</h2>
        <p className='inner-page-card-text'>A todo app that features cloud sync with light and dark mode</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\app-design\desktop\image-loopstudios.jpg" alt="LOOPSTUDIOS" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>LOOPSTUDIOS</h2>
        <p className='inner-page-card-text'>A VR experience app made for Loopstudios</p>
        </div>
      </div>
      
     </section>

     <section className="design-cards-container inner-page-design-cards-container">
          
          <WebDesignCard></WebDesignCard>
          <GraphicDesignCard></GraphicDesignCard>
      </section>
    </section>
  )
}

export default AppDesign



