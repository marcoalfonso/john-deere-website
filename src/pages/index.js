import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import Featured from '../components/featured/featured'
import SecondayHero from '../components/secondary-hero/secondary-hero'
import Video from '../components/video/video'
import Carousel from '../components/carousel/carousel'
import ContentCard from '../components/content-card/content-card'
import ProductCarousel from '../components/product-carousel/product-carousel'
import Section from '../components/section/section'

// Static image place holders to be removed
import FeaturedImage from './homepage_science_img.png'
import CarouselImage from './homepage_carousel_placeholder.png'
import SubCarouselImage from './homepage_sub_carousel_placeholder.png'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [homepage] = get(this, 'props.data.allContentfulPage.edges')

    const homePageCarousel = homepage.node.pageModules[0]
    const homePageSecondaryCarousel = homepage.node.pageModules[1]
    console.log("homePageSecondaryCarousel", homePageSecondaryCarousel)
    return (
      <Layout location={this.props.location} >
        <Helmet
          title={homepage.node.metaTitle ? homepage.node.metaTitle : siteTitle}
          meta={[
              {name: 'keywords', content: homepage.node.keywords.keywords},
              {name: 'description', content: homepage.node.metaDescription.metaDescription},
              {name: 'og:description', content: homepage.node.ogDescription},
          ]}
        />
        <PrimaryHero
          heading={homePageCarousel.heading}
          ctaText={homePageCarousel.ctaText}
          image={homePageCarousel.backgroundImage.fluid}
        />
        <ProductCarousel />
        <SecondayHero
          firstSlideHeadline={homePageSecondaryCarousel.firstSlideHeadline}
          fistSlideCtaText={homePageSecondaryCarousel.fistSlideCtaText}
          fistSlideCtaLink={homePageSecondaryCarousel.fistSlideCtaLink}
          fistSlideImage={homePageSecondaryCarousel.firstSlideImage.fluid.src}
          secondSlideHeadline={homePageSecondaryCarousel.secondSlideHeadline}
          secondSlideCtaText={homePageSecondaryCarousel.secondSlideCtaText}
          secondSlideCtaLink={homePageSecondaryCarousel.secondSlideCtaLink}
          secondSlideImage={homePageSecondaryCarousel.secondSlideImage.fluid.src}
          thirdSlideHeadline={homePageSecondaryCarousel.thirdSlideHeadline}
          thirdSlideCtaText={homePageSecondaryCarousel.thirdSlideCtaText}
          thirdSlideCtaLink={homePageSecondaryCarousel.thirdSlideCtaLink}
          thirdSlideImage={homePageSecondaryCarousel.thirdSlideImage.fluid.src}
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
        <Section>
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
        </Section>
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
          metaTitle
          keywords {
            keywords
          }
          ogDescription
          metaDescription {
            metaDescription
          }
          pageModules {
            __typename
            ... on ContentfulPrimaryHero {
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
            __typename
            ... on ContentfulSecondaryHero {
              firstSlideHeadline
              fistSlideCtaText
              fistSlideCtaLink
              firstSlideImage {
                fluid {
                  src
                }
              }
              secondSlideHeadline
              secondSlideCtaText
              secondSlideCtaLink
              secondSlideImage {
                fluid {
                  src
                }
              }
              thirdSlideHeadline
              thirdSlideCtaText
              thirdSlideCtaLink
              thirdSlideImage {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
