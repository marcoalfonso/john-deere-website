const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createProductPages = new Promise((resolve, reject) => {
    const productTemplate = path.resolve('./src/templates/product.js')
    resolve(
      graphql(
        `
          {
            allContentfulProduct {
              edges {
                node {
                  productModelName
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
            path: `/${product.node.slug}/`,
            component: productTemplate,
            context: {
              slug: product.node.slug
            },
          })
        })
      })
    )
  })

  const createCategoryPages =  new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve('./src/templates/category.js')
    resolve(
      graphql(
        `
          {
            allContentfulCategory {
              edges {
                node {
                  title
                  slug
                  subcategories {
                    title
                    slug
                  }
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

        const categories = result.data.allContentfulCategory.edges

        categories.forEach((category, index) => {
          createPage({
            path: `/${category.node.slug}/`,
            component: categoryTemplate,
            context: {
              slug: category.node.slug,
              title: category.node.title
            },
          })
        })
      })
    )
  })

  const createSubcategoryPages =  new Promise((resolve, reject) => {
    const subcategoryTemplate = path.resolve('./src/templates/subcategory.js')
    resolve(
      graphql(
        `
          {
            allContentfulCategory {
              edges {
                node {
                  subcategories {
                    title
                    slug
                  }
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

        const subcategories = result.data.allContentfulCategory.edges
        console.log("subcategories", subcategories)

        subcategories.forEach(({node}, index) => {
          console.log("node", node)
          node.subcategories.forEach((subcategory, index) => {
            createPage({
              path: `/${subcategory.slug}/`,
              component: subcategoryTemplate,
              context: {
                slug: subcategory.slug,
                title: subcategory.title
              },
            })
          })
        })
      })
    )
  })

  return Promise.all([createProductPages, createCategoryPages, createSubcategoryPages])
}
