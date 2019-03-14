import React from 'react'
import styles from './featured-section.module.css'

export default ({ image, title, headline, body  }) => {
  return (
  <section className={`container ` + styles.featuredContainer}>
    <div className={`row ` + styles.flexRow}>
      <div className="col-xs-12 col-md-6">
        { image && <img className={styles.image} alt={title} src={image} /> }
      </div>
      <div className="col-xs-12 col-md-6">
        { title && <div className={styles.title} dangerouslySetInnerHTML={{__html: title}} />}
        { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} />}
        { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} />}
      </div>
    </div>

  </section>
)}
