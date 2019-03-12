import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './footer.css'
import logo from './logo.png'

export default ({ data }) => (
  <section className="footer">
    <Container>
      <div className="footer-inner">
        <Row>
          <Col>
            <img
              src={logo}
              width="100"
              className="d-inline-block align-top logo"
              alt="RDO Equipment Logo"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>About us</li>
              <li>The RDO story</li>
              <li>50 year video</li>
              <li>RDO Team</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Equipment</li>
              <li>About John Deere</li>
              <li>Construction & mining</li>
              <li>Forestry</li>
              <li>Parts information</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Servicing</li>
              <li>RDO Blurb</li>
              <li>Technical Services</li>
              <li>Breakdowns</li>
              <li>After Hours Servicing</li>
              <li>Warranty</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Careers</li>
              <li>Why RDO</li>
              <li>Current Jobs</li>
              <li>Core Values</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Other pages</li>
              <li>Privacy & Data</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Contact Us</li>
              <li>News</li>
              <li>Podcast</li>
              <li>Get Social</li>
              <li>Health & Safety</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  </section>
)
