import React, {Component} from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import windowSize from 'react-window-size'
import styles from './product-carousel.module.css'

class ProductCarousel extends Component {
  render() {
    console.log("categories", this.props.categories)
    console.log("products", this.props.products)
    console.log("this.props.windowWidth", this.props.windowWidth)

    return (
      <section className={`product-carousel ` + styles.productCarouselContainer}>
        <Tabs>
          {this.props.categories.map(({ node }, index) => (
            <Tab eventKey={node.title} title={node.title} key={index}>
              <CarouselProvider
                naturalSlideWidth={471}
                naturalSlideHeight={471}
                totalSlides={node.products.length}
                visibleSlides={this.props.windowWidth > 991 ? 6 : this.props.windowWidth > 556 ? 3 : 2}
                className={styles.carousel}
              >
                <Slider className={styles.slider}>
                  {node.products.map((product, i) => (
                    <Slide index={i} key={i} className={styles.slide}>
                      <div className={styles.slideContainer}>
                        <Link to={`/equipment/${product.slug}`}>
                          <Img className={styles.image} alt={product.title} fluid={product.productImage.fluid} />
                          {/*<img className={styles.image} alt={product.node.title} src={product.node.heroImage.fluid.src} />*/}
                          <div className={styles.title}>
                            {product.title}
                          </div>
                        </Link>
                      </div>
                    </Slide>
                  ))}
                </Slider>
                <ButtonBack className={styles.backButton}>
                  <div className={styles.chevronArrowLeft}></div>
                </ButtonBack>
                <ButtonNext className={styles.nextButton}>
                  <div className={styles.chevronArrowRight}></div>
                </ButtonNext>
              </CarouselProvider>
            </Tab>
          ))}
        </Tabs>
      </section>
    )
  }
}

export default windowSize(ProductCarousel);
