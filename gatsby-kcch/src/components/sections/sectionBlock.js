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
  div:empty {
    display: none;
  }
  p:empty {
    display: none;
  }
  #ready {
    background-image: linear-gradient(270deg, #0338a0 0%, #011c5b 100%);
    h2 {
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
  #home-hero,
  #ready {
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
      h2,
      h3 {
        margin-top: 0px;
      }
      .portable-image {
        width: calc(50% - 15px);
        img {
          max-width: 100%;
        }
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
  #features,
  #flex-lease {
    .section-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .section {
        width: calc(40%);
      }
      form {
        width: calc(60% - 20px);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        select {
          width: calc(100% / 3 - 10px);
        }
        button {
          width: calc(100% / 3 - 10px);
        }
        input {
          width: calc(100% / 3 - 10px);
        }
      }
      a {
        fill: #a3013c;
        color: #a3013c;
        background-color: #ffffff;
        font-size: 16px;
        padding: 15px 30px;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        margin-top: 20px;
        display: inline-block;
      }
    }
  }
  @media (max-width: ${variable.tabletWidth}) {
    #rep-contact {
      .section-container {
        flex-direction: column;
        h2 {
          width: 100%;
          margin-bottom: 40px;
          text-align: center;
        }
        form {
          width: 100%;
        }
      }
    }
    #features,
    #flex-lease {
      .section-container {
        flex-direction: column;
        .section {
          width: 100%;
        }
        form {
          width: 100%;
          margin-top: 40px;
        }
      }
    }
  }
  @media (max-width: ${variable.mobileWidth}) {
    #home-hero,
    #ready {
      .group {
        div {
          flex-direction: column;
          text-align: center;
          p:nth-child(1) {
            margin: 0px;
          }
          p:nth-child(3) {
            margin: 0px;
          }
        }
      }
    }
    #rep-contact {
      .section-container {
        form {
          flex-direction: column;
          input {
            width: 100%;
          }
          button {
            width: 100%;
          }
          select {
            margin: 20px 0px;
            width: 100%;
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
        flex-direction: column;
        .portable-image {
          width: calc(100%);
          margin-top: 40px;
          img {
            max-width: 100%;
          }
        }
        .group {
          width: calc(100%);
        }
      }
    }
    #features,
    #flex-lease {
      .section-container {
        form {
          input {
            width: 100%;
          }
          button {
            width: 100%;
          }
          select {
            width: 100%;
            margin: 20px 0px;
          }
        }
      }
    }
    #comfort,
    #flexibility {
      .portable-image {
        margin: 0px 0px 40px 0px;
      }
    }
    .portable-image {
      text-align: center;
    }
  }
  #contact {
    .flex-group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .contacter {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      form {
        width: calc(65%);
      }
      .contact-info {
        width: calc(35% - 40px);
        background-color: #f2f2f2;
        padding: 0px 20px 20px 20px;
        i {
          color: white;
          background-color: #a3013c;
          height: 40px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          margin-right: 10px;
        }
        a {
          color: #a3013c;
          display: flex;
          align-items: center;
          margin-top: 30px;
          .contact-inner-under {
            color: #0338a0;
          }
        }
      }
    }
    input {
      background-color: #f2f2f2;
      width: 100%;
      padding: 30px 10px;
    }
    textarea {
      background-color: #f2f2f2;
      -webkit-appearance: none;
      border: 0px;
      padding: 30px 10px;
      width: 100%;
      height: 200px;
      &::placeholder {
        font-size: 16px;
      }
    }
    .form-group {
      width: calc(100% / 2 - 20px);
      margin-bottom: 40px;
    }
    h1 {
      text-align: center;
    }
    h2 {
      text-align: center;
    }
    i {
      width: 1em;
      height: 1em;
      color: white;
    }
  }
  #faq {
    .group {
      width: 100%;
      text-align: center;
    }
    .section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .faq-section {
      width: calc(100% / 2 - 40px);
    }
    .faq-title {
      cursor: pointer;
    }
    .faq-copy {
      /* display:none; */
    }
  }
  #what-included-hero {
    background-color: rgba(0, 7, 150, 1);
    .section-container {
      height: 300px;
    }
    .react-parallax-bgimage {
      opacity: 0.4;
    }
  }
  #comfy {
    padding: 75px 0px;
    background-color: #f5f5f5;
    li {
      line-height: 35px;
    }
    h2 {
      text-align: center;
    }
    .section-container {
      background-color: white;
      width: 75%;
      padding: 0px 0px;
    }
    .section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      img {
        max-width: 100%;
      }
    }
    .group {
      width: calc(50% - 10px);
      &:nth-child(1) {
        padding: 40px 20px;
      }
      &:nth-child(3) {
        width: 100%;
        background-image: linear-gradient(180deg, #ba012f 0%, #630018 100%);
        padding: 50px 20px;
        > div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        ul {
          color: white;
          width: calc(50% - 10px);
          padding: 0px;
          li {
            font-size: 18px;
            list-style: none;
            line-height: 35px;
            &:before {
              content: "\f00c";
              font-family: "Font Awesome 5 Free";
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  #one-bed,
  #living-features,
  #bath-features,
  #extra,
  #master {
    color: #54595f;
    h2 {
      text-align: center;
      color: #54595f;
    }
    h3 {
      text-align: center;
      color: #0338a0;
    }
  }
  #one-bed,
  #extra,
  #master {
    background-color: #f5f5f5;
  }
  #living-features,
  #bath-features {
    background-color: #d6d6d6;
  }
  #includes {
    background-image: linear-gradient(180deg, #ba012f 0%, #630018 100%);
    color: white;
    a {
      color: #a3013c;
      background-color: #ffffff;
      font-size: 16px;
      padding: 15px 30px;
      -webkit-border-radius: 4px;
      border-radius: 4px;
      margin-top: 20px;
      display: inline-block;
      font-weight: bold;
    }
  }
  @media (max-width: ${variable.mobileWidth}) {
    #comfy {
      .section-container {
        width: 100%;
        padding: 0px 20px;
      }
      .section {
        flex-direction: column;
        .group {
          width: 100%;
        }
      }
    }
    #contact {
      .contacter {
        form {
          width: 100%;
        }
        .contact-info {
          width: 100%;
          margin-top: 40px;
        }
      }
    }
  }
`
// var openFaq = e => {
//   console.log('faqclick')
// }
const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    image: props =>
      props.node.asset !== null && (
        <div className="portable-image">
          <img src={props.node.asset.url + "?w=700"} />
        </div>
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

    faq: props => (
      <div className="faq-section">
        <h2
          className={props.node._key + " faq-title"}
          onClick={e => {
            // var clickClass = e
            // console.log(e.target.n);
          }}
        >
          {props.node.title}
        </h2>
        <div className={props.node._key + " faq-copy"}>
          <PortableText serializers={serializers} blocks={props.node.copy} />
        </div>
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
    if (
      section.sectionid == "flex-lease" ||
      section.sectionid == "rep-contact" ||
      section.sectionid == "features"
    ) {
      var form = true
    }

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
                <div className="inner-section-container">
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
                </div>
              </Container>
            </Parallax>
          ) : (
            <Container className="section-container">
              <PortableText
                className="section"
                serializers={serializers}
                blocks={section._rawSectionblock}
                this={this}
              />
              {section.sectionid == "contact" && (
                <div className="contacter">
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
                    <div className="flex-group">
                      <div class="form-group">
                        <input
                          type="text"
                          name="fname"
                          id="fname"
                          class="form-control"
                          data-required="true"
                          data-interactive="true"
                          placeholder="First Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="lname"
                          id="lname"
                          class="form-control"
                          data-required="true"
                          data-interactive="true"
                          placeholder="Last Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="cell"
                          id="cell"
                          class="form-control"
                          data-interactive="true"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          data-required="true"
                          data-interactive="true"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <textarea
                        type="textarea"
                        name="message"
                        id="message"
                        class="form-control"
                        data-interactive="true"
                        placeholder="Message"
                      />
                    </div>
                    <div>
                      <button type="submit" class="btn btn-submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                  <div className="contact-info">
                    <h4>CONTACT INFO</h4>
                    <a href="mailto:info@kansascitycorporatehousing.com">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      Email
                    </a>
                    <a href="tel:+18448161218">
                      <i class="fas fa-phone"></i>
                      <div class="contact-inner-link">
                        <div>Main Office</div>
                        <div class="contact-inner-under">844-816-1218</div>
                      </div>
                    </a>
                    <a href="tel:+18448161218">
                      <i class="fas fa-phone"></i>
                      <div class="contact-inner-link">
                        <div>Main Office</div>
                        <div class="contact-inner-under">844-816-1218</div>
                      </div>
                    </a>
                    <a href="tel:+8162721431">
                      <i class="fas fa-phone"></i>
                      <div class="contact-inner-link">
                        <div>Rich</div>
                        <div class="contact-inner-under">816-272-1431</div>
                      </div>
                    </a>
                    <a href="tel:+8162826078">
                      <i class="fas fa-phone"></i>
                      <div class="contact-inner-link">
                        <div>Karen</div>
                        <div class="contact-inner-under">816-282-6078</div>
                      </div>
                    </a>
                    <a href="tel:+8163439978">
                      <i class="fas fa-phone"></i>
                      <div class="contact-inner-link">
                        <div>Scott</div>
                        <div class="contact-inner-under">816-343-9978</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
              {form == true && (
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
