/**
 * Navigation component
 * 
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
            icon
          }
        }
      }
    }
  `)

  const menuLinks = data.site.siteMetadata?.menuLinks

  return (
    <div className="navigation">
      <nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name} className="menuItem">
              <a href={link.link}>
                <img src={link.icon} alt={link.name} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
