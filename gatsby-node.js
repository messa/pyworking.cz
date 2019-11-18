const remark = require('remark')
const remarkHtml = require('remark-html')

exports.onCreateNode = async function ({ node, actions }) {
  const { createNode, createNodeField } = actions
  if (node.event && node.event.description) {
    console.info(`onCreateNode: ${JSON.stringify(node)}`)
    createNodeField({
      node,
      name: 'descriptionHtml',
      value: (await remark().use(remarkHtml).process(node.event.description)).contents,
    })
  }
}
