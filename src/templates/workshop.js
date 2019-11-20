import React from 'react'
import { graphql } from "gatsby"

function IndexPage({ data }) {
  return (
    <div>
      <p>workshop</p>
      <pre>{JSON.stringify({ data }, null, 2)}</pre>
    </div>
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
