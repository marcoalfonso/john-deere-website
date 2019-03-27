import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './subcategory.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import SubcategoryProductList from '../components/subcategory-product-list/subcategory-product-list'

class SubCategoryTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet title={siteTitle} />
          <PrimaryHero
            heading={this.props.pageContext.title}
            image={this.props.pageContext.heroImage}
          />
          <SubcategoryProductList
            products={this.props.pageContext.products}
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
