import React, {Component} from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import _ from 'lodash'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import styles from './subcategory-carousel.module.css'

class SubcategoryCarousel extends Component {
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
          query SubcategoryCarouselQuery {
            allContentfulCategory(sort: { fields: [title], order: ASC }) {
              edges {
                node {
                  title
                  subcategories {
                    title
                    slug
                    thumbnailImage {
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
        `}
        render={data => (
          <section className="container">
            <div className={`product-carousel ` + styles.productCarouselContainer}>
              <Tabs defaultActiveKey={this.props.defaultActiveKey}>
                {data.allContentfulCategory.edges.map(({ node }, index) => {
                  const slides = node.subcategories.length;

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
                                <Slide className={styles.slide}>
                                  <div className={styles.slideContainer}>
                                    <a href={`/${subcategory.slug}`}>
                                      <img className={styles.image} alt={subcategory.title} src={subcategory.thumbnailImage.fluid.src} />
                                      <div className={styles.title}>
                                        {subcategory.title}
                                      </div>
                                    </a>
                                  </div>
                                </Slide>
                              </div>
                            ))}
                          </Slider>
                          {slides > 6 &&
                            <div>
                              <ButtonBack className={styles.backButton}>
                                <div className={styles.chevronArrowLeft}></div>
                              </ButtonBack>
                              <ButtonNext className={styles.nextButton}>
                                <div className={styles.chevronArrowRight}></div>
                              </ButtonNext>
                            </div>
                          }
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

export default SubcategoryCarousel
