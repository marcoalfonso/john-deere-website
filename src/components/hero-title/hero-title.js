import React from 'react'
import styles from './hero-title.module.css'

export default ({ title }) => (
  <section className={styles.hero} dangerouslySetInnerHTML={{__html: title}} />
)
