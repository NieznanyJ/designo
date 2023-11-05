import React from 'react'
import LocationsList from '../components/LocationsList'

function AboutUs() {

  const screenWidth = window.innerWidth;

  return (
    <section className='about-us inner-page'>
      {screenWidth < 768 && <img className='about-hero-img' src="public\assets\about\mobile\image-about-hero.jpg" alt="about-hero" />}
      
      <header className='inner-page-header about-us-page-header  '>
      {screenWidth >= 768 && screenWidth < 1440 && <img className='about-hero-img ' src="public\assets\about\tablet\image-about-hero.jpg" alt="about-hero" />}
        <h1 className='inner-page-header-title'>About us</h1>
        <p className='inner-page-header-text'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
      </header>



      <div className="about-us-sub-section-container">
        {screenWidth < 768 && <img className='about-hero-img' src="public\assets\about\mobile\image-world-class-talent.jpg" alt="about-hero" />}
        {screenWidth >= 768 && screenWidth < 1440 && <img className='about-hero-img' src="public\assets\about\tablet\image-world-class-talent.jpg" alt="about-hero" />}
        <div className="about-us-talent-container">
          <h2 className='about-us-talent-title'>World-class talent</h2>
          <p className="about-us-talent-text">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
          <p className="about-us-talent-text">Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.</p>
        </div>
      </div>

      <LocationsList></LocationsList>

      <div className="about-us-sub-section-container">
        {screenWidth < 768 && <img className='about-hero-img' src="public\assets\about\mobile\image-real-deal.jpg" alt="image-real-deal" />}
        {screenWidth >= 768 && screenWidth < 1440 && <img className='about-hero-img' src="public\assets\about\tablet\image-real-deal.jpg" alt="image-real-deal" />}
        <div className="about-us-talent-container">
          <h2 className='about-us-talent-title'>The real deal</h2>
          <p className="about-us-talent-text">As strategic partners in our clients' businesses, we are ready to take on any challenge as our own.
Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
          <p className="about-us-talent-text">We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </div>
      </div>


    </section>
  )
}

export default AboutUs