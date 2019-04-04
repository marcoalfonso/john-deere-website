import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './about-us.module.css'
import Layout from "../components/layout"
import PrimaryHero from '../components/primary-hero/primary-hero'
import TextInterlude from '../components/text-interlude/text-interlude'
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
            image={AboutUsPrimaryHero.backgroundImage.fluid}
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
          }
        }
      }
    }
  }
`
