import * as React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"

import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const group = data.allMarkdownRemark.group

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All Tags" />
      <h1>All Tags</h1>
      <ol style={{ listStyle: `none` }}>
        {group.map(tag => {
          const groupTitle = group.fieldValue

          return (
            <li key={groupTitle}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue}
                    </Link>
                  </h2>
                  <small>Total count: {tag.totalCount}</small>
                </header>
              </article>
            </li>
          )
        })}
        <li>
          <article
            className="post-list-item"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h2>
                <Link to="/">Back to all posts</Link>
              </h2>
            </header>
          </article>
        </li>
      </ol>
      <footer>
        <Bio />
      </footer>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`