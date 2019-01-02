require("dotenv").config();

module.exports = {
  siteMetadata: {
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
      resolve: `gatsby-source-twitter`,
      options: {
        q: "#justagayboy94 from:justagayboy94 filter:images",
        tweet_mode: "extended",
        fetchAllResults: true,
        credentials: {
          consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
          bearer_token: process.env.TWITTER_API_CONSUMER_TOKEN
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
