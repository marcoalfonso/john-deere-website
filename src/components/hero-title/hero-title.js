import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from './hero-title.module.css'

export default ({ title }) => (
  <section className={styles.hero} dangerouslySetInnerHTML={{__html: title}} />
)
