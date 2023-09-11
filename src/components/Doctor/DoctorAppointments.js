import React, { useState, useEffect } from 'react';
import './DoctorAppointments.scss'; // Import the SCSS file for dashboard styles

function DoctorAppointments() {
  // Sample data for appointments
  const [appointments, setAppointments] = useState([
    {
      _id: '1',
      date: '2023-09-15',
      slots: [
        {
          _id: '1',
          slotTime: '09:00 AM - 10:00 AM',
          appointments: [
            { _id: '1', name: 'Patient 1', email: 'patient1@example.com' },
            { _id: '2', name: 'Patient 2', email: 'patient2@example.com' },
          ],
        },
        {
          _id: '2',
          slotTime: '10:00 AM - 11:00 AM',
          appointments: [
            { _id: '3', name: 'Patient 3', email: 'patient3@example.com' },
            { _id: '4', name: 'Patient 4', email: 'patient4@example.com' },
          ],
        },
      ],
    },
    {
      _id: '2',
      date: '2023-09-16',
      slots: [
        {
          _id: '3',
          slotTime: '09:30 AM - 10:30 AM',
          appointments: [
            { _id: '5', name: 'Patient 5', email: 'patient5@example.com' },
          ],
        },
        {
          _id: '4',
          slotTime: '10:30 AM - 11:30 AM',
          appointments: [
            { _id: '6', name: 'Patient 6', email: 'patient6@example.com' },
          ],
        },
      ],
    },
  ]);
;

  // State for selected date and slot
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  // Function to handle date filter change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Function to handle slot filter change
  const handleSlotChange = (e) => {
    setSelectedSlot(e.target.value);
  };

//   useEffect(() => {
//     // You can fetch appointments based on selectedDate and selectedSlot here.
//     // Filter the appointments array accordingly.
//   }, [selectedDate, selectedSlot]);

  return (
    <div className="dashboard-container">
      <h1>Doctor Appointments</h1>

  
      <label htmlFor="dateFilter">Select Date:</label>
      <select id="dateFilter" value={selectedDate} onChange={handleDateChange}>
  <option value="">All Dates</option>
  {Array.from(new Set(appointments.map((appointment) => appointment.date))).map((date) => (
    <option key={date} value={date}>
      {date}
    </option>
  ))}
</select>

   
      <label htmlFor="slotFilter">Select Slot:</label>
<select id="slotFilter" value={selectedSlot} onChange={handleSlotChange}>
  <option value="">All Slots</option>
  {Array.from(
    new Set(
      appointments
        .flatMap((appointment) =>
          appointment.slots.map((slot) => slot.slotTime)
        )
    )
  ).map((slot) => (
    <option key={slot} value={slot}>
      {slot}
    </option>
  ))}
</select>


      {appointments
        .filter((appointment) => {
          // Filter by selected date
          if (selectedDate && selectedDate !== 'All Dates') {
            return appointment.date === selectedDate;
          }
          return true;
        })
        .map((appointment) => (
          <div key={appointment._id} className="appointment">
            <h2>{appointment.date}</h2>
            {appointment.slots
              .filter((slot) => {
                // Filter by selected slot
                if (selectedSlot && selectedSlot !== 'All Slots') {
                  return slot.slotTime === selectedSlot;
                }
                return true;
              })
              .map((slot) => (
                <div key={slot._id} className="slot">
                  <h3>{slot.slotTime}</h3>
                  <ul>
                    {slot.appointments.map((patient) => (
                      <li key={patient._id}>
                        <p>Name: {patient.name}</p>
                        <p>Email: {patient.email}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
}

export default DoctorAppointments;
