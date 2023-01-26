const siteUrl = process.env.URL || `https://martin-strnad.cz`

module.exports = {
  siteMetadata: {
    title: `Martin' place`,
    author: {
      name: `Martin Strnad`,
      summary: `who lives in the Czech Republic. He's an overgrown child who's interested in productivity, time management and life improvements. Microsoft 365 is his thing. If you want to get in touch, contact him on `,
    },
    description: `Martin's place to rant. He lives in the Czech Republic. He's an overgrown child who's interested in productivity, time management and life improvements. Microsoft 365 is his thing.`,
    siteUrl: `https://martin-strnad.cz`,
    image: `/default-image.png`,
    keywords: `Microsoft, Microsoft 365, Azure AD, Microsoft Intune, Productivity, Self-development, Bicycles`,
    social: {
      twitter: `strnad10`,
      linkedin: `strnad10`,
      github: `strnad10`,
    },
    menuLinks: [
      {
        name: `home`,
        link: `/`,
        icon: `/navigation/home.svg`
      },
      {
        name: `tags`,
        link: `/tags`,
        icon: `/navigation/tags.svg`
      },
      {
        name: `about`,
        link: `/about`,
        icon: `/navigation/about.svg`
      },
      {
        name: `linkedin`,
        link: `https://linkedin.com/in/strnad10`,
        icon: `/navigation/linkedin.svg`
      },
      {
        name: `twitter`,
        link: `https://twitter.com/strnad10`,
        icon: `/navigation/twitter.svg`
      },
      {
        name: `github`,
        link: `https://github.com/strnad10`,
        icon: `/navigation/github.svg`
      },
      {
        name: `rss`,
        link: `/rss.xml`,
        icon: `/navigation/feed.svg`
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-embed-snippet",
            options: {
              classPrefix: "language-",
              directory: `${__dirname}/content/blog/`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              maintainCase: false,
              className: `autolink-header-icon`,
              offsetY: `100`,
              removeAccents: true,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.body }],
                  //TODO: Look for an alternative to allMarkdownRemark html field
                  // to properly generate RSS feed. Sadly they removed the html
                  // field in the V3 version and did not add it back in V4 version.
                })
              })
            },
            query: `
              {
                allMdx(sort: {frontmatter: {date: DESC}}) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Martin' place - RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin' Place to share stuff`,
        short_name: `Martin' Place`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#005b99`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://martin-strmad.us11.list-manage.com/subscribe/post?u=bdd6e6e84f2958112c1ca9944&amp;id=4723ac2a6d`,
        timeout: 3500
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-YKR3508XKN`,
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    { // TODO: add modified to siteMap using frontmatter information (modified or date if (modified === null)) 
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          if (path === `/` || path === `/about/`) {
            return {
              url: path,
              changefreq: `daily`,
              priority: 1,
            }
          }

          if (path.includes(`/tag`)) {
            return {
              url: path,
              changefreq: `daily`,
              priority: 0.5,
            }
          }

          return {
            url: path,
            changefreq: `daily`,
            priority: 0.7,
          }
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-twitter`,
  ],
}
