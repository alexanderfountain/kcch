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

const HeaderStyle = styled.header`
  padding: 60px 0px;
  .header-menu-logo {
    display: flex;
    justify-content: space-between;
    .logo {
      max-width: 245px;
      flex-grow: 1;
    }
    .main-menu {
      padding: 0px;
      margin: 0px;
      display: flex;
      li {
        list-style: none;
        margin-right: 12px;
        display: flex;
        align-items: center;
        position: relative;
        &:last-child {
          margin-right: 0px;
        }
        &.icons {
          margin-right: 10px;
        }
        a {
          color: ${variable.black};
          text-decoration: none;
          font-size: 11px;
          text-transform: uppercase;
          font-family: "Lato", sans-serif;
          font-display: fallback;
          font-weight: 700;
          letter-spacing: 0.14em;
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
`

export const Header = ({ mainmenu }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      email: file(relativePath: { eq: "email.png" }) {
        childImageSharp {
          fixed(width: 13, height: 10) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebook: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fixed(width: 13, height: 13) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed(width: 13, height: 13) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fixed(width: 11, height: 11) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const logo = data.logo.childImageSharp.fluid
  const email = data.email.childImageSharp.fixed
  const facebook = data.facebook.childImageSharp.fixed
  const instagram = data.instagram.childImageSharp.fixed
  const linkedin = data.linkedin.childImageSharp.fixed

  return (
    <ThemeContext.Consumer>
      {theme => (
        <HeaderStyle className="ltx-header">
          <div className="header-bg">
            <Container className="header-menu-logo">
              <Link className="logo" to="/">
                <Img fluid={logo} />
              </Link>
              {/* <button className="dark-switcher" onClick={theme.toggleLocale}>
                {theme.english ? <span>English</span> : <span>Dutch</span>}
              </button> */}
              <ul className="main-menu">
                {mainmenu.map((menuitem, index) => (
                  <li key={index}>
                    <Link to={menuitem.link}>{menuitem.name}</Link>
                    {menuitem.submenu && (
                      <ul className="sub-menu">
                        {menuitem.submenu.map((submenuitem, index) => (
                          <li key={index}>
                            <Link to={submenuitem.link}>
                              {submenuitem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                <li className="email icons">
                  <a href="mailto:contact@spaans-spaans.com" target="_blank">
                    <Img fixed={email} />
                  </a>
                </li>
                <li className="facebook icons">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/legalexpertsforthedigitalyou"
                  >
                    <Img fixed={facebook} />
                  </a>
                </li>
                <li className="instagram icons">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/spaans_spaans"
                  >
                    <Img fixed={instagram} />
                  </a>
                </li>
                <li className="linkedin icons">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/spaans-spaans-legal-experts-for-the-digital-you"
                  >
                    <Img fixed={linkedin} />
                  </a>
                </li>
              </ul>
            </Container>
          </div>
        </HeaderStyle>
      )}
    </ThemeContext.Consumer>
  )
}

export default Header
