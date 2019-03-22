import './header.css'

import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import logos from './logos.svg'

class Header extends Component {
  render() {
    return (
      <StaticQuery
        query={headerQuery}
        render={data => {
        console.log("data", data)
        const headerData =  data.allContentfulHeader.edges[0].node
        return (
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
              <div className="brand-section">
                <Navbar.Brand href="/">
                  <img
                    src={logos}
                    width="100"
                    className="d-inline-block align-top logo"
                    alt="RDO Equipment Logo"
                  />
                </Navbar.Brand>

              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href={headerData.firstLinkUrl}>{headerData.firstLinkText}</Nav.Link>
                  <NavDropdown title={headerData.secondLinkText} id="basic-nav-dropdown">
                    <div className="mega-menu-content">
                      {data.allContentfulCategory.edges.map(({ node }, index) => (
                        <div key={index} className="mega-menu">
                          <NavDropdown.Item href={node.slug}>{node.title}</NavDropdown.Item>
                          {node.subcategories.map(( subcategory , index) => (
                            <NavDropdown.Item key={index} href={subcategory.slug}>{subcategory.title}</NavDropdown.Item>
                          ))}
                        </div>
                      ))}
                    </div>
                  </NavDropdown>
                  <Nav.Link href={headerData.thirdLinkUrl}>{headerData.thirdLinkText}</Nav.Link>
                  <Nav.Link href={headerData.fourthLinkUrl}>{headerData.fourthLinkText}</Nav.Link>
                  <Nav.Link href={headerData.fifthLinkUrl}>{headerData.fifthLinkText}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      )}} />
    )
  }
}

export default Header;

export const headerQuery = graphql`
  query HeaderQuery {
    allContentfulCategory {
      edges {
        node {
          title
          slug
          subcategories {
            title
            slug
          }
        }
      }
    }
    allContentfulHeader(filter: { contentful_id: { eq: "2KIXZfF1UA7whZ5eRQagug" } }) {
      edges {
        node {
          siteLogo {
            fluid {
              src
            }
          }
          firstLinkText
          firstLinkUrl
					secondLinkText
          secondLinkUrl
          thirdLinkText
          thirdLinkUrl
          fourthLinkText
          fourthLinkUrl
          fifthLinkText
          firstLinkUrl
        }
      }
    }
  }
`
