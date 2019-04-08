import React from 'react'
import Img from 'gatsby-image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styles from './primary-hero.module.css'

class PrimaryHero extends React.Component {
    state = { width: 0, height: 0 }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
      const { children, heading, ctaText, ctaLink, image, imageMobile } = this.props
      return (
        <section
          className={styles.hero}
          style={{backgroundImage: `url(${this.state.width > 991 ? image : imageMobile ? imageMobile : image})`}}
        >
          <div className={`container ` + styles.heroText}>
            { heading && <div className={styles.heading} dangerouslySetInnerHTML={{__html: heading}} /> }
            { ctaText && <a href={ctaLink}><div className={styles.ctaText} dangerouslySetInnerHTML={{__html: ctaText}} /></a> }
            {children}
          </div>
        </section>
    )
  }
}

export default PrimaryHero
