import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import * as variable from "../../variables"
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import FullSlide from "../../fullslide"

const GalleryTeaserStyle = styled.div`
  img {
    cursor: pointer;
  }
  .popclose-parent {
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
    z-index: 99999999999999;
    position: absolute;
    top: 40px;
    right: 40px;
  }
  .popclose {
    height: 60px !important;
    width: 60px !important;
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
    background-color: white;
    cursor: pointer;
  }
  .popupbox-content div:not(.nav):not(.indicators) {
    height: 100%;
  }
  .popupbox-content {
    padding: 0px;
  }
`

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: true,
  indicators: true,
}

class GalleryTeaserTemplate extends React.Component {
  openPopupbox(e, large) {
    const content = (
      <div>
        <FullSlide slideshow={large}></FullSlide>

        <div className="popclose-parent">
          <div
            className="popclose"
            onClick={e => {
              this.closePopupbox(e)
            }}
          ></div>
        </div>
      </div>
    )
    PopupboxManager.open({
      content,
      fadeInSpeed: 10,
      config: {},
    })
  }
  closePopupbox(e) {
    PopupboxManager.close({
      fadeInSpeed: 10,
    })
  }
  render() {
    const { gallery } = this.props
    const { large } = this.props
    console.log(large)
    return (
      <GalleryTeaserStyle>
        <div
          onClick={e => {
            this.openPopupbox(e, large)
          }}
        >
          <Img fluid={gallery.image.asset.fluid} />
        </div>
      </GalleryTeaserStyle>
    )
  }
}

const GalleryTeaser = ({ gallery, large }) => {
  return <GalleryTeaserTemplate gallery={gallery} large={large} />
}

export default GalleryTeaser
