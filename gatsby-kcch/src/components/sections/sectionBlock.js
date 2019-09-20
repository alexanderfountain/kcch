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

const SectionBlockStyle = styled.div``

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
                {console.log(section)}
                <PortableText
                  className="section"
                  serializers={serializers}
                  blocks={section._rawSectionblock}
                />
                {section.sectionid == "contact" && (
                  <form
                    name="contact-home"
                    method="post"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-home"
                    />
                    <p hidden>
                      {" "}
                      <label htmlFor="bot-field">
                        Don’t fill this out: <input name="bot-field" />{" "}
                      </label>{" "}
                    </p>
                    <div className="form-group-names">
                      <div class="form-group">
                        <label for="name" class="lb-name">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="form-control"
                          data-required="true"
                          data-interactive="true"
                        />
                      </div>
                      <div class="form-group">
                        <label for="surname" class="lb-surname">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="surname"
                          id="surname"
                          class="form-control"
                          data-required="true"
                          data-interactive="true"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="email" class="lb-email">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        data-required="true"
                        data-interactive="true"
                      />
                    </div>
                    <div class="form-group">
                      <label for="phone" class="lb-phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        class="form-control"
                        data-required="false"
                        data-interactive="true"
                      />
                    </div>
                    <div class="form-group text">
                      <label for="textarea" class="lb-message">
                        Message*
                      </label>
                      <textarea
                        name="textarea"
                        id="textarea"
                        class="textarea form-control"
                        data-required="true"
                        data-trim="true"
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
              {/* {console.log(section)} */}
              <PortableText
                className="section"
                serializers={serializers}
                blocks={section._rawSectionblock}
              />
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
