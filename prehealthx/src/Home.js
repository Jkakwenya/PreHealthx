/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
//import Slider from 'react-slick';
import './Home.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {Carousel} from 'react-responsive-carousel'

function Home() {
    


  return (
    <div className='home-main'>
        <div className="home-intro">
            
        <Carousel autoPlay={true} interval={5000}>
          <div className="intro-slide">
            <div className="slide-content">
              <h1>A brief introduction to PreHealthX</h1>
              <p>
                PreHealthX is a comprehensive web-based medicine information sheet that provides
                accurate and up-to-date medical information to patients, healthcare professionals,
                and caregivers. Our platform is user-friendly, secure, and easy to navigate,
                ensuring the safety and well-being of our users.
              </p>
            </div>
          </div>
          <div className="intro-slide">
            <div className="slide-content">
              <h1>Key Features</h1>
              <ul>
                <li>Comprehensive medication information</li>
                <li>User-friendly interface</li>
                <li>Secure and confidential</li>
                <li>Available to patients, healthcare professionals, and caregivers</li>
              </ul>
            </div>
          </div>
          <div className="intro-slide">
            <div className="slide-content">
              <h1>Benefits</h1>
              <ul>
                <li>Improved patient safety and well-being</li>
                <li>Increased access to accurate medical information</li>
                <li>Streamlined communication between patients and healthcare professionals</li>
                <li>Enhanced collaboration between patients, healthcare professionals, and caregivers</li>
              </ul>
            </div>
          </div>
        </Carousel>
        
      </div>

        <div className='home-feat'>
            <h1>Featured Medication</h1>
            
                <h2>How</h2>

            
        </div>

        <div className='home-test'>
            <h1>Testimonials</h1>
        </div>
      
    </div>
  )
}

export default Home
