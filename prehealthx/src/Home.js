/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link} from 'react-router-dom' 
import './Home.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {Carousel} from 'react-responsive-carousel'

function Home() {
    


  return (
    <div className='home-main'>
      <Link to='/communications'><div><h1>Connect with Health Professional</h1></div></Link>
      
        <div className="home-intro">   
        <Carousel autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false}>
          <div className="intro-slide">
            <div className="slide-content">
              <h1>A brief introduction to PreHealthX</h1>
              <div className='slide-content-inside'>
              <img src='PreHealthx-logos.png' alt=''/>
                <p>
                PreHealthX is a comprehensive web-based medicine information sheet that provides
                accurate and up-to-date medical information to patients, healthcare professionals,
                and caregivers. Our platform is user-friendly, secure, and easy to navigate,
                ensuring the safety and well-being of our users.
              </p>
              </div>
              
            </div>
          </div>
          <div className="intro-slide">
            <div className="slide-content">
              <h1>Key Features</h1>
              <div className='slide-content-inside'>
              <img src='PreHealthx-logos.png' alt=''/>
              <ul>
                <li>Comprehensive medication information</li>
                <li>User-friendly interface</li>
                <li>Secure and confidential</li>
                <li>Available to patients, healthcare professionals, and caregivers</li>
              </ul>
              </div>
              
            </div>
          </div>
          <div className="intro-slide">
            <div className="slide-content">
              <h1>Benefits</h1>
              <div className='slide-content-inside'>
              <img src='benefits.jpg' alt=''/>
              <ul>
                <li>Improved patient safety and well-being</li>
                <li>Increased access to accurate medical information</li>
                <li>Streamlined communication between patients and healthcare professionals</li>
                <li>Enhanced collaboration between patients, healthcare professionals, and caregivers</li>
              </ul>
              </div>
              
            </div>
          </div>
        </Carousel>
        
      </div>

        <div className='home-feat'>
            <h1>Featured Medication</h1>
        <div className='med-container'>
          <div className='med-card'>
            <img src='med1.png' alt='Medication 1' />
            <h3>AndroGel</h3>
            <p>Description: AndroGel is used in the treatment of hypogonadism, 
                male and belongs to the drug class androgens and anabolic steroids. </p>
          </div>
          <div className='med-card'>
            <img src='med2.jpg' alt='Medication 2' />
            <h3>Fluocinonide</h3>
            <p>Description: Fluocinonide is a potent corticosteroid that prevents the release 
                of substances in the body that cause inflammation.</p>
          </div>

          <div className='med-card'>
            <img src='med3.jpg' alt='Medication 3' />
            <h3>Tazarotene</h3>
            <p>Description: Tazarotene is a compound similar to vitamin A. It helps the skin 
            to renew itself more quickly and may improve the appearance and texture of skin.</p>
          </div>
        </div>     
        </div>
        <Link to='/medical-news'><div>Medical News</div></Link>
        

        <div className='home-test'>
            <h1>Testimonials</h1>
    <div className='testimonial-container'>
    <div className='testimonial'>
      <img src='testimonial1.jpg' alt='Testimonial 1' />
      <p>"PreHealthX has been a lifesaver for me and my family. The information provided is accurate, up-to-date, and easy to understand. Thank you for creating such a valuable resource."</p>
      <h3>John Doe</h3>
    </div>
    <div className='testimonial'>
      <img src='testimonial2.jpg' alt='Testimonial 2' />
      <p>"As a healthcare professional, I rely on PreHealthX for accurate medication information and dosages. The platform is user-friendly and has saved me a lot of time and frustration."</p>
      <h3>Jane Smith</h3>
    </div>
    <div className='testimonial'>
      <img src='testimonial3.jpg' alt='Testimonial 3' />
      <p>"I was looking for reliable medical information online and stumbled upon PreHealthX. I was impressed by the breadth of information available and how easy it was to navigate the site. Highly recommended."</p>
      <h3>Mark Johnson</h3>
    </div>
  </div>
        </div>
      
    </div>
  )
}

export default Home
