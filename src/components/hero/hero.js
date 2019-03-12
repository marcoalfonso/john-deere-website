import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from './hero.module.css'

export default ({ data, children }) => {
  console.log("data", data)
 return (
  <section className={styles.hero} style={data.heroImage ? {backgroundImage: "url("+data.heroImage.fluid.src+")"} : null}>
    <Container>
      {children}
    </Container>
  </section>
)}
