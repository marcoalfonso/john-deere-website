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
    return (
      <Layout location={this.props.location} >
        <div>
          <Helmet
            title={`${this.props.pageContext.title} | RDO Equipment`}
            meta={[
                {name: 'description', content: `Explore John Deere ${this.props.pageContext.title} on the RDO Equipment Australia website.`},
                {name: 'og:description', content: `Explore John Deere ${this.props.pageContext.title} on the RDO Equipment Australia website.`}
            ]}
          />
          <PrimaryHero
            heading={this.props.pageContext.title}
            image={this.props.pageContext.heroImage.src}
            imageMobile={this.props.pageContext.heroImageMobile.src}
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
