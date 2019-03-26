import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './terms-and-conditions.module.css'
import Layout from "../components/layout"
import RichText from '../components/rich-text/rich-text'

class TermsAndConditions extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [termsAndConditionsData] = get(this, 'props.data.allContentfulPage.edges')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet
            title={termsAndConditionsData.node.metaTitle ? termsAndConditionsData.node.metaTitle : siteTitle}
            meta={[
                {name: 'keywords', content: termsAndConditionsData.node.keywords.keywords},
                {name: 'description', content: termsAndConditionsData.node.metaDescription.metaDescription},
                {name: 'og:description', content: termsAndConditionsData.node.ogDescription},
            ]}
          />
          <div className="headline">{termsAndConditionsData.node.title}</div>
          <div className="container page-container">
            <RichText body={termsAndConditionsData.node.pageModules[0].body.body} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default TermsAndConditions

export const pageQuery = graphql`
  query TermsAndConditionsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: "1kwXD3xHbnL10TZ7L9UQWQ" } }) {
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
