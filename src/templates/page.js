import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from 'gatsby-image'
// import PostTemplate from './post'

class PageTemplate extends Component {
  render() {
    // const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPage
    const image = this.props.data.wordpressPage.featured_media.localFile
    console.log(image)
    return (
      <Layout>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          {image !== null && <Image fluid={image.childImageSharp.fluid} />}
          <p
            dangerouslySetInnerHTML={{
              __html: currentPage.content || currentPage.acf.page_body,
            }}
          />
        </div>
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
