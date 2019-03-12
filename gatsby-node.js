const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('./src/templates/product.js')
    resolve(
      graphql(
        `
          {
            allContentfulProduct {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const products = result.data.allContentfulProduct.edges
        products.forEach((product, index) => {
          createPage({
            path: `/equipment/${product.node.slug}/`,
            component: productTemplate,
            context: {
              slug: product.node.slug
            },
          })
        })
      })
    )
  })
}
