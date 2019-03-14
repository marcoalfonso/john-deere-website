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
        			<h1>hello</h1>
        			<p>hello</p>
        			<button>hello</button>
        		</div>
          </Slide>
        </Slider>
        <ButtonBack className={styles.backButton}>Back</ButtonBack>
        <ButtonNext className={styles.nextButton}>Next</ButtonNext>
        <DotGroup className={styles.dotGroup}/>
      </CarouselProvider>
    </section>
)}
