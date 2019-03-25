import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './subcategory.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'

class SubCategoryTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={siteTitle} />
          <PrimaryHero
            heading="There’s a Deere for everything."
          />
          <TextInterlude
            headline="Our Strategy for Success."
            body="ABOUT JOHN DEERE."
          />
        </div>
      </Layout>
    )
  }
}

export default SubCategoryTemplate

export const pageQuery = graphql`
  query SubCategoryTemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
