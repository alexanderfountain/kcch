import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../container"
import * as variable from "../variables"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ThemeContext from "../../context/ThemeContext"
import MobileMenu from "../mobilemenu"

const HeaderStyle = styled.header`
  padding: 10px 0px;
  .header-menu-logo {
    display: flex;
    justify-content: space-between;
    .logo {
      max-width: 215px;
      flex-grow: 1;
    }
    .main-menu {
      padding: 0px;
      margin: 0px;
      display: flex;
      width: calc(100% - 225px);
      justify-content: flex-end;
      li {
        list-style: none;
        margin-right: 20px;
        display: flex;
        align-items: center;
        position: relative;
        &:last-child {
          margin-right: 0px;
          a {
            background-color: #a3013c;
            border-radius: 50px 50px 50px 50px;
            padding: 12px 30px 12px 30px;
            color: white;
            font-size: 16px;
          }
        }
        &.icons {
          margin-right: 10px;
        }
        a {
          color: ${variable.gray};
          text-decoration: none;
          font-size: 18px;
          font-display: fallback;
          font-weight: 400;
          display: flex;
          align-items: center;
        }
        &:hover > ul {
          visibility: visible;
          opacity: 1;
          display: block;
          transition-duration: 0.5s;
        }
        ul {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          transition: all 0.5s ease;
          margin-top: 1rem;
          left: -15px;
          top: 0;
          display: none;
          z-index: 999999999999999;
          padding: 15px;
          width: 200px;
          li {
            background-color: rgba(255, 255, 255, 0.8);
            margin: 0px;
            padding: 10px 20px;
            border-bottom: thin solid ${variable.black};
            a {
              color: ${variable.black};
              font-size: 11px;
            }
          }
          &:hover {
            visibility: visible;
            opacity: 1;
            display: block;
          }
        }
      }
    }
  }
  @media (max-width: ${variable.tabletWidth}) {
    .header-menu-logo {
      .logo {
        max-width: 190px;
      }
      .main-menu {
        width: calc(100% - 210px);
        display:none;
        li {
          margin-right: 15px;
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
  @media (max-width: ${variable.mobileWidth}) {
    .header-menu-logo {
      .main-menu {
        display: none;
      }
    }
  }
`

export const Header = ({ mainmenu }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "kcchlogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const logo = data.logo.childImageSharp.fluid

  return (
    <HeaderStyle className="ltx-header">
      <div className="header-bg">
        <Container className="header-menu-logo">
          <Link className="logo" to="/">
            <Img fluid={logo} />
          </Link>
          <ul className="main-menu">
            {mainmenu.map((menuitem, index) => (
              <li key={index}>
                <Link to={menuitem.link}>{menuitem.name}</Link>
                {menuitem.submenu && (
                  <ul className="sub-menu">
                    {menuitem.submenu.map((submenuitem, index) => (
                      <li key={index}>
                        <Link to={submenuitem.link}>{submenuitem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <MobileMenu></MobileMenu>
        </Container>
      </div>
    </HeaderStyle>
  )
}

export default Header
