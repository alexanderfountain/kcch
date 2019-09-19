let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})
module.exports = {
  siteMetadata: {
    title: `Spaans & Spaans`,
    description: `Spaans gatsby site.`,
    author: `Alexander Fountain`,
    url: `https://spaans.sanity.com`,
    dutchmainmenu: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Diensten",
        link: "/diensten",
        submenu: [
          {
            name: "Wat wij aanbieden",
            link: "/diensten",
          },
          {
            name: "ICT-RECHT",
            link: "/diensten/ictrecht",
          },
          {
            name: "PRIVACY",
            link: "/diensten/privacy",
          },
          {
            name: "AUTEURSRECHT",
            link: "/diensten/auteursrecht",
          },
          {
            name: "CONTRACTEN",
            link: "/diensten/contracten",
          },
          {
            name: "JURIDISCH VERTALER",
            link: "/diensten/juridisch-vertaler",
          },
        ],
      },
      {
        name: "ICT-JURISTEN",
        link: "/ict-juristen",
      },
      {
        name: "STARTERSPAKKET",
        link: "/starterspakket-ondernemers",
      },
      {
        name: "BLOGS",
        link: "/blogs",
      },
      {
        name: "CONTACT",
        link: "/contact",
        submenu: [
          {
            name: "CONTACT",
            link: "/contact/juridisch/advies",
          },
          {
            name: "ONS TEAM",
            link: "/about-us",
          },
        ],
      },
    ],
    mainmenu: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
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
        projectId: "1pifcwbd",
        dataset: "production",
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:400,500,700", "Open Sans:300,400,400i,700"],
        },
      },
    },
  ],
}
