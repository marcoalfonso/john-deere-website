import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Container from 'react-bootstrap/Container'

import Layout from '../components/layout'
import PrimaryHero from '../components/primary-hero/primary-hero'
import Video from '../components/video/video'
import styles from './product.module.css'

class ProductTemplate extends React.Component {
  render() {
    const product = get(this.props, 'data.contentfulProduct')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    console.log("product", product)
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${product.title} | ${siteTitle}`} />
          <PrimaryHero
            heading={product.productModelNumber + '<br/>' + product.title}
            ctaText="Download brochure"
            image={product.heroImage.fluid}
          />
          <Video
            title="JOHN DEERE"
            headline="Get more bang<br/>from your truck."
            videoId={product.youTubeVideoId}
          />
        </div>
      </Layout>
    )
  }
}

export default ProductTemplate

export const pageQuery = graphql`
  query ProductBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      productModelName
      productModelNumber
      videoYoutubeRef
      productHeroImage {
        fluid {
          aspectRatio
          sizes
          src
          srcSet
          tracedSVG
        }
      }
    }
  }
`
