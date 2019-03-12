import React from 'react'
import Img from 'gatsby-image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import styles from './hero.module.css'


export default ({ data }) => (
  <Jumbotron>
    <h1>Nothing's built<br/>like a Deere.</h1>
    <p>
      <Button variant="primary">Discover more</Button>
    </p>
  </Jumbotron>
)
