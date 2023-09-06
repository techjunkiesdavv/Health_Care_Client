import React, { useState } from 'react';
import './Registration.scss'; 
import DoctorForm from './DoctorForm';

const RegistrationForm = () => {
  const [stage, setStage] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (stage === 1) {
      setStage(2);
    } else {
      console.log('Submitted:', { name, email, category });
    }
  };

  const renderFormBasedOnCategory = () => {
    switch (category) {
      // case 'hospital':
      //   return <HospitalForm />;
      case 'doctor':
        return <DoctorForm />;
      // case 'patient':
      //   return <PatientForm />;
      default:
        return null;
    }
  };

  return (
    <div className='registration-form-container'> 
    <div className="registration-form">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className={`form-stage ${stage === 1 ? 'active' : ''}`}>
          
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Name' />
          <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' />
          <br />
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="doctor">Doctor</option>
            <option value="doctor">Hospital</option>
            <option value="doctor">Patient</option>
          </select>
          <br />
          <button type="submit">Next</button>
        </div>
        <div className={`form-stage ${stage === 2 ? 'active' : ''}`}>
          {renderFormBasedOnCategory()}
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
