import React from 'react'
import styles from './Facilities.module.scss'
import Card from './Card'


function Facilities() {
    const cardDetails = 
        {src: "",
        title: "Scan QR",
        description:"Get details of patient by scanning QR Code"
        }
    
  return (
    <div className={styles.cardContainer}>
        <Card details={cardDetails}/>
        <Card details={cardDetails}/>
        <Card details={cardDetails}/>
    </div>
  )
}

export default Facilities
