import React from 'react'
import './footer.css'
import logos from './logos.svg'

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
        <div className="row">
          <div className="col-xs-12 col-md-4 col-lg-2">
            <ul>
              <li>About us</li>
              <li>The RDO story</li>
              <li>50 year video</li>
              <li>RDO Team</li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <ul>
              <li>Equipment</li>
              <li>About John Deere</li>
              <li>Construction & mining</li>
              <li>Forestry</li>
              <li>Parts information</li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <ul>
              <li>Servicing</li>
              <li>RDO Blurb</li>
              <li>Technical Services</li>
              <li>Breakdowns</li>
              <li>After Hours Servicing</li>
              <li>Warranty</li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <ul>
              <li>Careers</li>
              <li>Why RDO</li>
              <li>Current Jobs</li>
              <li>Core Values</li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <ul>
              <li>Other pages</li>
              <li>Privacy & Data</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-2">
            <ul>
              <li>Contact Us</li>
              <li>News</li>
              <li>Podcast</li>
              <li>Get Social</li>
              <li>Health & Safety</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)
