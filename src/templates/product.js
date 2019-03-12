import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Container from 'react-bootstrap/Container'

import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import styles from './product.module.css'

class ProductTemplate extends React.Component {
  render() {
    const product = get(this.props, 'data.contentfulProduct')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${product.title} | ${siteTitle}`} />
          {/*<div className={styles.hero}>
            <Img className={styles.heroImage} alt={product.title} fluid={product.heroImage.fluid} />
            <Container>
              <h1>{product.productModelNumber}</h1>
              <h2>{product.title}</h2>
              <a href="#" className={styles.btnYellow}>Download brochure</a>
            </Container>
          </div>*/}
          <Hero data={product}>
            <h1>{product.productModelNumber}</h1>
            <h2>{product.title}</h2>
            <a href="#" className={styles.btnYellow}>Download brochure</a>
          </Hero>
          <div className="wrapper">
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
          </div>
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
