import React from 'react'
import styles from './Facilities.module.scss'
import Card from './Card'
import icon from '../../assets/call.svg'
function Facilities() {
    const cardDetails = 
        {src: icon,
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
