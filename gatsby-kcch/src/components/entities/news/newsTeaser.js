import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import localize from "../../localize"
import * as variable from "../../variables"

const NewsTeaserStyle = styled.div`
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
    a {
      color: ${variable.black};
    }
  }
`

class NewsTeaserTemplate extends React.Component {
  render() {
    const { news } = this.props
    return (
      <NewsTeaserStyle>
        <Img fluid={news.mainimage.asset.fluid} />
        <div className="teaser-date">{news._createdAt}</div>
        <h2>
          <a href="#">{news.title}</a>
        </h2>
      </NewsTeaserStyle>
    )
  }
}

const NewsTeaser = ({ news }) => {
  return <NewsTeaserTemplate news={news} />
}

export default NewsTeaser
