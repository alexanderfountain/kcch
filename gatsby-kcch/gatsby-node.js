// const fs = require("fs")
// const mkdirp = require("mkdirp")
const path = require("path")

// exports.createPages = async ({ actions, graphql, reporter }, options) => {
//   const result = await graphql(`
//     {
//       landing: allSanityLanding {
//         nodes {
//           slug {
//             current
//           }
//           id
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panic("Error loading landtx: ", result.errors)
//   }
//   result.data.landing.nodes.forEach(node => {
//     const id = node.id
//     if (node.slug.current == "home") {
//       var slug = "/"
//     } else {
//       var slug = node.slug.current
//     }
//     actions.createPage({
//       path: slug,
//       component: require.resolve("./src/templates/landing.js"),
//       context: { id },
//     })
//   })
// }

// Get your list of languages from somewhere, env file, config.json, etc
// for sake of this snippet I am putting it here
const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page
  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE,
    },
  })
}

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      landing: allSanityLanding {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("Error loading landtx: ", result.errors)
  }
  result.data.landing.nodes.forEach(node => {
    const id = node.id
    if (node.slug.current == "home") {
      var slug = "/"
    } else {
      var slug = node.slug.current
    }
    const page = {
      path: slug,
      component: require.resolve("./src/templates/landing.js"),
      context: { id },
    }
    createLocalePage(page, createPage)
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createLocalePage(page, createPage)
}
