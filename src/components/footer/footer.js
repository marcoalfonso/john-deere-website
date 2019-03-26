import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './footer.css'
import logos from './logos.svg'
import linkedin from './linkedin.svg'
import podcast from './podcast.svg'
import youtube from './youtube.svg'
import twitter from './twitter.svg'

class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query FooterQuery {
            allContentfulFooter(filter: { contentful_id: { eq: "3QEYRqS8Yb0lVB1xloj9Lr" } }) {
              edges {
                node {
                  logo {
                    file {
                      url
                    }
                  }
                  youTubeLink
                  twitterLink
                  podcastLink
                  linkedinLink
                  copyright
                  firstLinkText
                  firstLinkUrl
        					secondLinkText
                  secondLinkUrl
                  thirdLinkText
                  thirdLinkUrl
                  fourthLinkText
                  fourthLinkUrl
                  fifthLinkText
                  fifthLinkUrl
                  sixthLinkText
                  sixthLinkUrl
                  seventhLinkText
                  seventLinkUrl
                  eightLinkText
                  eightLinkUrl
                }
              }
            }
          }
        `}
        render={data => {

        const footerData =  data.allContentfulFooter.edges[0].node
        return (
          <section className="footer">
            <div className="container">
              <div className="footer-inner">
                <div className="row">
                  <div className="col footer-logos">
                    <img
                      src={footerData.logo.file.url}
                      width="100"
                      className="d-inline-block align-top logo"
                      alt="RDO Equipment Logo"
                    />
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-xs-12 col-md-4 col-lg-2">
                    <ul>
                      { footerData.firstLinkText && <li><a href={footerData.firstLinkUrl}>{footerData.firstLinkText}</a></li> }
                      { footerData.secondLinkText && <li><a href={footerData.secondLinkUrl}>{footerData.secondLinkText}</a></li> }
                      { footerData.thirdLinkText && <li><a href={footerData.thirdLinkUrl}>{footerData.thirdLinkText}</a></li> }
                      { footerData.fourthLinkText && <li><a href={footerData.fourthLinkUrl}>{footerData.fourthLinkText}</a></li> }
                    </ul>
                  </div>
                  <div className="col-xs-12 col-md-4 col-lg-2">
                    <ul>
                      { footerData.fifthLinkText && <li><a href={footerData.fifthLinkUrl}>{footerData.fifthLinkText}</a></li> }
                      { footerData.sixthLinkText && <li><a href={footerData.sixthLinkUrl}>{footerData.sixthLinkText}</a></li> }
                      { footerData.seventhLinkText && <li><a href={footerData.seventLinkUrl}>{footerData.seventhLinkText}</a></li> }
                      { footerData.eightLinkText && <li><a href={footerData.eightLinkUrl}>{footerData.eightLinkText}</a></li> }
                    </ul>
                  </div>
                </div>
                <div className="row justify-content-between social-row">
                  <div className="col-xs-12 col-md-6">
                    <span>More</span>
                    { footerData.linkedinLink &&
                      <a href={footerData.linkedinLink}>
                        <img
                          src={linkedin}
                          width="100"
                          className="d-inline-block align-top social"
                          alt="RDO Linkedin"
                        />
                      </a>
                    }
                    { footerData.twitterLink &&
                      <a href={footerData.twitterLink}>
                        <img
                          src={twitter}
                          width="100"
                          className="d-inline-block align-top social"
                          alt="RDO Twitter"
                        />
                      </a>
                    }
                    { footerData.youTubeLink &&
                      <a href={footerData.youTubeLink}>
                        <img
                          src={youtube}
                          width="100"
                          className="d-inline-block align-top social"
                          alt="RDO YouTube"
                        />
                      </a>
                    }
                    { footerData.podcastLink &&
                      <a href={footerData.podcastLink}>
                        <img
                          src={podcast}
                          width="100"
                          className="d-inline-block align-top social"
                          alt="RDO podcast"
                        />
                      </a>
                    }
                  </div>
                  <div className="col-xs-12 col-md-6 copyright">
                    <div>{footerData.copyright}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      )}} />
    )
  }
}

export default Footer
