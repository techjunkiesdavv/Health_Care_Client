import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './BookAppointment.scss'; 

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

 
  const availableSeats = {
    1: 5, // Monday
    3: 3, // Wednesday
    5: 8, // Friday
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot('');
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const availableTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const isWeekdayDisabled = ({ date }) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 1 && dayOfWeek !== 3 && dayOfWeek !== 5; 
  };

  const renderTimeSlots = () => {
    return availableTimeSlots.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ));
  };

  return (
    <div className="book-appointment-container">
      <h2>Book an Appointment</h2>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={isWeekdayDisabled}
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
        
        <div>Available Seats: {availableSeats[selectedDate.getDay()]}</div>
        </div>
      )}
      <button
        type="button"
        disabled={!selectedDate || !selectedTimeSlot}
        
      >
        Book Appointment
      </button>
    </div>
  );
};

export default BookAppointment;
