import * as React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteImage = data.site.siteMetadata?.image
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title="All posts"
        ogimage={siteImage}
      />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const tagsList = post.frontmatter.tags.map((tag) =>
            <Link className="postTag" to={`/tags/${kebabCase(tag)}`} key={kebabCase(tag)}>{tag}</Link>
          );

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>
                    <div className="postInfo">
                      📆 {post.frontmatter.date}<br/>
                      📖 {post.frontmatter.time}<br/>
                      🏷️ Tags: {tagsList}
                    </div>
                  </small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        image
      }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          time
          tags
        }
      }
    }
  }
`
