import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              name
              id
              items {
                wordpress_id
                order
                wordpress_parent
                title
                url
                attr
                target
                classes
                xfn
                description
                object_id
                object
                object_slug
                type
                type_label
              }
            }
          }
        }
      }
    `}
    render={data => {
      const menuItems =
        data.allWordpressWpApiMenusMenusItems.edges[0].node.items
      return (
        <header>
          <h1>{data.allWordpressWpApiMenusMenusItems.edges[0].node.name}</h1>
          <ul>
            {menuItems.map(item => {
              if (item.object === 'page' || item.object === 'custom')
                return (
                  <li
                    style={{ display: `inline-block`, marginRight: `10px` }}
                    key={item.object_slug}
                  >
                    <Link to={item.object_slug || item.url}>{item.title}</Link>
                  </li>
                )
            })}
          </ul>
        </header>
      )
    }}
  />
)

export default MainMenu
