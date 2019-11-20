import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'

function IndexPage({ data }) {
  return (
    <Layout>
      <p>workshop</p>
      <pre>{JSON.stringify({ data }, null, 2)}</pre>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query($slug: String!) {
    eventsYaml(fields: { slug: { eq: $slug } }) {
      event {
        authors
        description
        location
        title
        date
      }
      fields {
        descriptionHtml
        slug
      }
    }
  }
`
