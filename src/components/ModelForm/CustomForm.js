import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You can import Axios for making API calls if needed
import styles from './CustomForm.module.scss'
import { checkHairLoss } from '../../api/Modelapi';


function CustomForm({ endpoint, inputFields }) {
  const [formData, setFormData] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call using Axios or your preferred method
      
      const response = await checkHairLoss(formData);
     

      // Handle the API response as needed
      console.log('API response:',response);
    } catch (error) {
      // Handle errors
      console.error('API error:', error);
    }
  };

  return (
  <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.page}>
      {inputFields.map((field) => (
        <div key={field.name} className={styles.fieldd}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type || 'text'} // Default input type is text
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleInputChange}
            required={field.required || true} // Default to not required
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default CustomForm;
