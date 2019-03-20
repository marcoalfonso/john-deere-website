import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ProductPrimaryHero from '../components/product-primary-hero/product-primary-hero'
import CarouselProductPage from '../components/carousel-product-page/carousel-product-page'
import ProductCarousel from '../components/product-carousel/product-carousel'
import ProductFeatures from '../components/product-features/product-features'
import ProductExtraLinks from '../components/product-extra-links/product-extra-links'
import Video from '../components/video/video'
import styles from './product.module.css'

class ProductTemplate extends React.Component {

  render() {
    const product = get(this.props, 'data.contentfulProduct')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet
            title={product.metadataTitle ? product.metadataTitle : siteTitle}
            meta={[
                {name: 'keywords', content: product.metadataKeyword},
                {name: 'description', content: product.metadataDescription.metadataDescription},
            ]}
          />
          <ProductPrimaryHero
            productModelName={product.productModelName}
            productModelNumber={product.productModelNumber}
            primaryCtaText={product.primaryCtaText}
            primaryCtaUrl={product.primaryCtaUrl}
            productHeroImage={product.productHeroImage.fluid}
          />
          <CarouselProductPage
            images={product.imageCarousel}
            headline={product.productModelName}
            body={product.productOverview.productOverview}
            primaryCtaText={product.primaryCtaText}
            primaryCtaUrl={product.primaryCtaUrl}
          />
          {product.videoYoutubeRef &&
            <Video
              title={product.videoSubTitle}
              headline={product.videoTitle}
              videoId={product.videoYoutubeRef}
            />
          }
          {product.blockContent1BlockTitle &&
            <ProductExtraLinks
              blockContent1BlockTitle={product.blockContent1BlockTitle}
              blockContent1BlockDescription={product.blockContent1BlockDescription}
              blockContent1PrimaryLinkText={product.blockContent1PrimaryLinkText}
              blockContent1PrimaryLink={product.blockContent1PrimaryLink}
              blockContent1SecondaryLinkText={product.blockContent1SecondaryLinkText}
              blockContent1SecondaryLink={product.blockContent1SecondaryLink}
            />
          }
          {product.esiIncludeFeaturesData &&
            <ProductFeatures features={product.esiIncludeFeaturesData} />
          }
          <div className="row justify-content-around">
            <div className="col-xs-12 text-center">
              <div className={styles.anotherProductHeadline}>Looking for another product?</div>
            </div>
          </div>
          <ProductCarousel />
        </div>
      </Layout>
    )
  }
}

export default ProductTemplate

export const pageQuery = graphql`
  query ProductBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      metadataTitle
      metadataDescription {
        metadataDescription
      }
      metadataKeyword
      productModelName
      productModelNumber
      productOverview {
        productOverview
      }
      primaryCtaText
      primaryCtaUrl
      esiIncludeFeaturesData {
        Description
        TitleQuestion
      }
      videoTitle
      videoSubTitle
      videoYoutubeRef
      blockContent1BlockTitle
      blockContent1BlockDescription {
        blockContent1BlockDescription
      }
      blockContent1PrimaryLinkText
      blockContent1PrimaryLink
      blockContent1SecondaryLinkText
      blockContent1SecondaryLink
      imageCarousel {
        fluid {
          aspectRatio
          sizes
          src
          srcSet
          tracedSVG
        }
      }
      productHeroImage {
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
`
