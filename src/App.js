
import React from 'react';
import Patient from "./components/Registration/Patient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import { breastFields, diabetesFields, hairFields, heartFields} from './components/ModelForm/constFields'
import CustomForm from './components/ModelForm/CustomForm';
import TestPrediction from './components/ModelForm/TestPrediction';
import { checkBreastCancer, checkDiabetes, checkHairLoss, checkHeart } from './api/Modelapi';
import Navbar from './components/Navbar';

function App() {
  return (
  <BrowserRouter >
  
      <Navbar />
     <Routes>
            <Route
              path="/"
              element={
              <>
              <Home/>
              
              
              <TestPrediction />
              
              </>
              } />
            
              
             <Route
              path="/patient"
              element={<Patient/>} />
          <Route path="/legal" element={<Legal />} />
           <Route path="/appointment" element={<Appointment />} />
          <Route path="/predict_hair" element={<CustomForm apiFunction={checkHairLoss} inputFields={hairFields} />} />
            <Route path="/predict_heart" element={<CustomForm apiFunction={checkHeart} inputFields={heartFields} />} />
             <Route path="/predict_breastCancer" element={<CustomForm apiFunction={checkBreastCancer} inputFields={breastFields} />} />
             <Route path="/predict_diabetes" element={<CustomForm apiFunction={checkDiabetes} inputFields={diabetesFields} />} />
      
          <Route path="*" element={<NotFound />} />
              </Routes>

      
      
  </BrowserRouter>
  );
}

export default App;
