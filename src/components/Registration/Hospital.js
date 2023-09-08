import React, { useState } from 'react';
import './Hospital.scss'; // Link to the SCSS file
import { signup } from '../../actions/auth';

const Hospital = ({namee,email}) => {
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [availableTreatments, setAvailableTreatments] = useState([
    'Cardiology', 'Orthopedics', 'Neurology', 'Dermatology', 'Ophthalmology', 'Gastroenterology'
  ]);
  const [specialistDoctors, setSpecialistDoctors] = useState(['']);
  const [selectedTests, setSelectedTests] = useState([]);
  const [availableTests, setAvailableTests] = useState([
    'Blood Test', 'X-Ray', 'MRI', 'Ultrasound', 'ECG'
  ]);
  const handleAddSpecialistDoctor = () => {
    setSpecialistDoctors([...specialistDoctors, '']);
  };

  const handleDeleteSpecialistDoctor = (index) => {
    const updatedSpecialistDoctors = specialistDoctors.filter((_, i) => i !== index);
    setSpecialistDoctors(updatedSpecialistDoctors);
  };
  const handleSpecialistDoctorChange = (index, value) => {
    const updatedSpecialistDoctors = [...specialistDoctors];
    updatedSpecialistDoctors[index] = value;
    setSpecialistDoctors(updatedSpecialistDoctors);
  };

  const handleDeleteTreatment = (treatment) => {
    const updatedTreatments = selectedTreatments.filter(item => item !== treatment);
    setSelectedTreatments(updatedTreatments);
    setAvailableTreatments([...availableTreatments, treatment]);
  };

  const handleAddTreatment = (treatment) => {
    setSelectedTreatments([...selectedTreatments, treatment]);
    setAvailableTreatments(availableTreatments.filter(option => option !== treatment));
  };
  const handleDeleteTest = (test) => {
    const updatedTests = selectedTests.filter(item => item !== test);
    setSelectedTests(updatedTests);
    setAvailableTests([...availableTests, test]);
  };

  const handleAddTest = (test) => {
    setSelectedTests([...selectedTests, test]);
    setAvailableTests(availableTests.filter(option => option !== test));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password===confirmPassword)
  {  const hospitalData = {
      namee,
      email,
      password,
      'category':'hospital',
      phoneNo,
      address,
      availableTests,
      selectedTreatments,
      specialistDoctors
    };
    const data = await signup(hospitalData);
    console.log('Hospital Data:', data);}
  };

  return (
    <div className='hospital-form-register'>
    <div className="hospital-container">
      <h2>Hospital Registration</h2>
      <form onSubmit={handleSubmit}>
      <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
        <label>Phone No:</label>
        <input
          type="text"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        />
        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <label>Available Treatments:</label>
        <div>
          <select
            value={''}
            onChange={(e) => handleAddTreatment(e.target.value)}
            disabled={availableTreatments.length === 0}
          >
            <option value="">Select Treatment</option>
            {availableTreatments.map((treatment, index) => (
              <option key={index} value={treatment}>
                {treatment}
              </option>
            ))}
          </select>
        </div>
        <div className="selected-treatments">
          <p>Selected Treatments:</p>
          <ul>
            {selectedTreatments.map((treatment, index) => (
              <li key={index}>
                {treatment}
                <button
                  type="button"
                  onClick={() => handleDeleteTreatment(treatment)}
                  className="delete-button"
                >
                  <i className="fas fa-trash-alt"></i> 
                </button>
              </li>
            ))}
          </ul>
        </div>
        <label>Available Tests:</label>
        <div>
          <select
            value={''}
            onChange={(e) => handleAddTest(e.target.value)}
            disabled={availableTests.length === 0}
          >
            <option value="">Select Test</option>
            {availableTests.map((test, index) => (
              <option key={index} value={test}>
                {test}
              </option>
            ))}
          </select>
        
        </div>
        <div className="selected-treatments">
          <p>Selected Tests:</p>
          <ul>
            {selectedTests.map((test, index) => (
              <li key={index}>
                {test}
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => handleDeleteTest(test)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <label>Specialist Doctors:</label>
        <ul className="specialist-doctors">
          {specialistDoctors.map((doctor, index) => (
            <li key={index}>
              <input
                type="text"
                value={doctor}
                onChange={(e) => handleSpecialistDoctorChange(index, e.target.value)}
                required
              />
              <button
                type="button"
                className="delete-button"
                onClick={() => handleDeleteSpecialistDoctor(index)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddSpecialistDoctor}>
          Add Specialist Doctor
        </button>
        <div className='submit-button' >

        <button  type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Hospital;
