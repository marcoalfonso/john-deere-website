import React from 'react'
import styles from './text-interlude.module.css'

export default ({ headline, body }) => {
  return (
  <section className={`container ` + styles.videoContainer}>
    { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} />}
    { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} />}
  </section>
)}
