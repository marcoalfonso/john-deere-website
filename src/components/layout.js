import React from 'react'
import { Link } from 'gatsby'
import ReactGA from 'react-ga'
import Container from 'react-bootstrap/Container'
import Header from './header/header'
import Footer from './footer/footer'

class Template extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-66608058-3')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div style={{ overflow: 'hidden' }}>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
