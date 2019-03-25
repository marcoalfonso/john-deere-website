import React from 'react'
import styles from './rich-text.module.css'

export default ({ body }) => (
  <div>
    { body && <div className={styles.richText} dangerouslySetInnerHTML={{__html: body}} /> }
  </div>
)
