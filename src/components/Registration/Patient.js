import React, { useState } from 'react';
import './Patient.scss';

const Patient = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [aadharCardNo, setAadharCardNo] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const patientData = {
      password,
      aadharCardNo,
      phoneNo,
      address,
    };
    console.log('Patient Data:', patientData);
  };

  return (
    <div className='patient-form-register'>
    <div className="patient-container">
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Aadhar Card No"
          value={aadharCardNo}
          onChange={(e) => setAadharCardNo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone No"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        />
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Patient;
