import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import PortableText from "@sanity/block-content-to-react"
import BackgroundImage from "gatsby-background-image"
import Container from "../container"
import SectionBlock from "../sections/sectionBlock"
import SectionEntityList from "../sections/sectionEntityList"

const SectionStyle = styled.div``

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
          blocks={props.node.body}
        />
      </div>
    ),
  },
}

class SectionTemplate extends React.Component {
  render() {
    const { section } = this.props
    const { data } = this.props
    switch (section.__typename) {
      case "SanitySectionblock":
        return <SectionBlock section={section} data={data}></SectionBlock>
      case "SanitySectionentitylist":
        return (
          <SectionEntityList section={section} data={data}></SectionEntityList>
        )
    }
    return null
  }
}

const Section = ({ section, data }) => {
  return <SectionTemplate section={section} data={data} />
}

export default Section
