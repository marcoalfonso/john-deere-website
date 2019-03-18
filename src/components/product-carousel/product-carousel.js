import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

import styles from './product-carousel.module.css'

export default ({ categories, products }) => {
  console.log("categories", categories)
  console.log("products", products.length)
  return (
    <section className={styles.productCarouselContainer}>
      <Tabs>
        {categories.map((category, i) => (
          <Tab eventKey={category} title={category} key={i}>
            <CarouselProvider
              naturalSlideWidth={271}
              naturalSlideHeight={271}
              totalSlides={products.length}
              visibleSlides={7}
              className={styles.carousel}
            >
              <Slider className={styles.slider}>
                {products.map((product, i) => (
                  <Slide index={i} key={i} className={styles.slide}>
                    <div className={styles.slideContainer}>
                      {/*<Img className={styles.image} alt={product.node.title} fluid={product.node.heroImage.fluid} />*/}
                      <img className={styles.image} alt={product.node.title} src={product.node.heroImage.fluid.src} />
                      <div className={styles.title}>
                        <Link to={`/equipment/${product.node.slug}`}>{product.node.title}</Link>
                      </div>
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
)}
