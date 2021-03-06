import React, {Component} from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import _ from 'lodash'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import styles from './product-carousel.module.css'

class ProductCarousel extends Component {
  state = { width: 0, height: 0 }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
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
                        }
                      }
                      productHeroImage {
                        fluid {
                          aspectRatio
                          sizes
                          src
                          srcSet
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
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
                          lockOnWindowScroll={true}
                          naturalSlideWidth={471}
                          naturalSlideHeight={371}
                          totalSlides={slides}
                          visibleSlides={this.state.width > 991 ? 6 : this.state.width > 556 ? 3 : 2}
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

export default ProductCarousel
