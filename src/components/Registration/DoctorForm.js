import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import './DoctorForm.scss';
import { signup } from '../../actions/auth';

import { useNavigate} from 'react-router-dom';

const DoctorForm = ({namee,email}) => {
  const navigate=useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(namee);
  const [phone, setPhone] = useState();
  
  // const [email, setEmail] = useState(email);
  const [photo, setPhoto] = useState('');
  const [ticketPrice, setTicketPrice] = useState(150);
  const [specialization, setSpecialization] = useState('Cardiology');
  const [qualifications, setQualifications] = useState(['MD', 'PhD']);
  const [experiences, setExperiences] = useState([
    '5+ years in cardiology practice',
  ]);
  const [bio, setBio] = useState('Passionate about improving heart health.');
  const [about, setAbout] = useState("I'm a dedicated cardiologist...");
  const [timeSlots, setTimeSlots] = useState(['Morning', 'Afternoon', 'Evening']);
  const [workingDays, setWorkingDays] = useState(['Monday', 'Wednesday', 'Friday']);
  const [timeSlotsPerDay, setTimeSlotsPerDay] = useState(3);
  const [avgTimePerPatient, setAvgTimePerPatient] = useState(20);
  const [slotTimings, setSlotTimings] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedSlotTimings, setSelectedSlotTimings] = useState([]);
  const [slotPerDay, setSlotPerDay] = useState(timeSlotsPerDay);
  const [steps, setSteps] = useState(0);
  const [category, setCategory] = useState('');
  const [workingPlace, setWorkingPlace] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const [currentSlotStartTime, setCurrentSlotStartTime] = useState('');
  const [currentSlotEndTime, setCurrentSlotEndTime] = useState('');

  const handlePhotoUpload = (base64) => {
    setPhoto(base64);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    
      setSteps(steps - 1);
    
  };
console.log(selectedSlotTimings)
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (steps === 3) {
      // Handle form submission here
      const doctorData = {
      email,
        password,
        name,
        phone,
        photo,
        'category':'doctor',
        ticketPrice,
        specialization,
        qualifications,
        experiences,
        bio,
        about,
        timeSlots,
        workingDays,
        timeSlotsPerDay,
        avgTimePerPatient,
        selectedSlotTimings,
      };

      const data =await signup(doctorData);
      if(data)
      navigate('/');
    } else {
      setSteps(steps + 1);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setWorkingPlace('');
    setHospitalName('');
    setClinicAddress('');
  };

  const handleAddSlotTiming = () => {
    if (currentSlotStartTime && currentSlotEndTime) {
      const newSlotTiming = `${currentSlotStartTime} - ${currentSlotEndTime}`;
      setSelectedSlotTimings([...selectedSlotTimings, newSlotTiming]);
      setCurrentSlotStartTime('');
      setCurrentSlotEndTime('');
    }
  };

  const handleWorkingDayChange = (e) => {
    const selectedDay = e.target.value;
    if (!selectedDays.includes(selectedDay)) {
      setSelectedDays([...selectedDays, selectedDay]);
    }
  };

  const handleRemoveSlotTiming = (index) => {
    const newSlotTimings = [...selectedSlotTimings];
    newSlotTimings.splice(index, 1);
    setSelectedSlotTimings(newSlotTimings);
  };

  const availableDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ].filter((day) => !selectedDays.includes(day));

  return (
    <div className="doctor-form-register">
      <form className="doctor-form-container">
        {steps === 0 && (
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <div className="photo-upload">
              <label>Photo:</label>
              <FileBase64
                multiple={false}
                onDone={handlePhotoUpload}
              />
            </div>
         

        
          
            <label>Ticket Price:</label>
            <input
              type="number"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
              required
            />
            <label>Specialization:</label>
            <input
              type="text"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />
             </div>
        
          )}{steps === 1 && (<div>  <label>Qualifications:</label>
            <ul>
              {qualifications.map((qualification, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => {
                      const newQualifications = [...qualifications];
                      newQualifications[index] = e.target.value;
                      setQualifications(newQualifications);
                    }}
                  />
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setQualifications([...qualifications, ''])}
                >
                  Add Qualification
                </button>
              </li>
            </ul>
            <label>Experiences:</label>
            <ul>
              {experiences.map((experience, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => {
                      const newExperiences = [...experiences];
                      newExperiences[index] = e.target.value;
                      setExperiences(newExperiences);
                    }}
                  />
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setExperiences([...experiences, ''])}
                >
                  Add Experience
                </button>
              </li>
            </ul>
            <label>Bio:</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
            <label>About:</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              required
            />
          </div>
        )}

        {steps === 2 && (
          <div>
            <label>Working Days:</label>
            <ul>
              {selectedDays.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
              <select onChange={handleWorkingDayChange} value="">
                <option value="" disabled>
                  Select a day
                </option>
                {availableDays.map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </ul>
            <label>Time Slots Per Day:</label>
            <input
              type="number"
              value={timeSlotsPerDay}
              onChange={(e) => setTimeSlotsPerDay(e.target.value)}
              required
            />
            <label>Average Time Per Patient (minutes):</label>
            <input
              type="number"
              value={avgTimePerPatient}
              onChange={(e) => setAvgTimePerPatient(e.target.value)}
              required
            /></div>)}
            {steps===3&&(<div>
            <label>Slot Timings:</label>
            {selectedSlotTimings.length < timeSlotsPerDay && (
              <ul>
                  <li >
                    <label>Slot {selectedSlotTimings.length === 0 ? 1 : selectedSlotTimings.length + 1}:</label>
                    <input
                      type="time"
                      value={currentSlotStartTime}
                      onChange={(e) => setCurrentSlotStartTime(e.target.value)}
                      required
                    />
                    <span> - </span>
                    <input
                      type="time"
                      value={currentSlotEndTime}
                      onChange={(e) => setCurrentSlotEndTime(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={handleAddSlotTiming}
                    >
                      Add Slot Timing
                    </button>
                  </li>
                
              </ul>
            )}
            <ul>
              {selectedSlotTimings.map((timing, index) => (
                <li key={index}>
                  {timing}
                  <button
                    type="button"
                    onClick={() => handleRemoveSlotTiming(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <label>Category:</label>
            <select value={category} onChange={handleCategoryChange} required>
              <option value="" disabled>
                Select a category
              </option>
              <option value="Hospital">Hospital</option>
              <option value="Personal Clinic">Personal Clinic</option>
            </select>
            {category === 'Hospital' && (
              <>
                <label>Hospital Name:</label>
                <input
                  type="text"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  required
                />
              </>
            )}
            {category === 'Personal Clinic' && (
              <>
                <label>Personal Clinic Address:</label>
                <input
                  type="text"
                  value={clinicAddress}
                  onChange={(e) => setClinicAddress(e.target.value)}
                  required
                />
              </>
            )}
          </div>
        )}

        <div className='moving-button'>
          {steps > 0 && (
            <button className="submit-button" onClick={handlePrev}>
              Prev
            </button>
          )}
          <button className="submit-button" onClick={handleSubmit}>
            {steps === 3 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;
