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
                  heroImage {
                    fluid(maxWidth: 2000, quality: 50) {
                      src
                    }
                  }
                  headline
                  body {
                    body
                  }
                  longFormText {
                    longFormText
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
              title: category.node.title,
              heroImage: category.node.heroImage.fluid,
              headline: category.node.headline,
              body: category.node.body.body,
              longFormText: category.node.longFormText.longFormText
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
                    heroImage {
                      fluid(maxWidth: 2000, quality: 50) {
                        src
                      }
                    }
                    products {
                      productThumbnailImage {
                        fluid {
                          src
                        }
                      }
                      productModelNumber
                      productModelName
                      productOverview {
                        productOverview
                      }
                      slug
                      primaryCtaUrl
                    }
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

        subcategories.forEach(({node}, index) => {
          node.subcategories.forEach((subcategory, index) => {
            createPage({
              path: `/${subcategory.slug}/`,
              component: subcategoryTemplate,
              context: {
                slug: subcategory.slug,
                title: subcategory.title,
                heroImage: subcategory.heroImage.fluid,
                products: subcategory.products
              },
            })
          })
        })
      })
    )
  })

  const createJobsPages =  new Promise((resolve, reject) => {
    const jobTemplate = path.resolve('./src/templates/job.js')
    resolve(
      graphql(
        `
          {
             allContentfulSublocation{
              edges {
                node {
                  title
                  slug
                  jobs {
                    title
                    slug
                    body {
                      body
                    }
                    pdf {
                      file {
                        url
                      }
                    }
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

        const sublocations = result.data.allContentfulSublocation.edges
        sublocations.forEach(({node}, index) => {

          node.jobs.forEach((job, index) => {
            createPage({
              path: `/${node.slug}/${job.slug}/`,
              component: jobTemplate,
              context: {
                slug: job.slug,
                title: job.title,
                body: job.body.body,
                pdf: job.pdf.file.url
              },
            })
          })
        })
      })
    )
  })

  return Promise.all([createProductPages, createCategoryPages, createSubcategoryPages, createJobsPages])
}
