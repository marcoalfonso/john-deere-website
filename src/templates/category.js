import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './category.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import SubcategoryCarousel from '../components/subcategory-carousel/subcategory-carousel'
import RichText from '../components/rich-text/rich-text'
import Section from '../components/section/section'

class CategoryTemplate extends React.Component {

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
          />
          <TextInterlude
            headline={this.props.pageContext.headline}
            body={this.props.pageContext.body}
          />
          <SubcategoryCarousel defaultActiveKey={this.props.pageContext.title}/>
          <div className={`container ` + styles.longFormText}>
            <div className="row">
              <div className="col">
                <RichText
                  body={this.props.pageContext.longFormText}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate
