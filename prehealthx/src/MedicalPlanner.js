/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {db, auth } from './firebase'
import './MedicalPlanner.css'
import { collection, addDoc, onSnapshot, updateDoc, getDocs, deleteDoc, increment, doc, setDoc } from 'firebase/firestore';

function MedicalPlanner() {
    const user = auth.currentUser;
  
  const userRef = collection(db, `users/${user?.uid}/info`);
  const [medName, setMedName] = useState('');
  const [dosage, setDosage] = useState('');
  const [freq, setFreq] = useState('');
  const [notes, setNotes] = useState('');
  const [medicationSchedule, setMedicationSchedule] = useState([]);
  const [points, setPoints] = useState(0);

  const medication = {
    medName: medName,
    dosage: dosage,
    freq: freq,
    notes: notes,
    time: new Date().toLocaleString(),
  };

  const handleMedNameChange = (event) => {
    setMedName(event.target.value);
  };

  const handleDosageChange = (event) => {
    setDosage(event.target.value);
  };

  const handleFreqChange = (event) => {
    setFreq(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = async (event) => {
    const userDocRef = collection(db, `users/${user?.uid}/medication`);
    event.preventDefault();
    const newDocRef = await addDoc(userDocRef, { // add medication to collection
        ...medication,
        id: '' // add empty string property for ID
      });
    
      const newDocId = newDocRef.id; // get ID of added document
      const updatedMedication = { ...medication, id: newDocId }; // update medication object with ID
    
      setDoc(doc(userDocRef, newDocId), updatedMedication) // update document with updated medication object
        .then(() => {
          console.log("Medication added to database");
            setMedName('');
            setDosage('');
            setFreq('');
            setNotes('');
        })
        .catch((error) => {
          console.error("Error adding medication data to database: ", error);
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

    const userDocRef = collection(db, `users/${user?.uid}/medication`);
  onSnapshot(userDocRef, (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setMedicationSchedule(data);
  });

    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this medication?")) {
            console.log('ID', id)
          const userDocRef = collection(db, `users/${user?.uid}/medication`);
          if (typeof id === "string") {
            await deleteDoc(doc(userDocRef, id));
          } else {
            console.error("Invalid argument type for id: expected string, got", typeof id);
          }
        }
      };
  return (
    <div className='med-plan-main'>
      <h2>Medication Planner</h2>
      <div className='med-plan-points'>Points: {points}</div>
      <form className='med-plan-form'>
        <label>Medication Name:</label>
        <input type="text" value={medName} onChange={handleMedNameChange} required />
        <br />
        <label>Dosage:</label>
        <input type="text" value={dosage} onChange={handleDosageChange} required />
        <br />
        <label>Frequency:</label>
        <input type="text" value={freq} onChange={handleFreqChange} required />
        <br />
        <label >Notes:</label>
        <input type="text" value={notes} onChange={handleNotesChange} />
        <br />
        <label>Created At:</label>
        <br />
        <button className='med-plan-add-btn' onClick={handleSubmit}>Add Medication</button>
      </form>
      {medicationSchedule.length > 0 ? (
        <table className='med-plan-schedule'>
            <caption>Medication Schedule</caption>
          <thead>
      <tr>
        <th>Medication Name</th>
        <th>Dosage</th>
        <th>Frequency</th>
        <th>Created At</th>
        <th>Next Reminder</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {medicationSchedule.map(medication => {
        // Calculate next reminder time based on frequency
        const freq = parseInt(medication.freq);
        const nextReminder = new Date();
        nextReminder.setMinutes(Math.floor(nextReminder.getMinutes() / freq) * freq + freq);
        
        return (
          <tr key={medication.id}>
            <td>{medication.medName}</td>
            <td>{medication.dosage}</td>
            <td>{medication.freq}</td>
            <td>{medication.time}</td>
            <td>{nextReminder.toLocaleString()}</td>
            <td>
              <button className='med-plan-delete-btn' onClick={() => handleDelete(medication.id)}>Delete</button>
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

export default MedicalPlanner;