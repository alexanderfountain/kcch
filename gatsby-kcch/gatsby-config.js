let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})
module.exports = {
  siteMetadata: {
    title: `KCCH`,
    description: `KCCH gatsby site.`,
    author: `Alexander Fountain`,
    url: `https://kcch.sanity.com`,
    mainmenu: [
      {
        name: "Gallery",
        link: "/gallery",
      },
      {
        name: "Contact Us",
        link: "/contact-us",
      },
      {
        name: "What’s Included",
        link: "/whats-included-affordable-apartments",
      },
      {
        name: "FAQs",
        link: "/faqs-corporate-housing-options",
      },
      {
        name: "Blog",
        link: "/kansas-city-corporate-housing-blog",
      },
      {
        name: "Get Started",
        link: "/get-started-kansas-city-corporate-housing",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "iqjqw8ps",
        dataset: "production",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:400,500,600,700"],
        },
      },
    },
  ],
}