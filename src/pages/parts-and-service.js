import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './privacy-and-data.module.css'
import Layout from '../components/layout'
import PrimaryHero from '../components/primary-hero/primary-hero'
import Featured from '../components/featured/featured'

class PartsAndService extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [partsAndServiceData] = get(this, 'props.data.allContentfulPage.edges')

    const partsAndServicesPrimaryHero = partsAndServiceData.node.pageModules[0]
    const partsAndServicesFeaturedOne = partsAndServiceData.node.pageModules[1]
    const partsAndServicesFeaturedTwo = partsAndServiceData.node.pageModules[2]

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet
            title={partsAndServiceData.node.metaTitle ? partsAndServiceData.node.metaTitle : siteTitle}
            meta={[
                {name: 'keywords', content: partsAndServiceData.node.keywords.keywords},
                {name: 'description', content: partsAndServiceData.node.metaDescription.metaDescription},
                {name: 'og:description', content: partsAndServiceData.node.ogDescription},
            ]}
          />
          <PrimaryHero
            heading={partsAndServicesPrimaryHero.heading}
            image={partsAndServicesPrimaryHero.backgroundImage.fluid}
          />
          <Featured
            title={partsAndServicesFeaturedOne.title}
            headline={partsAndServicesFeaturedOne.headline}
            body={partsAndServicesFeaturedOne.body.body}
            image={partsAndServicesFeaturedOne.image.fluid.src}
            imageRight={partsAndServicesFeaturedOne.imageRight}
            greyBackground={partsAndServicesFeaturedOne.greyBackground}
          />
          <Featured
            title={partsAndServicesFeaturedTwo.title}
            headline={partsAndServicesFeaturedTwo.headline}
            body={partsAndServicesFeaturedTwo.body.body}
            image={partsAndServicesFeaturedTwo.image.fluid.src}
            imageRight={partsAndServicesFeaturedTwo.imageRight}
            greyBackground={partsAndServicesFeaturedTwo.greyBackground}
          />
        </div>
      </Layout>
    )
  }
}

export default PartsAndService

export const pageQuery = graphql`
  query PartsAndServiceQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: "2TLqoXsnFc0dDJM3MAXpMI" } }) {
      edges {
        node {
          title
          metaTitle
          keywords {
            keywords
          }
          ogDescription
          metaDescription {
            metaDescription
          }
          pageModules {
            __typename
            ... on ContentfulPrimaryHero {
              heading
              backgroundImage {
                fluid(maxWidth: 2000, quality: 50) {
                  aspectRatio
                  sizes
                  src
                  srcSet
                  tracedSVG
                }
              }
            }
            __typename
            ... on ContentfulFeatured {
              title
              headline
              body {
                body
              }
              image {
                fluid {
                  src
                }
              }
              imageRight
              greyBackground
            }
          }
        }
      }
    }
  }
`
