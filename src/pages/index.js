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
import SubcategoryCarousel from '../components/subcategory-carousel/subcategory-carousel'
import Section from '../components/section/section'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [homepage] = get(this, 'props.data.allContentfulPage.edges')

    const homepagePrimaryHero = homepage.node.pageModules[0]
    const homepageSecondaryHero = homepage.node.pageModules[1]
    const homepageCarousel1 = homepage.node.pageModules[2]
    const homepageVideo = homepage.node.pageModules[3]
    const homepageTextInterlude = homepage.node.pageModules[4]
    const homepageFeatured1 = homepage.node.pageModules[5]
    const homepageFeatured2 = homepage.node.pageModules[6]
    const homepageCarousel2 = homepage.node.pageModules[7]

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
          ctaLink={homepagePrimaryHero.ctaLink}
          image={homepagePrimaryHero.backgroundImage.fluid}
        />
        <SubcategoryCarousel />
        <SecondayHero
          firstSlideHeadline={homepageSecondaryHero.firstSlideHeadline}
          fistSlideCtaText={homepageSecondaryHero.fistSlideCtaText}
          fistSlideCtaLink={homepageSecondaryHero.fistSlideCtaLink}
          fistSlideImage={homepageSecondaryHero.firstSlideImage.fluid.src}
          secondSlideHeadline={homepageSecondaryHero.secondSlideHeadline}
          secondSlideCtaText={homepageSecondaryHero.secondSlideCtaText}
          secondSlideCtaLink={homepageSecondaryHero.secondSlideCtaLink}
          secondSlideImage={homepageSecondaryHero.secondSlideImage.fluid.src}
        />
        <Carousel
          title={homepageCarousel1.title}
          headline={homepageCarousel1.headline}
          ctaText={homepageCarousel1.ctaText}
          ctaLink={homepageCarousel1.ctaLink}
          images={homepageCarousel1.images}
        />
        <Video
          title={homepageVideo.title}
          headline={homepageVideo.headline}
          youTubeVideoId={homepageVideo.youTubeVideoId}
        />
        <TextInterlude
          headline={homepageTextInterlude.headline}
          body={homepageTextInterlude.body.body}
        />
        <Featured
          title={homepageFeatured1.title}
          headline={homepageFeatured1.headline}
          image={homepageFeatured1.image.fluid.src}
          imageRight={homepageFeatured1.imageRight}
          ctaText={homepageFeatured1.ctaText}
          ctaLink={homepageFeatured1.ctaLink}
        />
        <Featured
          title={homepageFeatured2.title}
          headline={homepageFeatured2.headline}
          image={homepageFeatured2.image.fluid.src}
          imageRight={homepageFeatured2.imageRight}
          ctaText={homepageFeatured2.ctaText}
          ctaLink={homepageFeatured2.ctaLink}
        />
        <Carousel
          title={homepageCarousel2.title}
          headline={homepageCarousel2.headline}
          ctaText={homepageCarousel2.ctaText}
          ctaLink={homepageCarousel2.ctaLink}
          images={homepageCarousel2.images}
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
              ctaText
              ctaLink
              image {
                fluid {
                  src
                }
              }
              imageRight
            }
            __typename
            ... on ContentfulTextInterlude {
              headline
              body {
                body
              }
            }
            __typename
            ... on ContentfulVideo {
              title
              headline
              youTubeVideoId
            }
          }
        }
      }
    }
  }
`
