import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import base from './base.css'
import Container from 'react-bootstrap/Container'
import Header from './header/header'
import Footer from './footer/footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
