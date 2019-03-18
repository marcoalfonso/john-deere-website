import React from 'react'
import styles from './content-card.module.css'

export default ({ headline, body, callToAction, callToActionLink, image, headlineUnderline }) => {

  return (
  <div className={styles.contentCardContainer}>
    { image && <img className={styles.image} alt={headline} src={image} /> }
    { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} /> }
    { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} /> }
    { callToAction && <a href={callToActionLink}><div className={styles.callToAction} dangerouslySetInnerHTML={{__html: callToAction}} /></a> }
  </div>
)}
