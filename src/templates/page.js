import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from 'gatsby-image'
// import PostTemplate from './post'

class PageTemplate extends Component {
  render() {
    // const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPage
    const image = this.props.data.wordpressPage.featured_media
    console.log(image)
    return (
      <Layout>
        <main>
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          {image !== null && (
            <Image
              style={{ marginBottom: '300px' }}
              fluid={image.localFile.childImageSharp.fluid}
            />
          )}

          <article
            dangerouslySetInnerHTML={{
              __html: currentPage.content || currentPage.acf.page_body,
            }}
          />
        </main>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      date(formatString: "MMMM DD, YYYY")
      acf {
        page_body
        page_image {
          id
          localFile {
            id
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
