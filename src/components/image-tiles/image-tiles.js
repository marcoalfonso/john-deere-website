import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import styles from './image-tiles.module.css'

export default ({ images }) => (
    <div className={styles.imageTiles}>
      <div className={styles.title}>More pictures</div>
      <div className={styles.desktopTiles}>
        <div className={styles.rowOne}>
          {images.slice(0,5).map((image, index ) => (
            <div className={styles.column}>
              <img src={image.fluid.src}/>
            </div>
          ))}
        </div>
        <div>
          <div className={styles.rowTwo}>
            {images.slice(5,10).map((image, index ) => (
              <div className={styles.column}>
                <img src={image.fluid.src}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mobileTiles}>
        <CarouselProvider
          lockOnWindowScroll={true}
          naturalSlideWidth={570}
          naturalSlideHeight={400}
          totalSlides={images.length}
          visibleSlides={1}
        >
          <Slider className={styles.slider}>
            <div>
              {images.map((image, index ) => (
                <div key={index}>
                  <Slide index={index} className={styles.slide}>
                    <img className={styles.image} src={image.fluid.src} />
                  </Slide>
                </div>
              ))}
            </div>
          </Slider>
          <div>
            <ButtonBack className={styles.backButton}>
              <div className={styles.chevronArrowLeft}></div>
            </ButtonBack>
            <ButtonNext className={styles.nextButton}>
              <div className={styles.chevronArrowRight}></div>
            </ButtonNext>
          </div>
        </CarouselProvider>

      </div>
    </div>

)
