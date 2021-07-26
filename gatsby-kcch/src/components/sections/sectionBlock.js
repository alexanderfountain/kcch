import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import PortableText, { propTypes } from "@sanity/block-content-to-react"
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
  #get-started {
    form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      input[type="text"],
      input[type="email"] {
        width: calc(100% / 2 - 20px);
        border: thin solid #7a7a7a;
        padding: 20px 10px;
        margin-bottom: 20px;
      }
      select {
        width: calc(100% / 2 - 20px);
        border: thin solid #7a7a7a;
        padding: 20px 10px;
        margin-bottom: 20px;
      }
      div {
        width: calc(100% / 2 - 20px);
        border: thin solid #7a7a7a;
        padding: 20px 10px;
        margin-bottom: 20px;
      }
      textarea {
        width: calc(100% / 2 - 20px);
        border: thin solid #7a7a7a;
        padding: 20px 10px;
        margin-bottom: 20px;
        height: 100px;
      }
      .tentative {
        display: flex;
        align-items: center;
        input {
          margin-right: 10px;
        }
      }
      .pets {
        display: flex;
        align-items: center;
        input {
          margin-right: 10px;
          margin-left: 20px;
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
    #get-started {
      form {
        input[type="email"],
        input[type="text"] {
          width: 100%;
        }
        div {
          width: 100%;
        }
        select {
          width: 100%;
        }
        textarea {
          width: 100%;
        }
      }
    }
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
      margin-top: 40px;
    }
    .faq-title {
      cursor: pointer;
      margin-bottom: 8px;
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
    #faq {
      .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column;
        .faq-section {
          width: 100%;
        }
      }
    }
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
        .form-group {
          width: 100%;
        }
        .contact-info {
          width: 100%;
          margin-top: 40px;
        }
      }
    }
  }
  .property-list-container {
    display: flex;
    flex-wrap: wrap;
  }
  .property-list {
    width: calc(100% / 3 - 14px);
    margin-right: 20px;
    margin-bottom: 40px;
    &:nth-child(3n + 3) {
      margin-right: 0px;
    }
    h3 {
      margin: 5px 0px;
    }
    img {
      max-width: 100% !important;
      height: auto;
      position: relative !important;
    }
    @media (max-width: ${variable.tabletWidth}) {
      width: calc(100% / 2 - 10px);
      margin-right: 20px;
      margin-bottom: 40px;
      &:nth-child(3n + 3) {
        margin-right: 20px;
      }
      &:nth-child(2n + 2) {
        margin-right: 0px;
      }
    }
    @media (max-width: ${variable.mobileWidth}) {
      width: calc(100%);
      margin-bottom: 40px;
      margin-right: 0px !important;
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
    console.log(section.propertyList)
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
              <h2>{section.title}</h2>
              <PortableText
                className="section"
                serializers={serializers}
                blocks={section._rawSectionblock}
                this={this}
              />
              {section.propertyList && (
                <div className="property-list-container">
                  {section.propertyList.map((property, index) => (
                    <div className="property-list">
                      {property.mainimage && (
                        <img src={property.mainimage.asset.fixed.src} />
                      )}

                      <h3>{property.title}</h3>
                      <div>
                        <Link to={property.slug.current}>Read More</Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
              {section.sectionid == "get-started" && (
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
                    type="text"
                    name="firstname"
                    id="firstname"
                    class="form-control"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    class="form-control"
                    placeholder="Last Name"
                  />
                  <input
                    type="text"
                    name="companyname"
                    id="companyname"
                    class="form-control"
                    placeholder="Company"
                  />
                  <input
                    type="text"
                    name="address1"
                    id="address1"
                    class="form-control"
                    placeholder="Address 1"
                  />
                  <input
                    type="text"
                    name="address2"
                    id="address2"
                    class="form-control"
                    placeholder="Address 2"
                  />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="form-control"
                    placeholder="City"
                  />
                  <select name="state" id="state">
                    <option value="" selected="selected">
                      Select a State
                    </option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    class="form-control"
                    placeholder="Zip"
                  />
                  <input
                    type="text"
                    name="primaryphone"
                    id="primaryphone"
                    class="form-control"
                    placeholder="Primary Phone"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    data-required="true"
                    data-interactive="true"
                    placeholder="E-Mail"
                  />
                  <select
                    id="edit-submitted-preferred-method-of-contact"
                    name="preferred_method_of_contact"
                    class="form-select"
                  >
                    <option value="" selected="selected">
                      - Preferred method of contact -
                    </option>
                    <option value="phone">Phone</option>
                    <option value="email">E-Mail</option>
                    <option value="nopreference">Either Way</option>
                  </select>
                  <select
                    id="edit-submitted-in-what-city-are-you-looking-for-corporate-housing"
                    name="in_what_city_are_you_looking_for_corporate_housing"
                    class="form-select"
                  >
                    <option value="stlouis">General St. Louis Area</option>
                    <option value="downtown">Downtown</option>
                    <option value="south">South Area (General)</option>
                    <option value="west">West Area (General)</option>
                    <option value="chesterfield">Chesterfield</option>
                    <option value="clayton">Clayton</option>
                    <option value="st_charles">St. Charles</option>
                    <option value="cwe">Central West End</option>
                    <option value="ucity">University City</option>
                    <option value="marylandheights">Maryland Heights</option>
                    <option value="crevecouer">Creve Coeur</option>
                    <option value="webster">Webster</option>
                    <option value="kirkwood">Kirkwood</option>
                    <option value="ofallonil">O'Fallon, Illinois</option>
                    <option value="offallonmo">O'Fallon, Missouri</option>
                    <option value="edwardsville">Edwardsville</option>
                    <option value="wentzville">Wentzville</option>
                    <option value="other">Other</option>
                    <option value="unsure">Unsure</option>
                  </select>
                  <select
                    class="month form-select"
                    required="required"
                    id="edit-submitted-estimated-move-in-date-month"
                    name="submitted[estimated_move_in_date][month]"
                  >
                    <option value="" selected="selected">
                      Month
                    </option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                  <select
                    class="day form-select"
                    required="required"
                    id="edit-submitted-estimated-move-in-date-day"
                    name="submitted[estimated_move_in_date][day]"
                  >
                    <option value="" selected="selected">
                      Day
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select
                    class="year form-select"
                    required="required"
                    id="edit-submitted-estimated-move-in-date-year"
                    name="submitted[estimated_move_in_date][year]"
                  >
                    <option value="" selected="selected">
                      Year
                    </option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
                  <div className="tentative">
                    <input
                      type="checkbox"
                      name="dates-tentative-1"
                      value="yes"
                    />
                    <span>
                      I am unsure of my length of stay. The dates above are
                      tentative.
                    </span>
                  </div>
                  <select
                    id="edit-submitted-size-of-unit-needed"
                    name="submitted[size_of_unit_needed]"
                    class="form-select"
                  >
                    <option value="" selected="selected">
                      - Size of Unit Needed? -
                    </option>
                    <option value="s">Studio or smallest available</option>
                    <option value="1">1 bedroom</option>
                    <option value="2">2 bedroom</option>
                    <option value="3">3 bedroom</option>
                  </select>
                  <input
                    type="text"
                    name="units"
                    id="units"
                    class="form-control"
                    placeholder="Number of Units Needed?"
                  />
                  <select
                    id="edit-submitted-is-there-a-budget-that-you-need-to-stay-within"
                    name="submitted[is_there_a_budget_that_you_need_to_stay_within]"
                    class="form-select"
                  >
                    <option value="" selected="selected">
                      - None -
                    </option>
                    <option value="2100-2399">$2,100-$2,399</option>
                    <option value="2400-2699">$2,400-$2,699</option>
                    <option value="2700-2999">$2,700-$2,999</option>
                    <option value="3000-3299">$3,000-$3,299</option>
                    <option value="3300-3599">$3,300-$3,599</option>
                    <option value="3600">$3,600+</option>
                  </select>
                  <input
                    type="text"
                    name="adults"
                    id="adults"
                    class="form-control"
                    placeholder="Number of Adults"
                  />
                  <input
                    type="text"
                    name="children"
                    id="children"
                    class="form-control"
                    placeholder="Number of Children"
                  />
                  <div className="pets">
                    Any Pets?
                    <input
                      type="radio"
                      id="anypets"
                      name="anypets"
                      value="yes"
                      checked
                    />
                    <span>Yes</span>
                    <input
                      type="radio"
                      id="anypets"
                      name="anypets"
                      value="no"
                      checked
                    />
                    <span>No</span>
                  </div>

                  <textarea
                    name="message"
                    id="message"
                    class="form-control"
                    placeholder="If yes please enter the type, breed, number, and weight of each"
                  />
                  <textarea
                    name="reside"
                    id="reside"
                    class="form-control"
                    placeholder="Is there an area of town where you would like to reside?"
                  />
                  <select
                    id="edit-submitted-what-is-the-most-important-factor-in-your-selection"
                    name="submitted[what_is_the_most_important_factor_in_your_selection]"
                    class="form-select"
                  >
                    <option value="" selected="selected">
                      - What will be the most important factor in your
                      selection? -
                    </option>
                    <option value="price">Price</option>
                    <option value="proximity">
                      Proximity to a Location (please specify below)
                    </option>
                    <option value="area">
                      Area of Town (please specify below)
                    </option>
                    <option value="downtown">
                      Being Close to Downtown St. Louis
                    </option>
                    <option value="center">Being in a central location</option>
                    <option value="suburbs">
                      Being in a suburban location
                    </option>
                  </select>
                  <textarea
                    name="reside"
                    id="reside"
                    class="form-control"
                    placeholder="Questions/Comments"
                  />
                  <select
                    id="edit-submitted-how-did-you-hear-about-us"
                    name="submitted[how_did_you_hear_about_us]"
                    class="form-select"
                  >
                    <option value="">How did you hear about us?</option>
                    <option value="google">Google Search</option>
                    <option value="bing">Bing Search</option>
                    <option value="yahoo">Yahoo Search</option>
                    <option value="individual">Referred by Individual</option>
                    <option value="property">Referred by Property</option>
                    <option value="other">Other</option>
                  </select>
                  <button type="submit" class="btn btn-submit">
                    Submit
                  </button>
                </form>
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
