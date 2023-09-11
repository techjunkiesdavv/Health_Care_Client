import React from "react";
import AddHealthinfoForm from "./components/AddHealth/AddHealthinfoForm";
import Patient from "./components/Registration/Patient";
import RegistrationForm from "./components/Registration/RegistrationForm";
import Facilities from "./components/Facilities/Facilities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import LoginForm from "./components/Registration/LoginForm";
import BookAppointment from "./components/Appointment/BookAppointment";
import HealthcareContent from "./components/HealthCareContent/HealthcareContent";
import DoctorSearch from "./components/Doctor/DoctorSearch";
import DoctorAppointments from "./components/Doctor/DoctorAppointments";
import CancelAppointment from "./components/Doctor/CancelAppointment";
import HospitalSearch from "./components/Hospital/HospitalSearch";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route path="/auth" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<NotFound />} />
        <Route path="searchdoctor" element={<DoctorSearch />} />
        <Route path="appointmentqueue" element={<DoctorAppointments />} />
        <Route path="cancelappointmnet" element={<CancelAppointment />} />
        <Route path="hospitalresources" element={<HealthcareContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
