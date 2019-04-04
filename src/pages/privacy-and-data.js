import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './privacy-and-data.module.css'
import Layout from "../components/layout"
import RichText from '../components/rich-text/rich-text'

class PrivacyAndData extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [privacyAndData] = get(this, 'props.data.allContentfulPage.edges')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet
            title={privacyAndData.node.metaTitle ? privacyAndData.node.metaTitle : siteTitle}
            meta={[
                {name: 'keywords', content: privacyAndData.node.keywords.keywords},
                {name: 'description', content: privacyAndData.node.metaDescription.metaDescription},
                {name: 'og:description', content: privacyAndData.node.ogDescription},
            ]}
          />
          <div className="headline">{privacyAndData.node.title}</div>
          <div className="container page-container">
            <RichText richText={documentToHtmlString(privacyAndData.node.pageModules[0].richText.json)} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PrivacyAndData

export const pageQuery = graphql`
  query PrivacyAndDataQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: "2TGeJz9uh3wfw48gHJEIrH" } }) {
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
