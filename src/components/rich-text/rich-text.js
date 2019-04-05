import React from 'react'
import styles from './rich-text.module.css'

export default ({ body, richText }) => (
  <div className={styles.richTextContainer}>
    { body && <div className={styles.richText} dangerouslySetInnerHTML={{__html: body}} /> }
    { richText && <div className={styles.richText} dangerouslySetInnerHTML={{__html: richText}} /> }
  </div>
)
