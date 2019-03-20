import React from 'react'
import ContentCardSection from '../../components/content-card-section/content-card-section'
import ContentCard from '../../components/content-card/content-card'
import styles from './product-features.module.css'

export default ({features}) => {
  console.log("features", features)
  return (
    <ContentCardSection>
      <div className={`container ` + styles.containerProductFeatures}>
        <div className="row justify-content-around">
          <div className="col-xs-12 text-center">
            <div>JOHN DEERE</div>
            <div className={styles.featuresHeadline}>Features</div>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) =>  (
            <div className="col-md-4">
              <ContentCard
                headlineUnderline={feature.TitleQuestion}
                body={feature.Description}
              />
            </div>
          ))}
        </div>
      </div>
    </ContentCardSection>
)}
