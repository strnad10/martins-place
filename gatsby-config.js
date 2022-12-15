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
    menuLinks:[
      {
        name:`home`,
        link:`/`,
        icon:`/navigation/home.svg`
      },
      {
      name:`tags`,
      link:`/tags`,
      icon:`/navigation/tags.svg`
      },
      {
        name:`about`,
        link:`/about`,
        icon:`/navigation/about.svg`
      },
      {
        name:`linkedin`,
        link:`https://linkedin.com/in/strnad10`,
        icon:`/navigation/linkedin.svg`
      },
      {
        name:`twitter`,
        link:`https://twitter.com/strnad10`,
        icon:`/navigation/twitter.svg`
      },
      {
        name:`github`,
        link:`https://github.com/strnad10`,
        icon:`/navigation/github.svg`
      }, // TODO: Add RSS feed to navigation
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                  nodes {
                    excerpt
                    html
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
          return {
            url: path,
            changefreq: `daily`,
            priority: 0.7,
          }
        },
      },
    },
  ],
}
