
import React, { useState } from 'react';
import AddHealthinfoForm from "./components/AddHealth/AddHealthinfoForm";
import BookAppointment from "./components/Appointment/BookAppointment";
import Healthcare from "./components/HealthCareContent/HealthCare";
import HealthcareContent from "./components/HealthCareContent/HealthcareContent";
import GenerateOtp from "./components/Registration/GenerateOtp";
import Hospital from "./components/Registration/Hospital";
import LoginForm from "./components/Registration/LoginForm";
import Patient from "./components/Registration/Patient";
import RegistrationForm from "./components/Registration/RegistrationForm";



const App = () => {
  return (
    <div>
      {/* <RegistrationForm/> */}
      {/* <GenerateOtp/> */}
      <Patient/>
      {/* <Hospital/> */}
      {/* <BookAppointment/> */}
      {/* <LoginForm/> */}
      {/* <HealthcareContent/> */}
      {/* <Healthcare/> */}
      
      {/* <AddHealthinfoForm  /> */}
  

    </div>
  );
}

export default App;
