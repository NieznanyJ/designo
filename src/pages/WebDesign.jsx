import React from 'react'
import AppDesignCard from '../components/cards/AppDesignCard'
import GraphicDesignCard from '../components/cards/GraphicDesignCard'

function WebDesign() {
  return (
    <section className='web-desgin-page inner-page'>
      <header className='inner-page-header'> 
        <h1 className='inner-page-header-title'>web desing</h1>
        <p className='inner-page-header-text'>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
     </header>

     <section className='inner-page-body'>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\web-design\desktop\image-express.jpg" alt="EXPRESS" />
       <div className="inner-page-card-text-container">
       <h2 className='inner-page-card-title'>EXPRESS</h2>
        <p className='inner-page-card-text'>A multi-carrier shipping website for ecommerce businesses</p>
       </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\web-design\desktop\image-transfer.jpg" alt="TRANSFER" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>TRANSFER</h2>
        <p className='inner-page-card-text'>Site for low-cost money transfers and sending money within seconds</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\web-design\desktop\image-photon.jpg" alt="PHOTON" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>PHOTON</h2>
        <p className='inner-page-card-text'>A state-of-the-art music player with high-resolution audio and DSP effects</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\web-design\desktop\image-builder.jpg" alt="BUILDER" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>BUILDER</h2>
        <p className='inner-page-card-text'>Connects users with local contractors based on their location</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\web-design\desktop\image-blogr.jpg" alt="BLOGR" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>BLOGR</h2>
        <p className='inner-page-card-text'>Blogr is a platform for creating an online blog or publication</p>
        </div>
      </div>
      <div className="inner-page-card">
        <img className='inner-page-card-img' src="public\assets\web-design\desktop\image-camp.jpg" alt="CAMP" />
        <div className="inner-page-card-text-container">
          <h2 className='inner-page-card-title'>CAMP</h2>
        <p className='inner-page-card-text'>Get expert training in coding, data, design, and digital marketing</p>
        </div>
      </div>
     </section>

     <section className="design-cards-container inner-page-design-cards-container">
          
          <AppDesignCard></AppDesignCard>
          <GraphicDesignCard></GraphicDesignCard>
      </section>
    </section>
  )
}

export default WebDesign