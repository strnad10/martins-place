/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div>
      <div className="bio">
        <div>
          <Link to="/about">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/profile-pic.png"
              width={100}
              height={100}
              quality={95}
              alt="Profile picture"
            />
          </Link>
          {/*
            <StaticImage
              className="avatar-badge"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/badges/general-badge.png"
              width={40}
              height={40}
              quality={75}
              alt="Badge"
            />
            */}
        </div>
        {author?.name && (
          <p>
            Written by <strong><a href={`https://twitter.com/${social?.twitter || ``}`}>{author.name}</a></strong> {author?.summary || null} <a href={`https://twitter.com/${social?.twitter || ``}`}>Twitter</a> or <a href={`https://linkedin.com/in/${social?.linkedin || ``}`}>LinkedIn</a>. You can also find me on <a href={`https://github.com/${social?.github || ``}`}>GitHub</a> where I share development progress of this blog.
            {` `}
          </p>
        )}
      </div>
    </div>
  )
}

export default Bio
