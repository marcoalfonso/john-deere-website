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

    const homepagePrimaryHero = homepage.node.pageModules[0]
    const homepageSecondaryHero = homepage.node.pageModules[1]
    const homepageCarousel = homepage.node.pageModules[2]
    const homepageFeatured = homepage.node.pageModules[3]
    const homepageTextInterlude = homepage.node.pageModules[4]
    console.log("homepageCarousel", homepageCarousel)
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
          heading={homepagePrimaryHero.heading}
          ctaText={homepagePrimaryHero.ctaText}
          image={homepagePrimaryHero.backgroundImage.fluid}
        />
        <ProductCarousel />
        <SecondayHero
          firstSlideHeadline={homepageSecondaryHero.firstSlideHeadline}
          fistSlideCtaText={homepageSecondaryHero.fistSlideCtaText}
          fistSlideCtaLink={homepageSecondaryHero.fistSlideCtaLink}
          fistSlideImage={homepageSecondaryHero.firstSlideImage.fluid.src}
          secondSlideHeadline={homepageSecondaryHero.secondSlideHeadline}
          secondSlideCtaText={homepageSecondaryHero.secondSlideCtaText}
          secondSlideCtaLink={homepageSecondaryHero.secondSlideCtaLink}
          secondSlideImage={homepageSecondaryHero.secondSlideImage.fluid.src}
          thirdSlideHeadline={homepageSecondaryHero.thirdSlideHeadline}
          thirdSlideCtaText={homepageSecondaryHero.thirdSlideCtaText}
          thirdSlideCtaLink={homepageSecondaryHero.thirdSlideCtaLink}
          thirdSlideImage={homepageSecondaryHero.thirdSlideImage.fluid.src}
        />
        <Carousel
          title={homepageCarousel.title}
          headline={homepageCarousel.headline}
          ctaText={homepageCarousel.ctaText}
          ctaLink={homepageCarousel.ctaLink}
          images={homepageCarousel.images}
          body=""
        />
        <Featured
          title={homepageFeatured.title}
          headline={homepageFeatured.headline}
          body={homepageFeatured.body.body}
          image={homepageFeatured.image.fluid.src}
        />
        <TextInterlude
          headline={homepageTextInterlude.headline}
          body={homepageTextInterlude.body.body}
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
            __typename
            ... on ContentfulCarousel {
              title
              headline
              ctaText
              ctaLink
              images {
                fluid {
                  src
                }
              }
            }
            __typename
            ... on ContentfulFeatured {
              title
              headline
              body {
                body
              }
              image {
                fluid {
                  src
                }
              }
            }
            __typename
            ... on ContentfulTextInterlude {
              headline
              body {
                body
              }
            }
          }
        }
      }
    }
  }
`
