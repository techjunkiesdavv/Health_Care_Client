import React from 'react'
import styles from './Card.module.scss'
function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.details.src} alt="icon"/>
      <p className={styles.title}>{props.details.title}</p>
      <p className={styles.description}>{props.details.description}</p>
    </div>
  )
}

export default Card
