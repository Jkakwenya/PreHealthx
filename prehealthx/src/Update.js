/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './Update.css'
import { collection, doc, onSnapshot, updateDoc, getDocs } from 'firebase/firestore';
import { auth, db } from './firebase';
import {  useNavigate } from 'react-router-dom'

function Update() {
    const user = auth.currentUser;
    const userDocRef = collection(db, `users/${user?.uid}/info`);
  const [userData, setUserData] = useState(
    onSnapshot(userDocRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUserData(doc.data());        
        });
      })
  );


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const data = {
    name: firstName || userData?.firstName,
    surname: lastName || userData?.lastName,
    address: address || userData?.address,
    phone: phone || userData?.phone,    
  }

  const handleSave = async () => {
    try {
        const snapshot = await getDocs(userDocRef);
            snapshot.docs.forEach((doc) => {
            updateDoc(doc.ref, data);
            });
        console.log("User data updated successfully");
        navigate('/profile');
      } catch (error) {
        console.error("Error updating user data", error);
      }
  };

  return (
    <div className="up-profile-container">
    <h3>My Profile</h3>
    
    <div className="up-profile-info">
      <div className="up-profile-details">
        <p>FirstName: {' '}</p>
        <input type="text"  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <p>LastName: {' '}</p>
        <input type="text"  value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <p>Address: {''}</p>
        <input type="text"  value={address} onChange={(e) => setAddress(e.target.value)} />
        <p>Phone Number: {''}</p>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
    </div>
    <div className="up-profile-stats">  
      <div><button className='up-prof-btn' onClick={handleSave}>Save</button></div>
    </div>

  </div>
  )
}

export default Update
