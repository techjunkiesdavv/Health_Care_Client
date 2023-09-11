import React, { useEffect, useState } from 'react';
import './CancelAppointment.scss';
import { getdoctorsbyid,getdoctorsAppbyid, cancelapp } from '../../actions/doctor';
import {
  Container,
  Typography,
  Select,
  FormControl,
  InputLabel,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; // Note the change here

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    width: '200px',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function CancelAppointment() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [doctors, setDoctors] = useState({});
  const [loading, setLoading] = useState(true);
  const [sampleDates, setSampleDates] = useState([]);
  const [sampleSlots, setSampleSlots] = useState([]);

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const data = await getdoctorsbyid({ id: user?.result?._id });
        setDoctors(data);
        setLoading(false);

        
        const dataApp = await getdoctorsAppbyid({ id: user?.result?._id });
        console.log(dataApp);
        if ( dataApp.length>0) {
          const appointmentDates = [];
          for (const appointment of dataApp) {
            const date = new Date(appointment.appointmentDate).toLocaleDateString();
            appointmentDates.push(date);
          }
          setSampleDates(appointmentDates);
        }

        if (data.slotTimings && data.slotTimings.length > 0) {
          setSampleSlots([...data.slotTimings, 'All Slots']);
        }
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSlotChange = (e) => {
    setSelectedSlot(e.target.value);
  };

  const handleCancelAppointment = async () => {
    if (selectedDate && selectedSlot) {
      const confirmCancel = window.confirm(
        `Cancel the appointment on ${selectedDate} at ${selectedSlot}?`
      );

      if (confirmCancel) {
        await cancelapp({ datec: selectedDate, slot: selectedSlot, id: user?.result?._id });
        setSelectedDate('');
        setSelectedSlot('');
      }
    } else {
      alert('Please select a date and slot.');
    }
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4">Cancel Appointment</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="dateSelect">Select Date:</InputLabel>
            <Select
              native
              id="dateSelect"
              value={selectedDate}
              onChange={handleDateChange}
              className={classes.select}
            >
              {/* <option value="">Select Date</option> */}
              {sampleDates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="slotSelect">Select Slot:</InputLabel>
            <Select
              native
              id="slotSelect"
              value={selectedSlot}
              onChange={handleSlotChange}
              className={classes.select}
            >
              <option value="">Select Slot</option>
              {sampleSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleCancelAppointment}
          >
            Cancel Appointment
          </Button>
        </>
      )}
    </Container>
  );
}

export default CancelAppointment;
