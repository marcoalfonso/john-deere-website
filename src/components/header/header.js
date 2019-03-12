import './header.css'

import React from 'react'
import { Link } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import logo from './logo.png'

export default () => (
  <Navbar collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="100"
          className="d-inline-block align-top logo"
          alt="RDO Equipment Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="About Us" id="basic-nav-dropdown">
            <NavDropdown.Item href="/about-us/">About Us</NavDropdown.Item>
            <NavDropdown.Item href="/contact-us/">Contact Us</NavDropdown.Item>
            <NavDropdown.Item href="/careers/">Careers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Equipment" id="basic-nav-dropdown">
          </NavDropdown>
          <NavDropdown title="Servicing" id="basic-nav-dropdown">
          </NavDropdown>
          <NavDropdown title="Careers" id="basic-nav-dropdown">
          </NavDropdown>
          <NavDropdown title="Contact us" id="basic-nav-dropdown">
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
