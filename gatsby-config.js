require("dotenv").config();

module.exports = {
  siteMetadata: {
    bfTwitterUrl: "https://twitter.com/rubberboy921",
    title: "justagayboy94",
    initials: "jgb94",
    description: `Personal blog of justagayboy94`,
    author: `@justagayboy94`,
    twitterUrl: "https://twitter.com/justagayboy94"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `justagayboy94`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    {
      resolve: "gatsby-source-twitter-timeline",
      options: {
        request_options: {
          screen_name: "justagayboy94"
        },
        credentials: {
          consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
          access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
          access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        }
      }
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131430514-1"
      }
    },
    {
      resolve: `gatsby-source-ical`,
      options: {
        name: `events`,
        url: process.env.GOOGLE_CALENDAR_ICAL_URL
      }
    }
  ]
};
