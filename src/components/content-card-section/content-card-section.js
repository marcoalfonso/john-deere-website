import React from 'react'
import styles from './content-card-section.module.css'

export default ({ children  }) => {
  return (
    <section className={styles.contentCardSection}>
      {children}
    </section>
  )
}
