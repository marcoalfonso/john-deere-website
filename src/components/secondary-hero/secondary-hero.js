import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './secondary-hero.module.css'

export default ({ image, children, headline, callToAction }) => {

  return (
    <section className={styles.secondaryHero}>
      <CarouselProvider
        naturalSlideWidth={1075}
        naturalSlideHeight={520}
        totalSlides={2}
      >
        <Slider>
          <Slide index={0}>
            <img className={styles.image} src={image} />
            <div className={styles.overlay}>
              { headline && <div className={styles.headline}>{headline}</div>}
              { callToAction && <div className={styles.callToAction}>{callToAction}</div>}
        		</div>
          </Slide>
          <Slide index={1}>
            <img className={styles.image} src={image} />
            <div className={styles.overlay}>
              { headline && <div className={styles.headline}>{headline}</div>}
              { callToAction && <div className={styles.callToAction}>{callToAction}</div>}
        		</div>
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
    </section>
)}
