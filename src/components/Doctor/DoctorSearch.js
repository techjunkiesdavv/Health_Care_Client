import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoctorSearch.scss';
import BookAppointment from '../Appointment/BookAppointment';
 // Import the SCSS file

 import { getdoctors } from '../../actions/doctor';
function DoctorSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [chooseDoctor,setChooseDoctor]=useState({});

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

 

 

  useEffect(() => {
   
    const doctorsseaerch=async()=>{
       
        const data= await getdoctors({searchQuery})
        setDoctors(data);
     
      }
    doctorsseaerch()
  }, [searchQuery]);

  const handleBookAppointment = (doctorId) => {
  const selectedDoctor = doctors.find((doctor) => doctor._id === doctorId);
    if (selectedDoctor) {
      setChooseDoctor(selectedDoctor);
    }
    console.log(chooseDoctor);
  };
  const handleBookRemoteAppointment = (doctorId) => {
 alert(`Book remote appointment with Doctor ID: ${doctorId}`);
  };

  return (
    <div>
 {!chooseDoctor && (   <div className="container">
      <h1 className="title">Doctor Search</h1>
      <input
        type="text"
        className="input"
        placeholder="Search for doctors..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul className="doctor-list">
        {doctors.map((doctor) => (
          <li key={doctor._id} className="doctor-item">
            <h2>{doctor.name}</h2>
            <p>Email: {doctor.email}</p>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experiences: {doctor.experiences.join(', ')}</p>
            <p>Rating: {doctor.averageRating}</p>
            <button
              onClick={() => handleBookAppointment(doctor._id)}
              className="book-appointment-button"
            >
              Book Appointment
            </button>
            <button
              onClick={() => handleBookRemoteAppointment(doctor._id)}
              className="book-remote-appointment-button"
            >
              Book Remote Appointment
            </button>
          </li>
        ))}
      </ul>
    </div>)}
    {chooseDoctor && (
        <div className="container">
          <h1 className="title">Selected Doctor</h1>
          <h2>{chooseDoctor.name}</h2>
          <p>Email: {chooseDoctor.email}</p>
          <p>Specialization: {chooseDoctor.specialization}</p>
         <BookAppointment chooseDoctor={chooseDoctor}/>
          <button
            onClick={() => setChooseDoctor(null)}
            className="back-button"
          >

            Back to Search
          </button>
        </div>
      )}
    </div>
  );
}

export default DoctorSearch;
