import * as React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ShareButtons from "../components/shareButtons"
import { Toc } from "../components/toc"

const BlogPostTemplate = ({ data, location, children }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const url = typeof window !== "undefined" ? window.location.href : "";
  const { previous, next } = data
  const tagsList = post.frontmatter.tags.map((tag) =>
    <Link className="postTag" to={`/tags/${kebabCase(tag)}`} key={tag}>{tag}</Link>
  );
  const ogimage = post.frontmatter.ogimage.childImageSharp.gatsbyImageData.images.fallback.src
  const toc = post.tableOfContents !== undefined ? post.tableOfContents : null

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        ogimage={ogimage}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <div className="postMetaData">
            <p className="postDate">📆 {post.frontmatter.date}</p>
            <p className="postTime">📖 {post.frontmatter.time}</p>
            <div className="postTagPanel">
              <p className="postTagLabel">🏷️ Tags: </p>
              <p className="postTags">{tagsList}</p>
            </div>
            <ShareButtons 
              url={url}
              title={siteTitle}
              description={post.frontmatter.description || post.excerpt}
            />
          </div>
        </header>
        <Toc tableOfContents={toc} />
        <section itemProp="articleBody">{children}</section>
        <hr />
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        time
        tags
        ogimage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      tableOfContents
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
