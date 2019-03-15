import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import Featured from '../components/featured/featured'
import SecondayHero from '../components/secondary-hero/secondary-hero'
import Video from '../components/video/video'
import Carousel from '../components/carousel/carousel'

// Static image place holders to be removed
import FeaturedImage from './homepage_science_img.png'
import CarouselImage from './homepage_carousel_placeholder.png'
import SubCarouselImage from './homepage_sub_carousel_placeholder.png'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const products = get(this, 'props.data.allContentfulProduct.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        <PrimaryHero data={author.node}
          title="Nothing's built<br/>like a Deere."
          callToAction="Discover more"
        />
        <SecondayHero
          image={CarouselImage}
          headline="Applied power."
          callToAction="Discover more"
        />
        <Carousel
          image={SubCarouselImage}
          title="THE RDO STORY"
          headline="Everything you need to apply."
          callToAction="Learn more"
          callToActionLink="/careers"
        />
        <Featured
          image={FeaturedImage}
          title="JOHN DEERE"
          headline="Designed by science."
          body="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
        />
        <TextInterlude
          headline="Haul of famer."
          body="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
        />
        {/*<div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>*/}
        <Video
          title="JOHN DEERE"
          headline="Get more bang<br/>from your truck."
          videoId="HQvSrLtVCyw"
        />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              # maxHeight: 480
              # resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
