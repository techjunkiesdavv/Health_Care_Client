import React from 'react'
import styles from './Card.module.scss'
import {MdLocalHospital} from 'react-icons/md'

function Card(props) {
  return (
    <div className={styles.card}>
      <MdLocalHospital fontSize={80} />
      <p className={styles.title}>{props.details.title}</p>
      <p className={styles.description}>{props.details.description}</p>
    </div>
  )
}

export default Card
