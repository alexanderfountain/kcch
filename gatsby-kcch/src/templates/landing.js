import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import PortableText from "@sanity/block-content-to-react"
import BackgroundImage from "gatsby-background-image"
import localize from "../components/localize"
import Layout from "../components/layout"
import SectionBlock from "../components/sections/sectionBlock"
import Section from "../components/sections/section"
import Container from "../components/container"
import { Helmet } from "react-helmet"

const LandingStyle = styled.div`
  &#home {
    h1 {
      display: none;
    }
  }
`

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    image: props =>
      props.node.asset !== null && (
        <img src={props.node.asset.url + "?w=700"} />
      ),
    blocks: props => (
      <div>
        {console.log(props)}
        <PortableText
          className="sidebar-body"
          serializers={serializers}
          blocks={props.node}
        />
      </div>
    ),
    group: props => (
      <div className="group">
        {console.log(props)}
        <PortableText serializers={serializers} blocks={props.node.group} />
      </div>
    ),
    imagelink: props => (
      <div className="image-link">
        <div className="image-link-container">
          <Link to={props.node.url}>
            <img src={props.node.image.asset.url + "?w=700"} />
            <div className="image-link-title">{props.node.title}</div>
          </Link>
        </div>
      </div>
    ),
  },
}

export const query = graphql`
  query LandingPostByID($id: String!) {
    site {
      siteMetadata {
        title
        url
      }
    }
    testimonial: allSanityTestimonial {
      nodes {
        title
        _createdAt(formatString: "MMM D Y")
        url
        _rawBody
      }
    }
    news: allSanityNews {
      nodes {
        title {
          _type
          nl
          en
        }
        _createdAt(formatString: "MMM D Y")
        mainimage {
          asset {
            fluid(maxWidth: 850, maxHeight: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    landing: allSanityLanding(filter: { id: { eq: $id } }) {
      nodes {
        title {
          _type
          en
          nl
        }
        _rawBody(resolveReferences: { maxDepth: 10 })
        pageid
        sections {
          ... on SanitySectionblock {
            sectionid
            backgroundimage {
              asset {
                fluid(maxWidth: 1920) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            _rawSectionblock(resolveReferences: { maxDepth: 10 })
          }
          ... on SanitySectionentitylist {
            sectionid
            entitytype
            displaynumber
            title {
              _type
              nl
              en
            }
            backgroundimage {
              asset {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`
class LandingPostTemplate extends React.Component {
  render() {
    const { post } = this.props
    const { data } = this.props
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {post.title} | {data.site.siteMetadata.title}
          </title>
          <link
            rel="canonical"
            href={data.site.siteMetadata.url + "/" + post.slug}
          />
        </Helmet>
        <LandingStyle id={post.pageid}>
          <Container>
            <h1>{post.title}</h1>
            {console.log(post)}
            <PortableText
              className="landing-body"
              serializers={serializers}
              blocks={post._rawBody}
            />
          </Container>
          {/* {post.sections.map((section, index) => (
          <section key={index}>
            {section.backgroundimage && (
              <BackgroundImage fluid={section.backgroundimage.asset.fluid}>
                <PortableText
                  className="sidebar-body"
                  serializers={serializers}
                  blocks={section._rawSectionblock}
                />
              </BackgroundImage>
            )}
          </section>
        ))} */}
          {post.sections.map((section, index) => (
            <section>
              <Section key={index} section={section} data={data}></Section>
            </section>
          ))}
        </LandingStyle>
      </Layout>
    )
  }
}

const Landing = ({ data }) => {
  const { [0]: post } = data.landing.nodes
  return <LandingPostTemplate post={post} data={data} />
}

export default localize(Landing)
