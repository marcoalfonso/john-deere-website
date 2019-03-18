import React from 'react'
import Img from 'gatsby-image'
import styles from './primary-hero.module.css'

export default ({ children, heading, ctaText, ctaLink, image }) => {
  return (
    <section className={styles.hero}>
      {image && <Img className={styles.heroImage} alt={heading} fluid={image} /> }
      <div className={`container ` + styles.heroText}>
        { heading && <div className={styles.heading} dangerouslySetInnerHTML={{__html: heading}} /> }
        { ctaText && <a href={ctaLink}><div className={styles.ctaText} dangerouslySetInnerHTML={{__html: ctaText}} /></a> }
        {children}
      </div>
    </section>
)}
