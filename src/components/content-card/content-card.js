import React from 'react'
import styles from './content-card.module.css'

export default ({ headline, body, ctaText, ctaLink, image, headlineUnderline }) => {

  return (
  <div className={styles.contentCardContainer}>
    { image && <img className={styles.image} alt={headline} src={image} /> }
    { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} /> }
    { headlineUnderline && <div className={styles.headlineUnderline} dangerouslySetInnerHTML={{__html: headlineUnderline}} /> }
    { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} /> }
    { ctaText && <a href={ctaLink}><div className={styles.callToAction} dangerouslySetInnerHTML={{__html: ctaText}} /></a> }
  </div>
)}
