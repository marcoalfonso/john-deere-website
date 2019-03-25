import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './terms-and-conditions.module.css'
import Layout from "../components/layout"
import TextInterlude from '../components/text-interlude/text-interlude'

class PartsAndService extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={siteTitle} />
          <TextInterlude
            headline="Parts And Service."
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
  }
`
