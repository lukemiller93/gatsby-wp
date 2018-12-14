import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
// import Img from 'gatsby-image'
import PropTypes from 'prop-types'

class PostsTemplate extends Component {
  render() {
    const posts = this.props.data.allWordpressPost
    return (
      <Layout>
        <h1>Posts Page</h1>
        {posts.edges.map(({ node }) => (
          <main
            key={node.slug}
            className="post"
            style={{ marginBottom: '50px' }}
          >
            <Link style={{ textDecoration: 'none' }} to={`posts/${node.slug}`}>
              <h3 style={{ color: 'rebeccapurple' }}>{node.title}</h3>
            </Link>
            <small style={{ color: 'rebeccapurple', fontWeight: 'bold' }}>
              {node.date}
            </small>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
          </main>
        ))}
      </Layout>
    )
  }
}

PostsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}
export default PostsTemplate

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
