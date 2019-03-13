import React from 'react'
import YouTube from '@u-wave/react-youtube'
import styles from './video-section.module.css'

export default ({ title, headline, videoId }) => {
  return (
  <section className={`container ` + styles.videoContainer}>
    { title && <div className={styles.title} dangerouslySetInnerHTML={{__html: title}} />}
    { headline && <div className={styles.headline} dangerouslySetInnerHTML={{__html: headline}} />}
    <div className={styles.videoResponsive}>
      <YouTube
        videoId={videoId}
      />
    </div>
  </section>
)}
