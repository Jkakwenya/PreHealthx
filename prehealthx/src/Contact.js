/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './Contact.css'

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    // Send formData to your email using an API or email service
    console.log(formData);
  };
  return (
    <div class="contact-container">
  <h1 class="contact-title">Contact Us</h1>
  <form onSubmit={handleSubmit} class="contact-form">
    <label for="name">Name</label>
    <input type="text" id="name" name="name"  onChange={(e) => setName(e.target.value)}  required/>
    <label for="email">Email</label>
    <input type="email" id="email" name="email"  onChange={(e) => setEmail(e.target.value)} required/>
    <label for="message">Message</label>
    <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)}  required></textarea>
    <button type="submit">Submit</button>
    </form>
  <div class="contact-info">
    <h2>Get in touch</h2>
    <p>Email: info@prehealthx.com</p>
    <p>Phone: +1-111-999-9999</p>
    <p>Address: Main St, Charlotte, USA</p>
  </div>
    </div>
  )
}

export default Contact
