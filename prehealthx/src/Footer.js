/*eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link} from 'react-router-dom'
import './Footer.css'

function Footer() {

    const handleScrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
  return (
    <div className='footer'>
        <div className='footer-cont'>
        <div className="container-f">
                <div className="column">
                    <h3>About PreHealthX</h3>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={"/about-us"}><span>About Us</span></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact-us"><span>Contact Us</span></Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/privacy">Privacy Policy</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/terms-and-conditions'>Terms and Condition</Link>   
                </div>
               
                
                <div className="column">
                    <h3>Help & Support</h3>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/help">Help Center</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/forgot">Forgot Password</Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/faq">Frequently Asked Questions</Link>  
                </div>
                <div className="column">
                    <h3>Connect With us</h3>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="https://www.facebook.com/profile.php?id=100006034278141">Facebook</Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="https://instagram.com/kakwenyajackson?igshid=YmMyMTA2M2Y=">Instagram</Link>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="https://twitter.com/thegreat_toao/status/1598109032329678848?s=46&t=_TgBlCpS0gmurNeoHATimA">Twitter</Link>
                </div>
            </div>
            <button className='back_to_top' onClick={handleScrollTop}></button>
        </div>
        
    </div>
  )
}

export default Footer
