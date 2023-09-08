import React, { useState } from 'react';
import './GenerateOtp.scss';
import { sendotp } from '../../actions/mail';


const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
  return otp.toString();
};

const GenerateOtp = ({setStage,email}) => {
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [enteredOTP, setEnteredOTP] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);

  const handleGenerateOTP = async() => {
    const otp = generateOTP();
    
    setGeneratedOTP(otp);
    setIsOTPVerified(false);
    
    const data = await sendotp({otp,email})
    
  };

  const handleVerifyOTP = () => {




    if (enteredOTP === generatedOTP) {
      setIsOTPVerified(true);
      setStage(3)
    } else {
      setIsOTPVerified(false);
    }
  };

  return (
    <div className="generate-otp-container">
      <h2>OTP Verification</h2>
      <div className="otp-controls">
        <button onClick={handleGenerateOTP}>Generate OTP</button>
        <p>Generated OTP: {generatedOTP}</p>
      </div>
      <div className="otp-input">
        <input
          type="text"
          placeholder="Enter OTP"
          value={enteredOTP}
          onChange={(e) => setEnteredOTP(e.target.value)}
        />
        <button onClick={handleVerifyOTP}>Verify OTP</button>
      </div>
      <div className="otp-status">
        {isOTPVerified ? <p className="success">OTP Verified!</p> : <p className="error">OTP Not Verified</p>}
      </div>
    </div>
  );
};

export default GenerateOtp;
