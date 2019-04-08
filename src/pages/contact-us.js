import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './contact-us.module.css'
import Layout from "../components/layout"
import TextInterlude from '../components/text-interlude/text-interlude'
import ProductCarousel from '../components/product-carousel/product-carousel'
import Section from '../components/section/section'
import ContactUsMap from '../components/contact-us-map.png'

class ContactUs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [contactUsData] = get(this, 'props.data.allContentfulPage.edges')

    const ContactUsTextInterlude = contactUsData.node.pageModules[0]

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet
            title={contactUsData.node.metaTitle ? contactUsData.node.metaTitle : siteTitle}
            meta={[
                {name: 'keywords', content: contactUsData.node.keywords.keywords},
                {name: 'description', content: contactUsData.node.metaDescription.metaDescription},
                {name: 'og:description', content: contactUsData.node.ogDescription},
            ]}
          />
          <div className="headline">{contactUsData.node.title}</div>
          <div className="container text-center">
            <img className={styles.image} src={ContactUsMap} alt={contactUsData.node.title} />
          </div>
          <TextInterlude
            body={ContactUsTextInterlude.body.body}
          />
        </div>
      </Layout>
    )
  }
}

export default ContactUs

export const pageQuery = graphql`
  query ContactUsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: "469hdaHXAVzwR8RAGgEZkd" } }) {
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
            ... on ContentfulTextInterlude {
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
