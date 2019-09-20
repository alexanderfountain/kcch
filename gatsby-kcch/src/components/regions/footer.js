import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../container"
import * as variable from "../variables"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FooterStyle = styled.footer`
  text-align: center;
  padding: 100px 0px;

  a {
    color: ${variable.black};
  }
  ul {
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0px 7px;
      a {
        display: flex;
        align-items: center;
      }
    }
  }
  .footer-links {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    a {
      margin-left: 20px;
      color: ${variable.black};
      -webkit-font-smoothing: subpixel-antialiased;
      font-size: 10.2px;
      letter-spacing: 0.25em;
      line-height: 2.2em;
      text-transform: uppercase;
      &:nth-child(1) {
        margin-left: 0px;
      }
    }
  }
  .footer-logo {
    color: rgba(29, 29, 29, 0.3);
    margin-top: 40px;
    font-size: 16px;
  }
`

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "kcchlogo.png" }) {
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
    <FooterStyle>
      <Container>
        <div className="footer-links">
          <Link to="/contact-us">CONTACT</Link>
        </div>
        {/* <div className="footer-social">
          <ul>
            <li className="email icons">
              <a href="mailto:contact@spaans-spaans.com" target="_blank">
                <Img fixed={email} />
              </a>
            </li> */}
        {/* <li className="facebook icons">
              <a
                target="_blank"
                href="https://www.facebook.com/legalexpertsforthedigitalyou"
              >
                <Img fixed={facebook} />
              </a>
            </li>
            <li className="instagram icons">
              <a target="_blank" href="https://www.instagram.com/spaans_spaans">
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
            </li> */}
        {/* </ul>
        </div> */}
        <div className="footer-logo"></div>
      </Container>
    </FooterStyle>
  )
}

export default Footer
