import React, {
  Component
} from 'react'
import {
  graphql
} from 'gatsby'
import Layout from '../components/layout'
// import PostTemplate from './post'

class PageTemplate extends Component {
  render() {
    // const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPage

    return ( <
      Layout >
      <
      div >
      <
      h1 dangerouslySetInnerHTML = {
        {
          __html: currentPage.title
        }
      }
      /> <
      p dangerouslySetInnerHTML = {
        {
          __html: currentPage.content || currentPage.acf.page_body
        }
      }
      /> <
      /div> <
      /Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql `
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      date(formatString: "MMMM DD, YYYY")
      acf {
        page_body
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