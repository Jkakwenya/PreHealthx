import React from 'react'

function Profile() {
  return (
    <div>
      <h1>My Profile</h1>
      <h2>Personal Information</h2>
      <p>Name: {/*userInfo.name*/}</p>
      <p>Email: {/*userInfo.email*/}</p>
      <p>Phone Number: {/*userInfo.phone*/}</p>
      <p>Address: {/*userInfo.address*/}</p>
      <h2>Medical History</h2>
      <p>Height: {/*userInfo.height*/} inches</p>
      <p>Weight: {/*userInfo.weight*/} pounds</p>
      <p>Blood Type: {/*userInfo.bloodType*/}</p>
      <h2>Medications</h2>
      {/*userInfo.medications.map((medication) => (
        <div key={medication.id}>
          <p>Name: {medication.name}</p>
          <p>Dosage: {medication.dosage}</p>
          <p>Frequency: {medication.frequency}</p>
        </div>
      ))*/}
      <h2>Appointments</h2>
      {/*userInfo.appointments.map((appointment) => (
        <div key={appointment.id}>
          <p>Date: {appointment.date}</p>
          <p>Time: {appointment.time}</p>
          <p>Location: {appointment.location}</p>
        </div>
      ))*/}
      <h2>Medical Records</h2>
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
