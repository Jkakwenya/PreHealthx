/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {db, auth } from './firebase'
import './MedicalRecords.css'
import { collection, addDoc, onSnapshot, updateDoc, getDocs, deleteDoc, increment, doc, setDoc } from 'firebase/firestore';


function MedicalRecords() {
    const user = auth.currentUser;
  
  const userRef = collection(db, `users/${user?.uid}/info`);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [points, setPoints] = useState(0);

  const records = {
    name: name,
    type: type,
    date: new Date().toLocaleString(),
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (event) => {
    const userDocRef = collection(db, `users/${user?.uid}/medical-records`);
    event.preventDefault();
    const newDocRef = await addDoc(userDocRef, { // add medical records to collection
        ...records,
        id: '' // add empty string property for ID
      });
    
      const newDocId = newDocRef.id; // get ID of added document
      const updatedRecords = { ...records, id: newDocId }; 
    
      setDoc(doc(userDocRef, newDocId), updatedRecords) 
        .then(() => {
          console.log("Medical Record added to database");
            setName('');
            setType('');
        })
        .catch((error) => {
          console.error("Error adding medical Record data to database: ", error);
        });
  
    const snapshot = await getDocs(userRef);
    snapshot.docs.forEach((doc) => {
      updateDoc(doc.ref, {points: increment(10)})
        .catch((error) => {
          console.error("Error updating points: ", error);
        });
    });
  }

useEffect(() => {
    onSnapshot(userRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            setPoints(doc.data().points);
        })})

    const userDocRef = collection(db, `users/${user?.uid}/medical-records`);
  onSnapshot(userDocRef, (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setMedicalRecords(data);
  });

    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this medical Record?")) {
            console.log('ID', id)
          const userDocRef = collection(db, `users/${user?.uid}/medical-records`);
          if (typeof id === "string") {
            await deleteDoc(doc(userDocRef, id));
          } else {
            console.error("Invalid argument type for id: expected string, got", typeof id);
          }
        }
      };
  return (
    <div className='med-rec-main'>
      <h2>Medical Records</h2>
      <div className='med-rec-points'>Points: {points}</div>
      <form className='med-rec-form'>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required />
        <br />
        <label>Type:</label>
        <input type="text" value={type} onChange={handleTypeChange} required />
        <br />
        <button className='med-rec-add-btn' onClick={handleSubmit}>Add Medical Record</button>
      </form>
      {medicalRecords.length > 0 ? (
        <table className='med-plan-schedule'>
            <caption>Medical Records</caption>
          <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {medicalRecords.map(record => {
        return (
          <tr key={record.id}>
            <td>{record.name}</td>
            <td>{record.type}</td>
            <td>{record.date}</td>
            <td>
              <button className='med-rec-delete-btn' onClick={() => handleDelete(record.id)}>Delete</button>
            </td>
          </tr>
        )
      })}
    </tbody>
        </table>
      ) : ( <p>No medications scheduled</p>
            )}
            </div>
            );
  
}

export default MedicalRecords
