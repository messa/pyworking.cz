import React from 'react'
import { StaticQuery, graphql } from "gatsby"

function WorkshopList() {
  return (
    <StaticQuery
      query={
        graphql`
          query MyQuery {
            allEventsYaml {
              edges {
                node {
                  id
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
            }
          }
        `
      }
    render={data => data.allEventsYaml.edges.map(edge => edge.node).map(node => (
      <p key={node.id}>
        <span className='event-title'>
          <a href='/workshops/20191116_Prace_s_XLSX_tabulkami'>{node.event.title}</a>
        </span>
        <span className='event-date'>
          <i className="fa fa-calendar-check-o" aria-hidden="true" />
          {node.event.date}
        </span>
        <span className='event-location'>
          <i className="fa fa-map-marker" aria-hidden="true" />
          {node.event.location}
        </span>
      </p>
    ))}
    />
  )
}

export default WorkshopList






