import React from 'react'
import LocationsList from '../components/LocationsList'

function ContactUs() {


  const handleForm = (e) =>{

    e.preventDefault();

    const inputs = document.querySelectorAll(".contact-form-input");
    const errorMsgs = document.querySelectorAll(".input-error");

    inputs.forEach(input => {
      if (!input.value)
      {
        errorMsgs.forEach(errorMsg => {
          if (errorMsg.htmlFor === input.id)
          {
            errorMsg.classList.remove('hidden')
          }
        });
      }

    });


  };

  const handleInput = (e) =>{

    const errorMsgs = document.querySelectorAll(".input-error");

     if (e.target.value)
    {
      errorMsgs.forEach(errorMsg => {
        if (errorMsg.htmlFor === e.target.id)
        {
          errorMsg.classList.add("hidden");
        }
      });
    } 
    
  };

  return (
    <section className='contact-page'>
      <header className='inner-page-header contact-us-page-header'>
        <h1 className='inner-page-header-title'>Contact Us</h1>
        <p className='inner-page-hedaer-text'>Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>

        <form onSubmit={handleForm} className='contact-us-page-form' action="/">
          <div className="input-container">
            <input id='name' className='contact-form-input' type="text" placeholder='Name'  onChange={handleInput}/>
            <label for="name" className='input-error hidden'>
              <p className='input-error-text'>can't be empty</p>
              <img className='input-error-icon' src="/assets/contact/desktop/icon-error.svg" alt="error" />
            </label>

          </div>
          <div className="input-container">
          <input id='email' className='contact-form-input' type="email" placeholder='Email Adress'  onChange={handleInput}/>
            <label for="email" className='input-error hidden'>
              <p className='input-error-text'>can't be empty</p>
              <img className='input-error-icon' src="/assets/contact/desktop/icon-error.svg" alt="error" />
            </label>
          </div>
          <div className="input-container">
            <input  id='phone' className='contact-form-input' type="phone" placeholder='Phone' pattern='[0-9]*'onChange={handleInput}/>
            <label for="phone"  className='input-error hidden'>
              <p className='input-error-text'>can't be empty</p>
              <img className='input-error-icon' src="/assets/contact/desktop/icon-error.svg" alt="error" />
            </label>
          </div>
          <div className="input-container">
            <textarea id='message' name="message" className='contact-form-input' cols="30" rows="10" placeholder='Your message' onChange={handleInput}></textarea>
            <label for="message" className='input-error hidden'>
              <p className='input-error-text'>can't be empty</p>
              <img className='input-error-icon' src="/assets/contact/desktop/icon-error.svg" alt="error" />
            </label>
          </div>
          <button type='submit' className='btn form-btn'>Submit</button>
        </form>
      </header>

      <LocationsList></LocationsList>
    </section>
  )
}

export default ContactUs