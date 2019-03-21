import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './contact-us.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import Video from '../components/video/video'
import Section from '../components/section/section'
import RichText from '../components/rich-text/rich-text'

class AboutUs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={siteTitle} />
          <PrimaryHero
            heading="There’s a Deere for everything."
          />
          <Video
            title="RDO EQUIPMENT CO."
            headline="Our story."
            videoId="HQvSrLtVCyw"
          />
          <Section>
            <div className="container">
              <RichText text="test" />
            </div>
          </Section>
        </div>
      </Layout>
    )
  }
}

export default AboutUs

export const pageQuery = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
