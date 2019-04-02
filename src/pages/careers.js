import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './careers.module.css'
import Layout from "../components/layout"

class Careers extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [careersData] = get(this, 'props.data.allContentfulPage.edges')

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
          <div className="headline">Join Our Team</div>
          <div className="container page-container">
            <div>As RDO Equipment prepares to launch its operations in Australia, numerous positions are available at our locations in Australia — especially in sales and service. Our team members are a vital part of our organisation and are a key stakeholder in our success.</div>

          </div>
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
        }
      }
    }
  }
`
