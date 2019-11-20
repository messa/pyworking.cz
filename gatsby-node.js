const remark = require('remark')
const remarkHtml = require('remark-html')
const path = require(`path`)

exports.onCreateNode = async function ({ node, actions, getNode }) {
  const { createNode, createNodeField } = actions
  if (node.internal.type === 'EventsYaml' && node.event) {
    //console.info(`onCreateNode: ${JSON.stringify(node)}`)
    if (node.event.description) {
      createNodeField({
        node,
        name: 'descriptionHtml',
        value: (await remark().use(remarkHtml).process(node.event.description)).contents,
      })
    }
    const fileNode = getNode(node.parent)
    const slug = fileNode.name
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allEventsYaml {
        edges {
          node {
            id
            event {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  //console.log(JSON.stringify(result, null, 2))
  result.data.allEventsYaml.edges.forEach(({ node }) => {
    createPage({
      path: '/workshops/' + node.fields.slug,
      component: path.resolve(`./src/templates/workshop.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
