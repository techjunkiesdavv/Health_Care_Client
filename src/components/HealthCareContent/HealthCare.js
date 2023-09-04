import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HealthcareContent from './HealthcareContent';
import HealthcareDetails from './HealthcareDetails';


const Healthcare = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HealthcareContent />} />
      <Route path="/details/:id" element={<HealthcareDetails />} />
    </Routes>
  </Router>
);

export default Healthcare;
