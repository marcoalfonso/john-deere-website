import './header.css'

import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      windowLocation: ''
    }
  }

  componentDidMount() {
    const windowLocation = window.location.pathname.substring(0, window.location.pathname.length - 1)
    this.setState({ windowLocation: windowLocation })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
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
                    file {
                      url
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
                  fifthLinkUrl
                }
              }
            }
          }
        `}
        render={data => {

        const headerData =  data.allContentfulHeader.edges[0].node
        return (
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <div className="container">
              <div className="brand-section">
                <Navbar.Brand href="/">
                  <img
                    src={headerData.siteLogo.file.url}
                    width="100"
                    className="d-inline-block align-top logo"
                    alt="RDO Equipment Logo"
                  />
                </Navbar.Brand>

              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" activeKey={this.state.windowLocation} onSelect>
                  <Nav.Link href={headerData.firstLinkUrl}>{headerData.firstLinkText}</Nav.Link>
                  <NavDropdown title={headerData.secondLinkText} id="basic-nav-dropdown">
                    <div className="mega-menu-content">
                      {data.allContentfulCategory.edges.map(({ node }, index) => (
                        <div key={index} className="mega-menu">
                          <NavDropdown.Item href={`/${node.slug}`}>{node.title}</NavDropdown.Item>
                          {node.subcategories.map(( subcategory , index) => (
                            <NavDropdown.Item key={index} href={`/${subcategory.slug}`}>{subcategory.title}</NavDropdown.Item>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="header-about-link"><NavDropdown.Item href={`/equipment`}>About John Deere</NavDropdown.Item></div>
                  </NavDropdown>
                  <Nav.Link href={headerData.thirdLinkUrl}>{headerData.thirdLinkText}</Nav.Link>
                  <Nav.Link href={headerData.fourthLinkUrl}>{headerData.fourthLinkText}</Nav.Link>
                  <Nav.Link href={headerData.fifthLinkUrl}>{headerData.fifthLinkText}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
      )}} />
    )
  }
}

export default Header
