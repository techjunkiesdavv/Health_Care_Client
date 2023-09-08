
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
import DoctorForm from './components/Registration/DoctorForm';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));
const App = () => {
  
  return (
    <div>
      {/* <RegistrationForm/> */}
      {/* <DoctorForm/> */}
        {/* <Patient/> */}
      {/* <GenerateOtp/> */}
     {/* <Hospital/> */}
     {/* <LoginForm/> */}

      {/* <BookAppointment/> */}
      
     
      {/* <Healthcare/> */}
      
      {/* <AddHealthinfoForm  /> */}

      {/* <VideoPlayer /> */}
   
   
    </div>
  );
}

export default App;
