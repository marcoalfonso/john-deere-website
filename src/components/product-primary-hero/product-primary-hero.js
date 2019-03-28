import React from 'react'
import Img from 'gatsby-image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styles from './product-primary-hero.module.css'

export default ({ productModelName, productModelNumber, primaryCtaText, primaryCtaUrl, productHeroImage }) => {
  return (
    <section
      className={`jumbotron jumbotron-fluid ` + styles.hero}
      style={productHeroImage ? {backgroundImage: `url(${productHeroImage.src})`} : null}
    >
      <div className={`container ` + styles.heroTextContainer}>
        <div className={styles.heroText}>
          { productModelName && <div className={styles.heading} dangerouslySetInnerHTML={{__html: productModelNumber + ' ' + productModelName}} /> }
          { primaryCtaText && <a href={primaryCtaUrl} target="_blank"><div className={styles.ctaText} dangerouslySetInnerHTML={{__html: primaryCtaText}} /></a> }
        </div>
      </div>
    </section>
)}
