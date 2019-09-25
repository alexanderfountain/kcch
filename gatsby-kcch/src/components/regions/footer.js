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
  padding: 50px 0px;
  background-color: #3a3a3a;
  color: white;
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
        <div>Copyright © 2019 Kansas City Corporate Housing</div>
      </Container>
    </FooterStyle>
  )
}

export default Footer
