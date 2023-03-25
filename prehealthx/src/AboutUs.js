import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    /*<div>
      <h1>About PreHealthX</h1>
      <p>PreHealthX is a web-based medication information platform that aims to provide comprehensive, user-friendly, and secure access to essential medical information. Our platform provides patients with accurate and up-to-date information about their prescribed medications, including dosages, potential side effects, and drug interactions.</p>
      <p>The platform is designed to address the issue of inadequate and often unreliable information available to patients, particularly in the online space. By offering a reliable and user-friendly platform, we aim to improve medication adherence, reduce adverse drug reactions, and ultimately improve health outcomes.</p>
      <p>PreHealthX's revenue model will be based on a subscription-based system that offers different tiers of access to our platform's features. Our target customers are individuals and families, as well as healthcare providers, including hospitals and clinics.</p>
      <p>We will differentiate ourselves in the market by offering unique features such as real-time medication tracking, personalized medication schedules, and a mobile app for easy access. We will also prioritize user privacy and security by implementing strict data protection measures.</p>
      <h2>Market Analysis</h2>
      <p>The global healthcare industry is experiencing significant growth, with the global healthcare market projected to reach $11.9 trillion by 2025. Additionally, the increasing use of technology in healthcare is opening up new opportunities for innovative solutions that can improve patient outcomes.</p>
      <p>There is a significant need for a reliable and user-friendly medication information platform, with the rise of online self-diagnosis and medication purchases. However, the current solutions available in the market are often inadequate, unreliable, or difficult to use.</p>
      <p>PreHealthX aims to address this gap in the market by providing an all-in-one solution that offers accurate and comprehensive medication information in a user-friendly and secure platform.</p>
    </div>*/
    
    <div className="about-container">
  <h1 className="about-heading">About Us</h1>
  <p className="about-text">PreHealthX is a web-based medication information platform that aims to provide comprehensive, user-friendly, and secure access to essential medical information. Our platform provides patients with accurate and up-to-date information about their prescribed medications, including dosages, potential side effects, and drug interactions.</p>
  <div className="about-section">
    <h2 className="about-subheading">Mission</h2>
    <p className="about-text">Our mission is to improve medication adherence, reduce adverse drug reactions, and ultimately improve health outcomes by providing a reliable and user-friendly medication information platform.</p>
  </div>
  <div className="about-section">
    <h2 className="about-subheading">Revenue Model</h2>
    <p className="about-text">Our revenue model is based on a subscription-based system that offers different tiers of access to our platform's features. Our target customers are individuals and families, as well as healthcare providers, including hospitals and clinics.</p>
  </div>
  <div className="about-section">
    <h2 className="about-subheading">Market Analysis</h2>
    <p className="about-text">The global healthcare industry is experiencing significant growth, with the global healthcare market projected to reach $11.9 trillion by 2025. Additionally, the increasing use of technology in healthcare is opening up new opportunities for innovative solutions that can improve patient outcomes.</p>
  </div>
  <div className="about-section">
    <h2 className="about-subheading">Differentiation</h2>
    <ul className="about-list">
      <li>We offer real-time medication tracking</li>
      <li>We provide personalized medication schedules</li>
      <li>We have a mobile app for easy access</li>
      <li>We prioritize user privacy and security</li>
    </ul>
  </div>
  <div className="vision">
        <h2>Our Vision</h2>
        <p>At PreHealthX, we envision a world where patients have easy access to accurate and comprehensive medication information, leading to better health outcomes.</p>
      </div>
      <div className="founder">
        <div className="founder-img">
          <img src='jack.jpeg' alt="Founder" />
        </div>
        <div className="founder-info">
          <h2>Meet the Founder</h2>
          <p>Jackson Kakwenya is the founder of PreHealthX. Jackson has seen firsthand the challenges patients face in accessing reliable medication information. He started PreHealthX with the vision of creating a platform that could make a real difference in patients' lives.</p>
        </div>
      </div>
</div>
  )
}

export default AboutUs
