
import React from 'react';
import AddHealthinfoForm from "./components/AddHealth/AddHealthinfoForm";
import Patient from "./components/Registration/Patient";
import RegistrationForm from "./components/registrationform/RegistrationForm";
import Facilities from "./components/Facilities/Facilities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";

function App() {
  return (
  <BrowserRouter >
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
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
              </Routes>

      
      
  </BrowserRouter>
  );
}

export default App;
