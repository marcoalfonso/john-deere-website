import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import styles from './carousel.module.css'

export default ({ image, title, headline, body, callToAction, callToActionLink }) => {
  return (
  <section className={styles.carouselComponent}>
    <div className={`container ` + styles.carouselContainer}>
      <div className={`row ` + styles.flexRow}>
        <div className="col-xs-12 col-md-6">
          { title && <div className={styles.title} dangerouslySetInnerHTML={{__html: title}} />}
          { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} />}
          { body && <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} />}
          { callToAction && <a href={callToActionLink}><div className={styles.callToAction} dangerouslySetInnerHTML={{__html: callToAction}} /></a>}
        </div>
        <div className="col-xs-12 col-md-6">
          { image &&
            <CarouselProvider
              naturalSlideWidth={570}
              naturalSlideHeight={400}
              totalSlides={2}
            >
              <Slider>
                <Slide index={0}>
                  <img className={styles.image} src={image} />
                </Slide>
                <Slide index={1}>
                  <img className={styles.image} src={image} />
                </Slide>
              </Slider>
              <ButtonBack className={styles.backButton}>
                <div className={styles.chevronArrowLeft}></div>
              </ButtonBack>
              <ButtonNext className={styles.nextButton}>
                <div className={styles.chevronArrowRight}></div>
              </ButtonNext>
              <DotGroup className={styles.dots}/>
            </CarouselProvider>
          }
        </div>
      </div>
    </div>
  </section>
)}
