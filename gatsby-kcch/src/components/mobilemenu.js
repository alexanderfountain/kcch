import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import * as variable from "../components/variables"

const MobileContainer = styled.div`
  display: none;
  position: relative;
  height: 30px;
  width: 55px;
  text-align: center;
  margin: 0px;
  padding: 0px;
  margin-top: 40px;
  .dark-mode {
    display: flex !important;
    justify-content: center;
  }
  li {
    font-size: 30px;
    font-weight: 600;
    margin: 0px 0px 20px 0px !important;
    padding: 0px;
    list-style: none;
    &:focus {
      outline: none !important;
    }
    a {
      display: block !important;
      text-align: center;
      color: #000000;
      text-decoration: none;
      &:focus {
        outline: none !important;
      }
    }
    ul {
      flex-direction: column;
      justify-content: center !important;
      width: 100% !important;
      margin: 0px;
      padding: 0px;
    }
  }
  @media (max-width: ${variable.tabletWidth}) {
    display: block;
    .bm-menu-wrap {
      top: 0px;
      width: 100% !important;
      ul {
        margin-top: 10px;
        li {
          a {
            font-size: 14px !important;
          }
        }
      }
    }
    .bm-overlay {
      left: 0;
      top: 0;
    }
    .bm-cross {
      background: #000000;
    }
    .bm-burger-bars {
      background: #000000;
      border-radius: 10px;
    }
    .bm-menu {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
  @media (max-width: ${variable.mobileWidth}) {
    display: block;
  }
`

class Mobilemenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query MobileMenuQuery {
            site {
              siteMetadata {
                mainmenu {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <MobileContainer>
              <a href="#" className="bm-burger-button .hamburger-box"></a>
              <Menu
                right
                noOverlay
                isOpen={this.state.menuOpen}
                onStateChange={state => this.handleStateChange(state)}
              >
                <li>
                  <Link to="/" onClick={() => this.toggleMenu()}>
                    <img src={variable.logo} />
                  </Link>
                </li>
                {data.site.siteMetadata.mainmenu.map((menuitem, index) => (
                  <li key={index}>
                    <Link
                      activeStyle={{ color: variable.black }}
                      to={menuitem.link}
                      onClick={() => this.toggleMenu()}
                    >
                      {menuitem.name}
                    </Link>
                  </li>
                ))}
              </Menu>
            </MobileContainer>
          </>
        )}
      />
    )
  }
}

export default Mobilemenu
