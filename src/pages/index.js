import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './index.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import Featured from '../components/featured/featured'
import SecondayHero from '../components/secondary-hero/secondary-hero'
import Video from '../components/video/video'
import Carousel from '../components/carousel/carousel'
import ContentCard from '../components/content-card/content-card'
import ProductCarousel from '../components/product-carousel/product-carousel'
import ContentCardSection from '../components/content-card-section/content-card-section'

// Static image place holders to be removed
import FeaturedImage from './homepage_science_img.png'
import CarouselImage from './homepage_carousel_placeholder.png'
import SubCarouselImage from './homepage_sub_carousel_placeholder.png'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [homepage] = get(this, 'props.data.allContentfulPage.edges')
    const categories = get(this, 'props.data.allContentfulCategory.edges')

    const homePageCarousel = homepage.node.pageModules[0]

    return (
      <Layout location={this.props.location} >
        <Helmet title={siteTitle} />
        <PrimaryHero
          heading={homePageCarousel.heading}
          ctaText={homePageCarousel.ctaText}
          image={homePageCarousel.backgroundImage.fluid}
        />
        <ProductCarousel
          categories={categories}
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

        <Video
          title="JOHN DEERE"
          headline="Get more bang<br/>from your truck."
          videoId="HQvSrLtVCyw"
        />
        <ContentCardSection>
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-xs-12 col-md-4">
                <ContentCard
                  headline="Built to last."
                  body="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
                />
              </div>
              <div className="col-xs-12 col-md-4">
                <ContentCard
                  headline="Proven design."
                  body="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
                />
              </div>
            </div>
          </div>
        </ContentCardSection>
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
    allContentfulPage(filter: { contentful_id: { eq: "49UoS1ol9WQMe4aXB5subo" } }) {
      edges {
        node {
          pageModules {
            heading
            ctaText
            ctaLink
            backgroundImage {
              fluid {
                aspectRatio
                sizes
                src
                srcSet
                tracedSVG
              }
            }
          }
        }
      }
    }
    allContentfulCategory {
      edges {
        node {
          title
          products {
            title
            slug
            productImage {
              fluid {
                aspectRatio
                sizes
                src
                srcSet
                tracedSVG
              }
            }
            heroImage {
              fluid {
                aspectRatio
                sizes
                src
                srcSet
                tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
