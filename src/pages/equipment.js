import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './equipment.module.css'
import Layout from "../components/layout"
import ArticlePreview from '../components/article-preview'
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import ProductCarousel from '../components/product-carousel/product-carousel'
import ContentCardSection from '../components/content-card-section/content-card-section'

class EquipmentIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const categories = get(this, 'props.data.allContentfulCategory.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <PrimaryHero
            heading="There’s a Deere for everything."
          />
          <TextInterlude
            miniHeadline="ABOUT JOHN DEERE."
            headline="Our Strategy for Success."
            ctaText="Read more"
          />
          <ContentCardSection>
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-xs-12 col-md-4">
                  <TextInterlude
                    headline="Construction & Mining"
                    ctaText="Read more"
                  />
                </div>
                <div className="col-xs-12 col-md-4">
                  <TextInterlude
                    headline="Forestry"
                    ctaText="Read more"
                  />
                </div>
              </div>
            </div>
          </ContentCardSection>
          <ProductCarousel />
        </div>
      </Layout>
    )
  }
}

export default EquipmentIndex

export const pageQuery = graphql`
  query EquipmentQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
