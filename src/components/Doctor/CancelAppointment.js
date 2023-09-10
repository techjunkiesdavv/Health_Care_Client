import React, { useEffect, useState } from 'react';
import './CancelAppointment.scss'; 
import { getdoctorsbyid ,cancelapp} from '../../actions/doctor';

function CancelAppointment() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [doctors, setDoctors] = useState({});
  const [loading, setLoading] = useState(true);
  const [sampleDates, setSampleDates] = useState([]);
  const [sampleSlots, setSampleSlots] = useState([]);

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const  data  = await getdoctorsbyid({ id: user?.result?._id });
        console.log('Fetched data:', data); // Log the data received

        setDoctors(data);
        setLoading(false);

         if (data.appointmentOrganized && data.appointmentOrganized.length > 0) {
            const appointmentDates = [];

            // Assuming data.appointmentOrganized is an array of appointments
            for (const appointment of data.appointmentOrganized) {
              const date = new Date(appointment.date).toLocaleDateString(); // Format date as per your requirement
              appointmentDates.push(date);
            }
            
            console.log('Dates:', appointmentDates); // Log the extracted dates
            setSampleDates(appointmentDates);// Set it in an array as you may have multiple dates
          

          // Check if slotTimings exists and has data
          if (data.slotTimings && data.slotTimings.length > 0) {
            console.log('Slot Timings:', data.slotTimings); // Log the slot timings
            setSampleSlots(data.slotTimings);
            setSampleSlots([...data.slotTimings, 'All Slots']);
          }
        }
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSlotChange = (e) => {
    setSelectedSlot(e.target.value);
  };

  const handleCancelAppointment = async() => {
    if (selectedDate && selectedSlot) {
      const confirmCancel = window.confirm(
        `Cancel the appointment on ${selectedDate} at ${selectedSlot}?`
      );
console.log(selectedSlot)
      if (confirmCancel) {
            const data = await cancelapp({'datec':selectedDate,'slot':selectedSlot,"id":user?.result?._id})
        setSelectedDate('');
        setSelectedSlot('');
      }
    } else {
      alert('Please select a date and slot.');
    }
  };

  return (
    <div className="cancel-appointment">
      <h1>Cancel Appointment</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <label htmlFor="dateSelect">Select Date:</label>
            <select id="dateSelect" value={selectedDate} onChange={handleDateChange}>
              <option value="">Select Date</option>
              {sampleDates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="slotSelect">Select Slot:</label>
            <select id="slotSelect" value={selectedSlot} onChange={handleSlotChange}>
              <option value="">Select Slot</option>
              {sampleSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleCancelAppointment}>Cancel Appointment</button>
        </>
      )}
    </div>
  );
}

export default CancelAppointment;
