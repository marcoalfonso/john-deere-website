import React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.css'

export default ({ data, children, title, callToAction }) => {
  return (
    <section className={styles.hero}>
      <Img className={styles.heroImage} alt={data.title} fluid={data.heroImage.fluid} />
      <div className={`container ` + styles.heroText}>
        { title && <div className={styles.heroTitle} dangerouslySetInnerHTML={{__html: title}} />}
        { callToAction && <div className={styles.callToAction} dangerouslySetInnerHTML={{__html: callToAction}} />}
        {children}
      </div>
    </section>
)}
