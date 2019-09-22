import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import PortableText from "@sanity/block-content-to-react"
import BackgroundImage from "gatsby-background-image"
import Container from "../container"
import { Parallax, Background } from "react-parallax"
import email from "../../images/email.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import Img from "gatsby-image"
import * as variable from "../variables"

const SectionBlockStyle = styled.div`
  #home-hero {
    h1 {
      color: white;
      text-align: center;
    }
    .group {
      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: white;
        font-size: 30px;
        font-weight: 500;
        p:nth-child(1) {
          margin-right: 50px;
          a {
            background-color: white;
            color: ${variable.red};
            font-weight: 500;
            padding: 15px 30px;
            -webkit-border-radius: 4px;
            border-radius: 4px;
            font-size: 16px;
          }
        }
        p:nth-child(3) {
          margin-left: 50px;
          a {
            background-color: ${variable.red};
            color: white;
            font-weight: 500;
            padding: 15px 30px;
            -webkit-border-radius: 4px;
            border-radius: 4px;
            font-size: 16px;
          }
        }
      }
    }
  }
  #rep-contact {
    background-image: linear-gradient(180deg, #ba012f 0%, #630018 100%);
    color: white;
    .section-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      h2 {
        width: calc(100% / 2);
        margin: 0px;
      }
      form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: calc(100% / 2 - 20px);
        input {
          width: 30%;
        }
        select {
          width: calc(40% - 20px);
        }
        button {
          width: 30%;
        }
      }
    }
  }
  #welcome,
  #comfort,
  #customer,
  #flexibility,
  #where-work {
    .section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        width: calc(50% - 15px);
      }
      .group {
        width: calc(50% - 15px);
      }
    }
  }
  #welcome,
  #customer {
    background-color: rgba(239, 239, 239, 0.76);
  }
  #features,
  #flex-lease {
    background-image: linear-gradient(180deg, #ba012f 0%, #630018 100%);
    color: white;
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

class SectionBlockTemplate extends React.Component {
  render() {
    const { section } = this.props
    return (
      <SectionBlockStyle>
        <div id={section.sectionid}>
          {section.backgroundimage ? (
            <Parallax
              bgImage={section.backgroundimage.asset.fluid.src}
              bgImageSrcSet={section.backgroundimage.asset.fluid.srcSet}
              bgImageAlt="section bg"
              strength={300}
            >
              <Container className="section-container">
                <PortableText
                  className="section"
                  serializers={serializers}
                  blocks={section._rawSectionblock}
                />
                {section.sectionid == "rep-contact" && (
                  <form
                    name={section.sectionid}
                    method="post"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value={section.sectionid}
                    />
                    <p hidden>
                      <label htmlFor="bot-field">
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        data-required="true"
                        data-interactive="true"
                        placeholder="email"
                      />
                    </div>
                    <div>
                      <button type="submit" class="btn btn-submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </Container>
            </Parallax>
          ) : (
            <Container className="section-container">
              <PortableText
                className="section"
                serializers={serializers}
                blocks={section._rawSectionblock}
              />
              {section.sectionid == "rep-contact" && (
                <form
                  name={section.sectionid}
                  method="post"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value={section.sectionid}
                  />
                  <p hidden>
                    <label htmlFor="bot-field">
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    data-required="true"
                    data-interactive="true"
                    placeholder="email"
                  />
                  <select name="type">
                    <option value="General Information">
                      General Information
                    </option>
                    <option value="Housing Quote">Housing Quote</option>
                    <option value="Other">Other</option>
                  </select>

                  <button type="submit" class="btn btn-submit">
                    Send Message
                  </button>
                </form>
              )}
            </Container>
          )}
        </div>
      </SectionBlockStyle>
    )
  }
}

const SectionBlock = ({ section }) => {
  return <SectionBlockTemplate section={section} />
}

export default SectionBlock
