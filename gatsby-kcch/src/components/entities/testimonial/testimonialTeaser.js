import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import localize from "../../localize"
import * as variable from "../../variables"
import PortableText from "@sanity/block-content-to-react"

const TestimonialTeaserStyle = styled.div`
  .teaser-date {
    font-size: 13px;
    margin: 10px 0px;
    font-weight: 300;
  }
  h2 {
    margin: 5px 0px;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
  }
  h3 {
    a {
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: rgba(34, 34, 34, 0.3);
      padding-bottom: 3px;
      &:hover {
        color: rgba(34, 34, 34, 0.6);
        border-color: rgba(34, 34, 34, 0.15);
      }
    }
  }
  a {
    color: ${variable.black};
  }
  .testimonial-link {
    position: relative;
    font-weight: 300;
    &:after {
      content: "";
      color: transparent;
      top: 7px;
      right: -20px;
      position: absolute;
      width: 15px;
      height: 9px;
      background-color: ${variable.black};
      clip-path: polygon(
        0 37%,
        59% 37%,
        60% 0%,
        100% 50%,
        60% 100%,
        59% 62%,
        0 63%
      );
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
  },
}

class TestimonialTeaserTemplate extends React.Component {
  render() {
    const { testimonial } = this.props
    console.log(testimonial)
    return (
      <TestimonialTeaserStyle>
        <div className="testimonial-body">
          <PortableText
            serializers={serializers}
            blocks={testimonial._rawBody}
          />
        </div>
        <h3>
          <span>{testimonial.title}</span> -{" "}
          <span>
            (<a href={testimonial.url}>{testimonial.url}</a>)
          </span>
        </h3>
        <div>
          <Link className="testimonial-link" to="">
            Read More
          </Link>
        </div>
        <div className="teaser-date">{testimonial._createdAt}</div>
      </TestimonialTeaserStyle>
    )
  }
}

const TestimonialTeaser = ({ testimonial }) => {
  return <TestimonialTeaserTemplate testimonial={testimonial} />
}

export default TestimonialTeaser
