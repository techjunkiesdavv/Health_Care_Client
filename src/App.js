
import React, { useState } from 'react';
import AddHealthinfoForm from "./components/AddHealth/AddHealthinfoForm";
import BookAppointment from "./components/Appointment/BookAppointment";
import Healthcare from "./components/HealthCareContent/HealthCare";
import HealthcareContent from "./components/HealthCareContent/HealthcareContent";
import GenerateOtp from "./components/Registration/GenerateOtp";
import Hospital from "./components/Registration/Hospital";
import LoginForm from "./components/Registration/LoginForm";
import Patient from "./components/Registration/Patient";
import RegistrationForm from "./components/registrationform/RegistrationForm";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Facilities from "./components/Facilities/Facilities";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter >
      <Navbar/>
     <Routes>
            <Route
              path="/"
              element={
              <>
              <Home/>
              <Facilities/>
              <AddHealthinfoForm />
              <RegistrationForm />
              </>
              } />
            
              
              <Route
              path="/patient"
              element={<Patient/>} />
              
              </Routes>

      
      
  </BrowserRouter>
  );
}

export default App;
