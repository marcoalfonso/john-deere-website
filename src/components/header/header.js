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
          <Nav.Link href="/about-us">About us</Nav.Link>
          <NavDropdown title="Equipment" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about-us/">About John Deere</NavDropdown.Item>
            <NavDropdown.Item href="/contact-us/">Construction & Mining</NavDropdown.Item>
            <NavDropdown.Item href="/careers/">Forestry</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/parts-and-service">Parts & Service</Nav.Link>
          <Nav.Link href="/careers">Careers</Nav.Link>
          <Nav.Link href="/contact-us">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
