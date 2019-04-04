import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './careers.module.css'
import Layout from '../components/layout'
import Section from '../components/section/section'
import PrimaryHero from '../components/primary-hero/primary-hero'
import RichText from '../components/rich-text/rich-text'
import JobsList from '../components/jobs-list/jobs-list'

class Careers extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [careersData] = get(this, 'props.data.allContentfulPage.edges')

    const CareersPrimaryHero = careersData.node.pageModules[0]
    const CareersRichTextOne = careersData.node.pageModules[1]
    const CareersRichTextTwo = careersData.node.pageModules[2]

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet
            title={careersData.node.metaTitle ? careersData.node.metaTitle : siteTitle}
            meta={[
                {name: 'keywords', content: careersData.node.keywords.keywords},
                {name: 'description', content: careersData.node.metaDescription.metaDescription},
                {name: 'og:description', content: careersData.node.ogDescription},
            ]}
          />
          <PrimaryHero
            heading={CareersPrimaryHero.heading}
            image={CareersPrimaryHero.backgroundImage.fluid}
          />
          <Section>
            <div className="container">
              <RichText
                richText={documentToHtmlString(CareersRichTextOne.richText.json)}
              />
            </div>
          </Section>
          <JobsList />
          <Section>
            <div className="container">
              <RichText
                richText={documentToHtmlString(CareersRichTextTwo.richText.json)}
              />
            </div>
          </Section>
        </div>
      </Layout>
    )
  }
}

export default Careers

export const pageQuery = graphql`
  query CareersQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: "2zY9ZHTW2Xq0MEsyVOHhv1" } }) {
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
