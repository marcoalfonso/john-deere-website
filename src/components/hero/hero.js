import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from './hero.module.css'

export default ({ data }) => (
  <section className={styles.hero}>
    <Container>
      <div className="hero-inner">
        <h1>Nothing's built<br/>like a Deere.</h1>
        <a href="#" className="btn">Discover more</a>
      </div>
    </Container>
  </section>
)
