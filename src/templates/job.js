import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Layout from '../components/layout'
import Section from '../components/section/section'
import PrimaryHero from '../components/primary-hero/primary-hero'
import RichText from '../components/rich-text/rich-text'

import careersHeroImage from '../components/careers_page_hero.png'
import styles from './job.module.css'

class JobTemplate extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <div className={styles.jobTemplate}>
          <Helmet
            title={`${this.props.pageContext.title} | RDO Equipment`}
            meta={[
                {name: 'description', content: `${this.props.pageContext.title} | RDO Equipment`}
            ]}
          />
          <PrimaryHero
            heading="Join our team."
            image={careersHeroImage}
          />
          <Section>
            <div className="container">
              <a href="/careers"><div className={styles.backLink}>Back to Job list</div></a>
              <div className={styles.title}>{this.props.pageContext.title}</div>

              <RichText richText={ documentToHtmlString(this.props.pageContext.richText.json) } />
              <div className={styles.pdfSection}>
                <p>We strongly encourage all candidates to learn more about the <a href="https://rdoequipment.com" target="_blank">Global RDO Equipment</a> business and read the <a href={this.props.pageContext.pdf} target="_blank">full job description here</a>.</p>
                <p>To apply, email your resume and cover letter to <a href="mailto:careers@rdoequipment.com.au">careers@rdoequipment.com.au</a> and include the role and location in the subject title of your email.</p>
                <p>Prospective candidates are advised that interviews will commence immediately. All candidates must have the right to work in Australia.</p>
                <p>External agencies have not been engaged for this role, so please ensure you apply directly to be considered.</p>
              </div>
              <a href="/careers"><div className={styles.backLink}>Back to Job list</div></a>
            </div>
          </Section>
        </div>
      </Layout>
    )
  }
}

export default JobTemplate
