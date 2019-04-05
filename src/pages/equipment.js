import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Helmet from 'react-helmet'
import styles from './equipment.module.css'
import Layout from '../components/layout'
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import SubcategoryCarousel from '../components/subcategory-carousel/subcategory-carousel'
import Section from '../components/section/section'
import RichText from '../components/rich-text/rich-text'

import ConstructionImage from '../components/construction-and-mining.png'
import ForestryImage from '../components/forestry.png'

class Equipment extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [equipmentData] = get(this, 'props.data.allContentfulPage.edges')

    const EquipmentPrimaryHero = equipmentData.node.pageModules[0]
    const EquipmentTextInterlude1 = equipmentData.node.pageModules[1]
    const EquipmentTextInterlude2 = equipmentData.node.pageModules[2]
    const EquipmentRichText = equipmentData.node.pageModules[3]

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet
            title={equipmentData.node.metaTitle ? equipmentData.node.metaTitle : siteTitle}
            meta={[
                {name: 'keywords', content: equipmentData.node.keywords.keywords},
                {name: 'description', content: equipmentData.node.metaDescription.metaDescription},
                {name: 'og:description', content: equipmentData.node.ogDescription},
            ]}
          />
          <PrimaryHero
            heading={EquipmentPrimaryHero.heading}
            image={EquipmentPrimaryHero.backgroundImage.fluid}
          />
          <TextInterlude
            body={EquipmentTextInterlude1.body.body}
          />
          <Section>
            <div className="container">
              <div className="row no-gutters">
                <div className="col-xs-12 col-md-6">
                  <div className={styles.image} style={{backgroundImage: `url(${ConstructionImage})`}}>
                    <div className={styles.categoryText}>
                      <div className={styles.categoryTitle}>Construction & Mining</div>
                      <a href="/construction-and-mining"><div className={styles.callToAction}>Discover more</div></a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div className={styles.category}>
                    <div className={styles.image} style={{backgroundImage: `url(${ForestryImage})`}}>
                      <div className={styles.categoryText}>
                        <div className={styles.categoryTitle}>Forestry</div>
                        <a href="/forestry" ><div className={styles.callToAction}>Discover more</div></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <SubcategoryCarousel />
          <TextInterlude
            body={EquipmentTextInterlude2.body.body}
          />
          <div className="container page-container">
            <RichText
              richText={documentToHtmlString(EquipmentRichText.richText.json)}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Equipment

export const pageQuery = graphql`
  query EquipmentQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: "NsTVK8kyGmU73D1UYMfnC" } }) {
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
                fluid {
                  src
                }
              }
            }
            __typename
            ... on ContentfulTextInterlude {
              body {
                body
              }
            }
            __typename
            ... on ContentfulRichText {
              richText {
                json
              }
            }
          }
        }
      }
    }
  }
`
