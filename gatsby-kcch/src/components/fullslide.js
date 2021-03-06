import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/container"
import * as variable from "../components/variables"
import { Slide } from "react-slideshow-image"
import Img from "gatsby-image"

const FullSlideStyle = styled.div`
  img {
    width: 100%;
  }
`

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: true,
  indicators: true,
}

class FullSlide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false,
    }
  }

  render() {
    return (
      <div>
        <FullSlideStyle>
          {console.log(this.props)}
          <Slide {...properties}>
            {this.props.slideshow.nodes.map((slide, index) => (
              <div key={index} className="each-slide-full">
                <div className="slide-full">
                  <Img fluid={slide.image.asset.fluid} />
                </div>
              </div>
            ))}
          </Slide>
        </FullSlideStyle>
      </div>
    )
  }
}

export default FullSlide
