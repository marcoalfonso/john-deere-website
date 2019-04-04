import React from 'react'
import styles from './rich-text.module.css'

export default ({ body, richText }) => (
  <div>
    { body && <div className={styles.richText} dangerouslySetInnerHTML={{__html: body}} /> }
    { richText && <div className={styles.richText} dangerouslySetInnerHTML={{__html: richText}} /> }
  </div>
)
