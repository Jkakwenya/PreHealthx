/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from './firebase';

function Profile() {
  const [userData, setUserData] = useState([]);
  const [userInfoData, setUserInfoData] = useState([]);
  const [displayName, setDisplayName] = useState('');

  const user = auth.currentUser;

  useEffect(() => {
    
      const userDocRef = collection(db, `users/${user?.uid}/medication`);
      const userRef = collection(db, `users/${user?.uid}/info`);

      onSnapshot(userRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUserInfoData(doc.data());
          setDisplayName(doc.data().firstName + ' ' + doc.data().lastName)
        })
      })


      onSnapshot(userDocRef, (snapshot) => {
        const updatedUserData = snapshot.docs.map((doc) => {
          const medicationData = doc.data();
          return {
            ...medicationData,
            medicationID: doc.id // assign medicationID using doc.id
          }
        });
        setUserData(updatedUserData);
      });
     
  }, []);

  return (
    <div className='profile-cont'>
      <h1>My Profile</h1>
      <h2>Personal Information</h2>
      <p>Name: {displayName}</p>
      <p>Email: {userInfoData.email}</p>
      <p>Phone Number: {userInfoData.phone}</p>
      <p>Address: {userInfoData.address}</p>
      <div><Link to={'/update'}><button className='prof-btn'>Update Personal Information</button></Link></div>
      <h2>Medical History</h2>
      <p>Height: {/*userInfo.height*/} inches</p>
      <p>Weight: {/*userInfo.weight*/} pounds</p>
      <p>Blood Type: {/*userInfo.bloodType*/}</p>
      <Link to='/medical-planner' > <h2>Medications</h2></Link>
      
          {userData.length > 0 && (
            <div >
              <p>Name: {userData[0].medName}</p>
              <p>Dosage: {userData[0].dosage}</p>
              <p>Frequency: {userData[0].freq}</p>
            </div>
          )}
          
      <h2>Appointments</h2>
      
      {/*userInfo.appointments.map((appointment) => (
        <div key={appointment.id}>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <p>Location: {appointment.location}</p>
        </div>
      ))*/}
      <Link to='/medical-records'><h2>Medical Records</h2></Link>
      
      {/*userInfo.medicalRecords.map((record) => (
        <div key={record.id}>
          <p>Name: {record.name}</p>
          <p>Date: {record.date}</p>
          <p>Type: {record.type}</p>
        </div>
      ))*/}
      <h2>Billing Information</h2>
      <p>Payment Method: {/*userInfo.paymentMethod*/}</p>
      <p>Payment History: {/*userInfo.paymentHistory.join(', ')*/}</p>
    </div>
  )
}

export default Profile
