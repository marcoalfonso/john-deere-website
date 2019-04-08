import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './about-us.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
import Featured from '../components/featured/featured'
import Video from '../components/video/video'
import Section from '../components/section/section'
import RichText from '../components/rich-text/rich-text'

class AboutUs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [aboutUsData] = get(this, 'props.data.allContentfulPage.edges')

    const AboutUsPrimaryHero = aboutUsData.node.pageModules[0]
    const AboutUsTextInterlude = aboutUsData.node.pageModules[1]
    const AboutUsVideo = aboutUsData.node.pageModules[2]
    const AboutUsRichText = aboutUsData.node.pageModules[3]
    const AboutUsFeaturedOne = aboutUsData.node.pageModules[4]
    const AboutUsFeaturedTwo = aboutUsData.node.pageModules[5]
    const AboutUsFeaturedThree = aboutUsData.node.pageModules[6]
    const AboutUsFeaturedFour = aboutUsData.node.pageModules[7]
    const AboutUsFeaturedFive = aboutUsData.node.pageModules[8]
    const AboutUsRichTextTwo = aboutUsData.node.pageModules[9]

    return (
      <Layout location={this.props.location} >
        <div className={styles.aboutUs}>
          <Helmet
            title={aboutUsData.node.metaTitle ? aboutUsData.node.metaTitle : siteTitle}
            meta={[
                {name: 'keywords', content: aboutUsData.node.keywords.keywords},
                {name: 'description', content: aboutUsData.node.metaDescription.metaDescription},
                {name: 'og:description', content: aboutUsData.node.ogDescription},
            ]}
          />
          <PrimaryHero
            heading={AboutUsPrimaryHero.heading}
            image={AboutUsPrimaryHero.backgroundImage.fluid.src}
          />
          <TextInterlude
            body={AboutUsTextInterlude.body.body}
          />
          <Video
            title={AboutUsVideo.title}
            headline={AboutUsVideo.headline}
            youTubeVideoId={AboutUsVideo.youTubeVideoId}
          />
          <Section>
            <div className="container">
              <RichText
                richText={documentToHtmlString(AboutUsRichText.richText.json)}
              />
            </div>
          </Section>
          <Featured
            title={AboutUsFeaturedOne.title}
            headline={AboutUsFeaturedOne.headline}
            body={AboutUsFeaturedOne.body.body}
            image={AboutUsFeaturedOne.image.fluid.src}
            imageRight={AboutUsFeaturedOne.imageRight}
            greyBackground={AboutUsFeaturedOne.greyBackground}
          />
          <Featured
            title={AboutUsFeaturedTwo.title}
            headline={AboutUsFeaturedTwo.headline}
            body={AboutUsFeaturedTwo.body.body}
            image={AboutUsFeaturedTwo.image.fluid.src}
            imageRight={AboutUsFeaturedTwo.imageRight}
            greyBackground={AboutUsFeaturedTwo.greyBackground}
          />
          <Featured
            title={AboutUsFeaturedThree.title}
            headline={AboutUsFeaturedThree.headline}
            body={AboutUsFeaturedThree.body.body}
            image={AboutUsFeaturedThree.image.fluid.src}
            imageRight={AboutUsFeaturedThree.imageRight}
            greyBackground={AboutUsFeaturedThree.greyBackground}
          />
          <Featured
            title={AboutUsFeaturedFour.title}
            headline={AboutUsFeaturedFour.headline}
            body={AboutUsFeaturedFour.body.body}
            image={AboutUsFeaturedFour.image.fluid.src}
            imageRight={AboutUsFeaturedFour.imageRight}
            greyBackground={AboutUsFeaturedFour.greyBackground}
          />
          <Featured
            title={AboutUsFeaturedFive.title}
            headline={AboutUsFeaturedFive.headline}
            body={AboutUsFeaturedFive.body.body}
            image={AboutUsFeaturedFive.image.fluid.src}
            imageRight={AboutUsFeaturedFive.imageRight}
            greyBackground={AboutUsFeaturedFive.greyBackground}
          />
          <Section>
            <div className="container">
              <RichText
                richText={documentToHtmlString(AboutUsRichTextTwo.richText.json)}
              />
            </div>
          </Section>
        </div>
      </Layout>
    )
  }
}

export default AboutUs

export const pageQuery = graphql`
  query AboutUsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: "2QkS41nfnuE0O4r4J4X3pE" } }) {
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
              backgroundImage {
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
            __typename
            ... on ContentfulVideo {
              title
              headline
              youTubeVideoId
            }
            __typename
            ... on ContentfulRichText {
              richText {
                json
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
              imageRight
              greyBackground
            }
          }
        }
      }
    }
  }
`
