/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/regions/header"
import styled from "styled-components"
import * as variable from "./variables"
import Footer from "../components/regions/footer"
import "./layout.css"
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"
const GlobalStyles = styled.div`
  a {
    color: ${variable.blue};
    text-decoration: none;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
      <GlobalStyles>
        <PopupboxContainer />
        <Header mainmenu={data.site.siteMetadata.mainmenu} />
        <div className="main">{children}</div>
        <Footer></Footer>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
      </GlobalStyles>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
