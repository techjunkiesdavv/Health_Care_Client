import React, { useState, useEffect } from 'react';
import styles from './CustomForm.module.scss';
import { checkHairLoss } from '../../api/Modelapi';
import { MutatingDots } from 'react-loader-spinner';

function CustomForm({ inputFields, apiFunction }) {
  const [formData, setFormData] = useState({});
  const [ans, setAns] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  function extractValuesByKey(obj) {
    const keys = Object.keys(obj);
    const arrr = keys.map((key) =>`${key} ${obj[key]}`);
    setAns(arrr);
  }

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true); 
      const response = await apiFunction(formData);
      extractValuesByKey(response.data);
    } catch (error) {
     
      console.error('API error:', error);
    } finally {
      
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  };

  useEffect(() => {
    
    setAns([]);
  }, [formData]);

  return (
    <>
      <div className={styles.lab}>
        <h2 style={{textAlign: "center" }}>Lab Tests</h2>
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.page}>
            <h5 style={{ textAlign: "center" }}>Fill the form to check the results </h5>
            {inputFields.map((field) => (
              <div key={field.name} className={styles.fieldd}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type={field.type || 'text'} 
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  required={field.required || true} 
                />
              </div>
            ))}
            <button type="submit">Submit</button>

          {isLoading ? (
            <MutatingDots
              height="100"
              width="100"
              color="#000000"
              wrapperClass={styles.loader}
              secondaryColor='#000000'
              radius='12.5'
              ariaLabel="mutating-dots-loading"
              visible={true}
            />
          ) : (
            ans.map((item, index) => (
            <div style={{ marginTop: 10}}>
              <h3>
              Your Results:
              </h3>
              <div key={index} className={styles.answer}>
                {item}
              </div>
              </div>
            ))
          )}
          </form>
        </div>
      </div>
    </>
  );
}

export default CustomForm;
