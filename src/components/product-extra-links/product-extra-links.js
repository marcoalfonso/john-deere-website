import React from 'react'
import ContentCard from '../../components/content-card/content-card'
import styles from './product-extra-links.module.css'

export default ({
    blockContent1BlockTitle,
    blockContent1BlockDescription,
    blockContent1PrimaryLinkText,
    blockContent1PrimaryLink,
    blockContent1SecondaryLinkText,
    blockContent1SecondaryLink
  }) => {
  return (
    <section className={styles.productExtraLinksSection}>
      <div className={`container ` + styles.productExtraLinksContainer}>
        <div className="row justify-content-around">
          <div className="col-xs-12 col-md-6">
            { blockContent1BlockTitle && <div className={styles.title}>{blockContent1BlockTitle}</div> }
            { blockContent1BlockDescription && <div className={styles.description} dangerouslySetInnerHTML={{__html: blockContent1BlockDescription.blockContent1BlockDescription}} /> }
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-3 text-center">
            { blockContent1PrimaryLinkText && <a href={blockContent1PrimaryLink}><div className={styles.blockContentLink} dangerouslySetInnerHTML={{__html: blockContent1PrimaryLinkText}} /></a>}
          </div>
          <div className="col-xs-12 col-md-3 text-center">
            { blockContent1SecondaryLinkText && <a href={blockContent1SecondaryLink}><div className={styles.blockContentLink} dangerouslySetInnerHTML={{__html: blockContent1SecondaryLinkText}} /></a>}
          </div>
        </div>
      </div>
    </section>
)}
