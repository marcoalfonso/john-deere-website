import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './privacy-and-data.module.css'
import Layout from "../components/layout"
import TextInterlude from '../components/text-interlude/text-interlude'

class PrivacyAndData extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={siteTitle} />
          <TextInterlude
            headline="Privacy And Data."
          />
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
  }
`
