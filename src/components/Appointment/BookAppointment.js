import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './BookAppointment.scss';
import { bookAppointment } from '../../actions/doctor';

const BookAppointment = ({ chooseDoctor }) => {
  const [doctorData, setDoctorData] = useState(chooseDoctor);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const[availableSeats,setAvailableSeats]=useState(0)

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot('');
  };


  const user=JSON.parse(localStorage.getItem('profile'));
  console.log(user);
  const calculateMinutesBetweenTimes = (startTime, endTime) => {
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);
  
    const totalStartMinutes = startHours * 60 + startMinutes;
    const totalEndMinutes = endHours * 60 + endMinutes;
  
    return totalEndMinutes - totalStartMinutes;
  };
  const handleTimeSlotChange = (event) => {
    const selectedSlot = event.target.value;
  
    if (selectedSlot) {
      const [startTime, endTime] = selectedSlot.split('-').map((time) => time.trim());
  
      const minutesBetweenTimes = calculateMinutesBetweenTimes(startTime, endTime);
      setAvailableSeats(minutesBetweenTimes / doctorData.avgTimePerPatient);
      console.log(availableSeats)
      setSelectedTimeSlot(selectedSlot);
    } else {
   setAvailableSeats(0);
      setSelectedTimeSlot('');
    }
  };

  const availableTimeSlots = doctorData.slotTimings;

  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if the selected date is not in the working days or is in the past
    return (
      date < today ||
      !doctorData?.workingDays?.includes(date.toLocaleDateString('en-US', { weekday: 'long' }))
    );
  };

  const renderTimeSlots = () => {
    return availableTimeSlots.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ));
  };

const book=async(e)=>{
  const formData={
    "doctorId": doctorData._id,
    "patientId": user?.result?._id,
    "patientEmail": user?.result?.email,
    "appointmentDate": selectedDate,
    "slotTime":selectedTimeSlot
  }
  const data = await bookAppointment(formData);
  console.log(data);
}










  return (
    <div className="book-appointment-container">
      <h2>Book an Appointment</h2>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={({ date }) => isDateDisabled(date)}
          tileClassName={({ date }) => (isDateDisabled(date) ? 'disabled-date' : '')}
        />
      </div>
      {selectedDate && (
        <div className="time-slot-selection">
          <div>
            <label>Select a Time Slot:</label>
            <select value={selectedTimeSlot} onChange={handleTimeSlotChange}>
              <option value="">Select Time Slot</option>
              {renderTimeSlots()}
            </select>
          </div>
        </div>
      )}
      <button type="button" disabled={!selectedDate || !selectedTimeSlot} onClick={book} >
        Book Appointment
      </button>
    </div>
  );
};

export default BookAppointment;
