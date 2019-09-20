import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import PortableText from "@sanity/block-content-to-react"
import BackgroundImage from "gatsby-background-image"
import Container from "../container"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const SectionEntityListStyle = styled.div`
  .teaser-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .teaser {
      width: calc(100% / 3 - 20px);
    }
  }
  .alice-carousel__stage-item {
    padding-right: 20px;
    box-sizing: border-box;
  }

  .alice-carousel__prev-btn {
    position: absolute;
    top: -70px;
    right: 100px;
    width: 20px;
  }
  .alice-carousel__next-btn {
    position: absolute;
    top: -70px;
    right: 40px;
    width: 20px;
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
        <PortableText
          className="sidebar-body"
          serializers={serializers}
          blocks={props.node.body}
        />
      </div>
    ),
  },
}

class SectionEntityListTemplate extends React.Component {
  render() {
    const { section } = this.props
    const { data } = this.props
    const responsive = { 0: { items: section.displaynumber } }
    const type = section.entitytype
    switch (section.entitytype) {
      case "news":
        return (
          <SectionEntityListStyle>
            <section id={section.sectionid}>
              {section.backgroundimage ? (
                <BackgroundImage
                  fluid={section.backgroundimage.asset.fluid}
                  className="gbi-section-background"
                >
                  <Container className="section-container">
                    <h2>{section.title}</h2>
                    <div className="teaser-flex">
                      <AliceCarousel
                        mouseDragEnabled
                        responsive={responsive}
                        dotsDisabled
                      >
                        {data.news.nodes.map((newsitem, index) => (
                          <div className="teaser">
                            {/* <NewsTeaser
                              key={index}
                              news={newsitem}
                            ></NewsTeaser> */}
                          </div>
                        ))}
                      </AliceCarousel>
                    </div>
                  </Container>
                </BackgroundImage>
              ) : (
                <Container className="section-container">
                  <h2>{section.title}</h2>
                  <div className="">
                    <AliceCarousel
                      mouseDragEnabled
                      responsive={responsive}
                      dotsDisabled
                    >
                      {data.news.nodes.map((newsitem, index) => (
                        <div className="teaser">
                          {/* <NewsTeaser key={index} news={newsitem}></NewsTeaser> */}
                        </div>
                      ))}
                    </AliceCarousel>
                  </div>
                </Container>
              )}
            </section>
          </SectionEntityListStyle>
        )
      case "testimonial":
        return (
          <SectionEntityListStyle>
            <section id={section.sectionid}>
              {section.backgroundimage ? (
                <BackgroundImage
                  fluid={section.backgroundimage.asset.fluid}
                  className="gbi-section-background"
                >
                  <Container className="section-container">
                    <h2>{section.title}</h2>
                    <div className="teaser-flex">
                      <AliceCarousel
                        mouseDragEnabled
                        responsive={responsive}
                        dotsDisabled
                      >
                        {data.testimonial.nodes.map((testitem, index) => (
                          <div className="teaser">
                            {/* <TestimonialTeaser
                              key={index}
                              testimonial={testitem}
                            ></TestimonialTeaser> */}
                          </div>
                        ))}
                      </AliceCarousel>
                    </div>
                  </Container>
                </BackgroundImage>
              ) : (
                <Container className="section-container">
                  <h2>{section.title}</h2>
                  <div className="">
                    <AliceCarousel
                      mouseDragEnabled
                      responsive={responsive}
                      dotsDisabled
                    >
                      {data.testimonial.nodes.map((testitem, index) => (
                        <div className="teaser">
                          {/* <TestimonialTeaser
                            key={index}
                            testimonial={testitem}
                          ></TestimonialTeaser> */}
                        </div>
                      ))}
                    </AliceCarousel>
                  </div>
                </Container>
              )}
            </section>
          </SectionEntityListStyle>
        )
    }
  }
}

const SectionEntityList = ({ section, data }) => {
  return <SectionEntityListTemplate section={section} data={data} />
}

export default SectionEntityList
