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
  blockquote {
    border-left: 1px solid #ddd;
    padding-left: 30px;
    margin: 0px;
  }
  #privacy-grid,
  #auteur,
  #contractengrid {
    .section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .image-link {
        width: calc(100% / 3 - 10px);
        margin-bottom: 40px;
        a {
          position: relative;
          z-index: 1;
          img {
            width: 100%;
          }
          .image-link-title {
            position: absolute;
            bottom: 5px;
            width: 100%;
            height: 0;
            color: #fff;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 18px;
            background-color: rgba(14, 152, 49, 0.27);
            opacity: 0;
            transition: all 0.25s ease-in;
            z-index: 2;
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
          }
          &:hover {
            .image-link-title {
              opacity: 1;
              height: 100px;
            }
          }
        }
      }
    }
  }
  #ict-recht {
    .section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .image-link {
        width: calc(100% / 3 - 10px);
        margin-bottom: 40px;
        a {
          position: relative;
          z-index: 1;
          img {
            width: 100%;
          }
          .image-link-title {
            position: absolute;
            bottom: 5px;
            width: 100%;
            height: 0;
            color: #fff;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 18px;
            background-color: rgba(14, 152, 49, 0.27);
            opacity: 0;
            transition: all 0.25s ease-in;
            z-index: 2;
            text-align: center;
            padding: 20px;
            box-sizing: border-box;
          }
          &:hover {
            .image-link-title {
              opacity: 1;
              height: 100px;
            }
          }
        }
      }
    }
  }
  #services {
    h3 {
      em {
        font-weight: 400;
        font-style: normal;
        font-size: 19px;
        letter-spacing: 0em;
        line-height: 1.3em;
        margin: 10px 0px;
      }
    }
  }
  #contracten {
    .section {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .image-link {
        width: calc(100% / 2 - 20px);
        margin-bottom: 80px;
        a {
          display: flex;
          align-items: center;
          .image-link-title {
            background-color: white;
            color: ${variable.black};
            padding: 5px 10px;
            position: relative;
            left: -40px;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: rgba(41, 133, 167, 0.3);
            font-weight: bold;
          }
        }
        img {
          max-width: 50%;
        }
      }
    }
  }
  #contact {
    color: white;
    label {
      display: block;
      margin-top: 35px;
      margin-bottom: 10px;
    }
    input {
      display: block;
      width: 100%;
      padding: 12px 10px;
    }
    textarea {
      width: 100%;
      height: 100px;
    }
    button {
      color: white;
      border: 2px solid white;
      padding: 25px 46px;
      font-family: brandon-grotesque;
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      text-transform: uppercase;
      -webkit-letter-spacing: 0.3em;
      -moz-letter-spacing: 0.3em;
      -ms-letter-spacing: 0.3em;
      letter-spacing: 0.3em;
      border-radius: 3px;
      display: inline-block;
      background-color: transparent;
      margin-top: 35px;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: #1d1d1d;
      }
    }
    .form-group-names {
      display: flex;
      justify-content: space-between;
      .form-group {
        width: calc(50% - 40px);
      }
    }
  }
  #cofee-home {
    .section-container {
      padding: 150px 0px;
    }
    .section {
      display: flex;
      justify-content: space-between;
      .group {
        width: calc(50% - 20px);
        color: white;
        text-align: center;
        a {
          color: white;
          border: 2px solid white;
          padding: 25px 46px;
          font-family: brandon-grotesque;
          font-size: 12px;
          font-weight: 400;
          font-style: normal;
          text-transform: uppercase;
          -webkit-letter-spacing: 0.3em;
          -moz-letter-spacing: 0.3em;
          -ms-letter-spacing: 0.3em;
          letter-spacing: 0.3em;
          border-radius: 3px;
          display: inline-block;
          &:hover {
            background-color: white;
            color: #1d1d1d;
          }
        }
      }
    }
  }

  #home-legal {
    color: white;
    text-align: center;
    .react-parallax-content {
      // padding: 150px 0px;
      // background-attachment: fixed;
    }
    .section-container {
      padding: 150px 0px;
    }
    a {
      color: white;
      border: 2px solid white;
      padding: 25px 46px;
      font-family: brandon-grotesque;
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      border-radius: 3px;
      display: inline-block;
      &:hover {
        color: #1d1d1d;
        background-color: white;
      }
    }
    h2 {
      font-size: 30px;
      margin: 40px 0px 60px 0px;
    }
  }
  #koffie {
    .section-container {
      padding: 120px 0px;
    }
    color: white;
    h2 {
      color: white;
    }
    a {
      color: white;
      border: 2px solid white;
      padding: 25px 46px;
      font-family: brandon-grotesque;
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      text-transform: uppercase;
      -webkit-letter-spacing: 0.3em;
      -moz-letter-spacing: 0.3em;
      -ms-letter-spacing: 0.3em;
      letter-spacing: 0.3em;
      border-radius: 3px;
      display: inline-block;
      &:hover {
        background-color: white;
        color: #1d1d1d;
      }
    }
  }
  #volg {
    .section {
      display: flex;
      align-items: center;
    }
    .section-container {
      padding: 100px 0px;
    }
    .group {
      width: 50%;
      display: flex;
      align-items: center;
    }
    ul {
      padding: 0px;
      margin: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        list-style: none;
        display: flex;
        align-items: center;
        a {
          display: flex;
          align-items: center;
          color: transparent;
          background-size: cover;
          background-repeat: no-repeat;
          width: 20px;
          height: 20px;
          margin-right: 20px;
        }
        &:nth-child(1) {
          a {
            background-image: url(${email});
          }
        }
        &:nth-child(2) {
          a {
            background-image: url(${facebook});
          }
        }
        &:nth-child(3) {
          a {
            background-image: url(${instagram});
          }
        }
        &:nth-child(4) {
          a {
            margin-right: 0px;
            background-image: url(${linkedin});
          }
        }
      }
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
                {/* {console.log(section)} */}
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
