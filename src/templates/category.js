import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './category.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import ProductCarousel from '../components/product-carousel/product-carousel'

class CategoryTemplate extends React.Component {

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
          {/*<TextInterlude
            headline="Our Strategy for Success."
            body="ABOUT JOHN DEERE."
          />*/}
          <ProductCarousel defaultActiveKey={this.props.pageContext.title}/>
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryTemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
