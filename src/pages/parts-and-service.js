import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './privacy-and-data.module.css'
import Layout from "../components/layout"
import RichText from '../components/rich-text/rich-text'

class PartsAndService extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [partsAndServiceData] = get(this, 'props.data.allContentfulPage.edges')

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
          <div className="headline">{partsAndServiceData.node.title}</div>
          <div className="container page-container">
            <RichText body={partsAndServiceData.node.pageModules[0].body.body} />
          </div>
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
            ... on ContentfulRichText {
              body {
                body
              }
            }
          }
        }
      }
    }
  }
`
