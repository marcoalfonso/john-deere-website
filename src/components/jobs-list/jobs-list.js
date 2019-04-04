import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styles from './jobs-list.module.css'
import Section from '../../components/section/section'

class JobsList extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query JobsListQuery {
             allContentfulLocation {
              edges {
                node {
                  title
                  sublocations {
                    title
                    slug
                    jobs {
                      title
                      slug
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {

        const jobsListData =  data.allContentfulLocation.edges

        return (
          <div>
            { jobsListData.map(({ node }, index) => (
              <div className={`${styles.jobsListSection} ${index % 2 == 0 ? styles.jobsListSectionGrey : styles.jobsListSectionWhite}`}>
                <div className="container">
                  <div className={styles.locationTitle}>{node.title}</div>
                    <div className="row justify-content-around">
                      { node.sublocations.map((sublocation, index) => (
                        <div className={`col-xs-12 col-sm-12 col-md-3 col-lg-3 ` + styles.jobsColumn}>
                          <div className={styles.sublocationTitle}>{sublocation.title}</div>
                            { sublocation.jobs.map((job, index) => (
                              <div className={styles.jobTitle}>
                                <a href={`/${sublocation.slug}/${job.slug}/`}>
                                  {job.title}
                                </a>
                              </div>
                            ))}
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
      )}} />
    )
  }
}

export default JobsList
