import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import styles from './secondary-hero.module.css'

export default ({
    firstSlideHeadline,
    fistSlideCtaText,
    fistSlideCtaLink,
    fistSlideImage,
    secondSlideHeadline,
    secondSlideCtaText,
    secondSlideCtaLink,
    secondSlideImage
  }) => {
  const slidesNumber = [firstSlideHeadline, secondSlideHeadline]

  return (
    <section className={styles.secondaryHero}>
      <CarouselProvider
        naturalSlideWidth={1075}
        naturalSlideHeight={520}
        totalSlides={slidesNumber.length}
      >
        <Slider className={styles.slider}>
          <Slide index={0} className={styles.slide}>
            <img className={styles.image} src={fistSlideImage} />
            <div className={styles.overlay}>
              { firstSlideHeadline && <div className={styles.headline}>{firstSlideHeadline}</div>}
              { fistSlideCtaText && <a href={fistSlideCtaLink}><div className={styles.callToAction}>{fistSlideCtaText}</div></a>}
        		</div>
          </Slide>
          <Slide index={1} className={styles.slide}>
            <img className={styles.image} src={secondSlideImage} />
            <div className={styles.overlay}>
              { secondSlideHeadline && <div className={styles.headline}>{secondSlideHeadline}</div>}
              { secondSlideCtaText && <a href={secondSlideCtaLink}><div className={styles.callToAction}>{secondSlideCtaText}</div></a>}
        		</div>
          </Slide>
        </Slider>
        {slidesNumber.length > 1 &&
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
    </section>
)}
