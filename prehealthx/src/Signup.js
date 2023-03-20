/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { auth, db } from './firebase';

function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDOB] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        country: country,
        dob: dob,
        city: city,
        email: email
      }

      const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
      };
    
      const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleDOBChange = (event) => {
        setDOB(event.target.value);
      };
    
      const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    createUserWithEmailAndPassword( auth, email, password)
  .then((auth) => {
    if (auth){
      const user = auth.user;
      const userRef = collection(db, `users/${user?.uid}/info`);
      addDoc(userRef, newUser)
        .then(() => {
          console.log("Data written to database");
        })
        .catch((error) => {
          console.error("Error writing data to database: ", error);
        });
      navigate('/')
    }
  }).catch(error => alert(error.message));}

  const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
  ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
  ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
  ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
  ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
  ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
  ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
  ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
  ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
  ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
  ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
  ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
  ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
  ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
  ,"Yemen","Zambia","Zimbabwe"];


  return (
    <div className='signup'>
      <div className="signup-form-container">
       <h1>Sign Up</h1>
      <form >
        <h5>First Name</h5>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
          <h5>Last Name</h5>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
          <h5>Country</h5>
        <select className='country-selector' value={country} onChange={handleCountryChange}>
          <option>Select Your Country</option>
        {countries.sort().map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
        </select>
          <h5>City</h5>
          <input type='text' value={city} onChange={handleCityChange} />
          <h5>Date of Birth</h5>
          <input type="date" value={dob} onChange={handleDOBChange} />
          <h5>Email</h5>
          <input type="email" value={email} onChange={handleEmailChange} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={handlePasswordChange} />
        <button className='signup_button' onClick={handleSubmit} >Sign up</button>
      </form>
      <p>
        By Signing-in you agree to our terms of Condition. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
      </p>
    </div>

    </div>
  )
}

export default Signup
