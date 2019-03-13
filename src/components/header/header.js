import './header.css'

import React from 'react'
import { Link } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import logos from './logos.svg'

export default () => (
  <Navbar collapseOnSelect expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={logos}
          width="100"
          className="d-inline-block align-top logo"
          alt="RDO Equipment Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about-us/">The RDO Story</NavDropdown.Item>
            <NavDropdown.Item href="/contact-us/">50 year video</NavDropdown.Item>
            <NavDropdown.Item href="/careers/">RDO Team</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Equipment</Nav.Link>
          <NavDropdown title="Careers" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about-us/">Why RDO</NavDropdown.Item>
            <NavDropdown.Item href="/contact-us/">Current Jobs</NavDropdown.Item>
            <NavDropdown.Item href="/careers/">Core Values</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
