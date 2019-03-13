import React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.css'

export default ({ data, children, title, subtitle, button }) => {
  return (
    <section className={styles.hero}>
      <Img className={styles.heroImage} alt={data.title} fluid={data.heroImage.fluid} />
      <div className={`container ` + styles.heroText}>
        { title && <div className={styles.heroTitle} dangerouslySetInnerHTML={{__html: title}} />}
        { subtitle && <div className={styles.heroSubTitle} dangerouslySetInnerHTML={{__html: subtitle}} />}
        { button && <a href="#" className={styles.btnYellow}>{button}</a>}
        {children}
      </div>
    </section>
)}
