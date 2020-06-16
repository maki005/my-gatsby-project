const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const blogresult = await graphql(`
        query {
            allContentfulBlogPost(sort: {fields: id, order: DESC}) {
                edges {
                  node {
                    id
                    slug
                  }
                }
              }
        }
    `)

    if (blogresult.errors) {
        reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
        return
    }

    blogresult.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
            path: `/work/post/${node.slug}/`,
            component: path.resolve(`./src/pages/templates/blogpost-template.js`),
        })
    })
}