import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HospitalSearch.scss'; // Import the SCSS file
import { gethospital } from '../../actions/hospital';

function HospitalSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hospitals, setHospitals] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
        const data=await gethospital({searchQuery})
        setHospitals(data);
    }
    fetchData();
   

    
  }, [searchQuery]);

  return (
    <div className="container">
      <h1 className="title">Hospital Search</h1>
      <input
        type="text"
        className="input"
        placeholder="Search for hospitals..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul className="hospital-list">
        {hospitals.map((hospital) => (
          <li key={hospital._id} className="hospital-item">
            <h2>{hospital.name}</h2>
            <p>Email: {hospital.email}</p>
            <p>Phone: {hospital.phoneNo}</p>
            <p>Address: {hospital.address}</p>
            <p>Available Tests: {hospital.availableTests.join(', ')}</p>
            <p>Available Treatments: {hospital.selectedTreatments.join(', ')}</p>
            <p>Specialist Doctors: {hospital.specialistDoctors.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HospitalSearch;
