import React from 'react'
import './footer.css'
import logos from './logos.svg'
import linkedin from './linkedin.svg'
import podcast from './podcast.svg'
import youtube from './youtube.svg'
import twitter from './twitter.svg'

export default ({ data }) => (
  <section className="footer">
    <div className="container">
      <div className="footer-inner">
        <div className="row">
          <div className="col">
            <img
              src={logos}
              width="100"
              className="d-inline-block align-top logo"
              alt="RDO Equipment Logo"
            />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xs-12 col-md-4 col-lg-2">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="/about-us">About us</a></li>
              <li><a href="/equipment">Equipment</a></li>
              <li><a href="/parts-and-service">Parts & Service</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <ul>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact-us">Contact us</a></li>
              <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              <li><a href="/privacy-and-data">Privacy & Data</a></li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-between social-row">
          <div className="col-xs-12 col-md-6">
            <span>More</span>
            <img
              src={linkedin}
              width="100"
              className="d-inline-block align-top social"
              alt="RDO Equipment Logo"
            />
            <img
              src={twitter}
              width="100"
              className="d-inline-block align-top social"
              alt="RDO Equipment Logo"
            />
            <img
              src={youtube}
              width="100"
              className="d-inline-block align-top social"
              alt="RDO Equipment Logo"
            />
            <img
              src={podcast}
              width="100"
              className="d-inline-block align-top social"
              alt="RDO Equipment Logo"
            />
          </div>
          <div className="col-xs-12 col-md-6 text-right">
            <div>Copyright @ 2019. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
