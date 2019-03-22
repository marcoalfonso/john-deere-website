import React, {Component} from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import _ from 'lodash'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import windowSize from 'react-window-size'
import styles from './product-carousel.module.css'

class ProductCarousel extends Component {
  render() {
    return (
      <StaticQuery
        query={productCarouselQuery}
        render={data => (
          <section className="container">
            <div className={`product-carousel ` + styles.productCarouselContainer}>
              <Tabs defaultActiveKey={this.props.defaultActiveKey}>
                {data.allContentfulCategory.edges.map(({ node }, index) => {
                  const slides = _.sumBy(node.subcategories, 'products.length');

                  return (
                    <Tab eventKey={node.title} title={node.title} key={index}>
                      <div>
                        <CarouselProvider
                          naturalSlideWidth={471}
                          naturalSlideHeight={471}
                          totalSlides={slides}
                          visibleSlides={this.props.windowWidth > 991 ? 6 : this.props.windowWidth > 556 ? 3 : 2}
                          className={styles.carousel}
                        >
                          <Slider className={styles.slider}>
                            {node.subcategories.map(( subcategory , index) => (
                              <div key={index}>
                                {subcategory.products.map((product, i) => (
                                  <div key={i}>
                                    <Slide index={i} className={styles.slide}>
                                      <div className={styles.slideContainer}>
                                        <Link to={`/${product.slug}`}>
                                          <Img className={styles.image} alt={product.productModelName} fluid={product.productThumbnailImage.fluid} />
                                          {/*<img className={styles.image} alt={product.node.title} src={product.node.heroImage.fluid.src} />*/}
                                          <div className={styles.title}>
                                            {product.productModelName}
                                          </div>
                                        </Link>
                                      </div>
                                    </Slide>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </Slider>
                          <ButtonBack className={styles.backButton}>
                            <div className={styles.chevronArrowLeft}></div>
                          </ButtonBack>
                          <ButtonNext className={styles.nextButton}>
                            <div className={styles.chevronArrowRight}></div>
                          </ButtonNext>
                        </CarouselProvider>
                      </div>
                    </Tab>
                    )
                  }
                )}
              </Tabs>
            </div>
          </section>
        )}
      />

    )
  }
}

export default windowSize(ProductCarousel);

export const productCarouselQuery = graphql`
  query CategoryQuery {
    allContentfulCategory {
      edges {
        node {
          title
          subcategories {
            products {
              productModelName
              slug
              productThumbnailImage {
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
        }
      }
    }
  }
`
