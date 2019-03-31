import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import styles from './carousel-product-page.module.css'

export default ({ images, title, headline, body, primaryCtaText, primaryCtaUrl }) => {

  return (
  <section className={styles.carouselComponent}>
    <div className={`container ` + styles.carouselContainer}>
      <div className={`row ` + styles.flexRow}>
        <div className={`col-xs-12 col-md-6 ` + styles.productInformationRow}>
          { title && <div className={styles.title} dangerouslySetInnerHTML={{__html: title}} />}
          { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} />}
          { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} />}
          { primaryCtaText && <a href={primaryCtaUrl}><div className={styles.primaryCtaText} dangerouslySetInnerHTML={{__html: primaryCtaText}} /></a>}
        </div>
        <div className="col-xs-12 col-md-6">
          { images &&
            <CarouselProvider
              lockOnWindowScroll={true}
              naturalSlideWidth={570}
              naturalSlideHeight={400}
              totalSlides={images.length}
            >
              <Slider className={styles.slider}>
                {images.map(( image, index) => (
                  <div key={index}>
                    <Slide index={index}>
                      <img className={styles.image} src={image.fluid.src} />
                    </Slide>
                  </div>
                ))}
              </Slider>
              {images.length > 1 &&
                <div>
                  <ButtonBack className={styles.backButton}>
                    <div className={styles.chevronArrowLeft}></div>
                  </ButtonBack>
                  <ButtonNext className={styles.nextButton}>
                    <div className={styles.chevronArrowRight}></div>
                  </ButtonNext>
                  <DotGroup className={styles.dots}/>
                </div>
              }
            </CarouselProvider>
          }
        </div>
      </div>
    </div>
  </section>
)}
