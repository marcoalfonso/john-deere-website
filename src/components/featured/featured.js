import React from 'react'
import styles from './featured.module.css'

export default ({ image, title, headline, body, ctaText, ctaLink, imageRight, greyBackground  }) => {
  const imagePosition = imageRight ? styles.imageColRight : styles.imageCol
  return (
  <section className={greyBackground ? styles.featuredComponentGrey : styles.featuredComponentWhite}>
    <div className={`container ` + styles.featuredContainer}>
      <div className={`row ` + styles.flexRow}>
        <div className={`col-xs-12 col-md-6 ` + imagePosition }>
          { image && <img className={styles.image} alt={title} src={image} /> }
        </div>
        <div className="col-xs-12 col-md-6">
          { title && <div className={styles.title} dangerouslySetInnerHTML={{__html: title}} /> }
          { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} /> }
          { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} /> }
          { ctaText && <a href={ctaLink}><div className={styles.callToAction} dangerouslySetInnerHTML={{__html: ctaText}} /></a> }
        </div>
      </div>
    </div>
  </section>
)}
