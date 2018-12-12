module.exports = `
  {
    allWordpressPost {
      edges {
        node {
          id
          slug
          status
          template
          format
        }
      }
    }
    allWordpressPage {
      edges {
        node {
          id
          slug
          status
          template
        }
      }
    }
  }
`
