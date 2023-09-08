import React, { useState } from 'react';
import './LoginForm.scss';

import { Link } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa';
import { signin } from '../../actions/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();

    const userData =await signin({email,password})
    console.log('User Data:', userData);
  };

  return (
    <div className='login-main-container'> 
      
      <form className="login-form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="input-container">
      <span className='form-icon'><FaUser /></span>
        <input
          type="email"
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
      <span className='form-icon'><FaLock /></span>
        <input
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Login</button>
   <div>Don't have a account? <span className='text-primary'><Link to ="/registration">Create Account</Link></span></div>
    </form>

    </div>

  );
};

export default LoginForm;
