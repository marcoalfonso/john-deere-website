import React from 'react'
import YouTube from '@u-wave/react-youtube'
import styles from './video.module.css'

export default ({ title, headline, videoId }) => {
  return (
  <section className={styles.videoComponent}>
    <div className={`container ` + styles.videoContainer}>
      { title && <div className={styles.title} dangerouslySetInnerHTML={{__html: title}} />}
      { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} />}
      <div className={styles.videoWrap}>
        <div className={styles.videoResponsive}>
          <YouTube
            video={videoId}
          />
        </div>
      </div>
    </div>
  </section>
)}
