import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import GalleryTeaser from "../components/entities/gallery/galleryTeaser"
import styled from "styled-components"
import * as variable from "../components/variables"

const GalleryStyle= styled.div`
  .gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .teaser {
      width: calc(100% / 3 - 20px);
      margin-bottom:30px;
    }
    @media (max-width: ${variable.mobileWidth}) {
      .teaser {
        width: calc(100%);
        margin-bottom:30px;
      }
    }
  }

`
const GalleryTemplate = ({gallery, large}) => (
  <Layout>
    <Container>
      <GalleryStyle>
    <h1>Gallery</h1>
    <div className="gallery-container">
    {gallery.map((galleryitem, index) => (
      <div className="teaser">
            <GalleryTeaser
            key={index}
            gallery={galleryitem}
            large={large}
          ></GalleryTeaser>
                   </div>
          ))}
 
          </div>
          </GalleryStyle>
          </Container>
  </Layout>
)

export const query = graphql`
  query GalleryQuery {
    gallery: allSanityGallery {
      nodes {
        title
        image {
          asset {
            fluid(maxWidth: 450, maxHeight: 300) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    large: allSanityGallery {
      nodes {
        title
        image {
          asset {
            url
            fluid(maxWidth: 850, maxHeight: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`

const Gallery = ({ data }) => {
  const large = data.large
  const gallery = data.gallery.nodes
   return <GalleryTemplate gallery={gallery} large={large} />

}

export default Gallery

