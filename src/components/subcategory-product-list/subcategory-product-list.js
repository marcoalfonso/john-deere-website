import React from 'react'
import Section from '../../components/section/section'
import styles from './subcategory-product-list.module.css'

export default ({products}) => {
  return (
    <section className={styles.subcategoryProductListContainer}>
      <div className="container">
        {products.map((product, index) =>  (
          <div className={`row ` + styles.productRow} key={index}>
            <div className={`col-xs-12 col-md-5 ` + styles.imageCol }>
              <img className={styles.image} alt={product.productModelNumber + ' ' + product.productModelName} src={product.productThumbnailImage.fluid.src} />
            </div>
            <div className="col-xs-12 col-md-7">
              { product.productModelName && <div className={styles.productModelName}>{product.productModelNumber + ' ' + product.productModelName}</div> }
              { product.productOverview.productOverview && <div className={styles.productOverview} dangerouslySetInnerHTML={{__html: product.productOverview.productOverview}} /> }
              <div className={styles.buttons}>
                { product.slug && <a href={product.slug}><div className={styles.callToAction}>See product</div></a> }
                { product.primaryCtaUrl && <a href={product.primaryCtaUrl}><div className={styles.downloadBrochure}>Download brochure</div></a> }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
)}
