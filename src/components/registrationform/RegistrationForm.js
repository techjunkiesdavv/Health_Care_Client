import React from 'react'
import { useState } from 'react';
import styles from "./RegistrationForm.module.scss";
import QRCode from 'qrcode';
import {QrReader} from 'react-qr-reader';
function RegistrationForm() {
    const [patientDetails,setPatientDetails] = useState({firstName:'',lastName:'',phone:'',alternate:'',address:''});
    const [qrUrl,setUrl] = useState("");
    const [data,setData] = useState('');
    const [readqrValue, setQrRead] = useState(false);
    const handleChange=(e)=>{
        setPatientDetails({...patientDetails,[e.target.name]:e.target.value});
      };
    const generateQrCode= async (e)=>{
        e.preventDefault();
        console.log(patientDetails)
        try{
          const data =patientDetails.firstName+"&"+patientDetails.lastName+"&"+patientDetails.phone+"&"+patientDetails.alternate+"&"+patientDetails.address;
          const qrcodeGenerated = await QRCode.toDataURL(JSON.stringify(patientDetails));
          setUrl(qrcodeGenerated);
        }
        catch(err){
          console.log(err);
        }
    }
    const handleQrScan=(result)=>{
      if(result){
        setData(result.text);
        console.log(result.text);
      }
    }   
    const handleQrScanError=(err)=>{
      console.log(err);
    }
    const readqr =()=>{
      setQrRead(!true);
    }
     return (
      <div>
        <div className={styles.container}>
          <div className={styles.border}>
            <div className={styles.title}>Hello, Welcome to 'Hospital Name'!</div>
            <form onSubmit={generateQrCode}>
              <div className={styles.userdetails}>
                <div className={styles.inputbox}>
                  <input
                    className={styles.firstName}
                    type="text"
                    placeholder="First Name"
                    required
                    name='firstName'
                    value={patientDetails.firstName}
                    onChange={handleChange}
                  />
                  <input
                    className={styles.lastName}
                    type="text"
                    placeholder="Last Name"
                    required
                    name='lastName'
                    value={patientDetails.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputbox}>
                  <input
                    className={styles.phone}
                    type="text"
                    placeholder="Phone number"
                    required
                    name='phone'
                    value={patientDetails.phone}
                    onChange={handleChange}
                  />
                  <input
                    className={styles.alternate}
                    type="text"
                    placeholder="Alternate phone number"
                    required
                    name='alternate'
                    value={patientDetails.alternate}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputbox}>
                  <input
                    className={styles.wing}
                    type="text"
                    placeholder="Aadhar Number"
                    required
                    name='aadharNumber'
                    value={patientDetails.address}
                    onChange={handleChange}
                  />
                  
                </div>
                <div className={styles.inputbox}>
                  <input
                    className={styles.wing}
                    type="text"
                    placeholder="Address"
                    required
                    name='address'
                    value={patientDetails.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.button}>
                <button type="submit">Generate QR Code</button>
              </div>
              <div className={styles.button}>
                <button onClick={readqr}>Read QR Code</button>
              </div>
            </form>
            <div>
              {qrUrl&&<a href={qrUrl} download={true}>
                <img src={qrUrl}/>
                </a>}
                </div>
                {/* <QrReader
          delay={300}
          
          onError={handleQrScanError}
          onScan={handleQrScan}
          onResult={(result,error)=>{
handleQrScan(result);
          }}  
          /> */}
          <p>{data}</p>
          </div>
          
        </div>
      </div>
    );
}

export default RegistrationForm
