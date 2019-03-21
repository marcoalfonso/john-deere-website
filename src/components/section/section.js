import React from 'react'
import styles from './section.module.css'

export default ({ children  }) => {
  return (
    <section className={styles.section}>
      {children}
    </section>
  )
}
