import React, { useState } from 'react';
import './Registration.scss'; 
import DoctorForm from './DoctorForm';
import { Link } from 'react-router-dom';
import HospitalForm from './Hospital';
import PatientForm from './Patient'
import GenerateOtp from './GenerateOtp';

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



  return (
    <div className='registration-form-container'> 
 {stage===1 && (   <div  className="registration-form">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div >
          
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Name' />
          <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' />
          <br />
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="doctor">Doctor</option>
            <option value="hospital">Hospital</option>
            <option value="patient">Patient</option>
          </select>
          <br />
          <button type="submit" onClick={()=>setStage(stage+1)}>Next</button>
        </div>
        
      </form>
      <div>Already have an Account <span className='text-primary'><Link to ="/auth">Login Here</Link></span></div>
   
    </div>)}


    {stage===2 &&  <GenerateOtp setStage={setStage} email={email}/>}
    {category==='doctor' && stage===3 && <DoctorForm namee={name} email={email}/> }
    
    {category==='patient' && stage===3 && <PatientForm namee={name} email={email}/> }
    
    {category==='hospital' && stage===3 && <HospitalForm namee={name} email={email}/> }
    
  </div>
  );
};

export default RegistrationForm;
