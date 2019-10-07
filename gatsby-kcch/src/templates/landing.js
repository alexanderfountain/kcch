import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import PortableText from "@sanity/block-content-to-react"
import BackgroundImage from "gatsby-background-image"
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
        <PortableText
          className="sidebar-body"
          serializers={serializers}
          blocks={props.node}
        />
      </div>
    ),
    group: props => (
      <div className="group">
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
    gallery: allSanityGallery {
      nodes {
        title
        image {
          asset {
            fluid(maxWidth: 450, maxHeight: 300) {
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
    large: allSanityGallery {
      nodes {
        title
        image {
          asset {
            url
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
        title
        pageid
        hidetitle
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
            title
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
    console.log(data)
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
            {!post.hidetitle && <h1>{post.title}</h1>}
            {console.log(post)}
            <PortableText
              className="landing-body"
              serializers={serializers}
              blocks={post._rawBody}
            />
          </Container>
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

export default Landing
