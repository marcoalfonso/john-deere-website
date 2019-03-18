import React from 'react'
import styles from './text-interlude.module.css'

export default ({ miniHeadline, headline, body }) => {
  return (
  <section className={`container ` + styles.textInterludeContainer}>
    { miniHeadline && <div className={styles.miniHeadline} dangerouslySetInnerHTML={{__html: miniHeadline}} />}
    { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} />}
    { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} />}
  </section>
)}
