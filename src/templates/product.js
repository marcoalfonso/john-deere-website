import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Container from 'react-bootstrap/Container'

import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import VideoSection from '../components/video-section/video-section'
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
          <Hero data={product} title={product.productModelNumber} subtitle={product.title} button="Download brochure" />
          {/*<div className="wrapper">
            <h1 className="section-headline">{product.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {product.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: product.body.childMarkdownRemark.html,
              }}
            />
          </div>*/}
          <VideoSection
            title="JOHN DEERE"
            headline="Get more bang<br/>from your truck."
            video={product.youTubeVideoId}
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
      title
      productModelNumber
      youTubeVideoId
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
