import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './featured.module.css'

export default ({ image, title, headline, body, ctaText, ctaLink, imageRight, greyBackground  }) => {
  const imagePosition = imageRight ? styles.imageColRight : styles.imageCol
  return (
  <section className={greyBackground ? styles.featuredComponentGrey : styles.featuredComponentWhite}>
    <div className={`container ` + styles.featuredContainer}>
      <div className={`row ` + styles.flexRow}>
        <Fade left={imageRight ? false : true} right={imageRight ? true : false} ssrFadeout>
          <div className={`col-xs-12 col-md-6 ` + imagePosition }>
            { image && <img className={styles.image} alt={title} src={image} /> }
          </div>
        </Fade>
        <Fade left={imageRight ? true : false} right={imageRight ? false : true} ssrFadeout>
          <div className="col-xs-12 col-md-6">
            { title && <div className={styles.title} dangerouslySetInnerHTML={{__html: title}} /> }
            { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} /> }
            { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} /> }
            { ctaText && <a href={ctaLink}><div className={styles.callToAction} dangerouslySetInnerHTML={{__html: ctaText}} /></a> }
          </div>
        </Fade>
      </div>
    </div>
  </section>
)}
