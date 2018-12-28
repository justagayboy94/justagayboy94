import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export const TwitterGallery: React.SFC = () => (
  <StaticQuery query={tweetsQuery}>
    {(data) => (
      <div>
        {data.allTweet.edges.map(edge => (
          <React.Fragment key={edge.node.id}>
            {edge.node.entities.media.map(media => {
              if (media.type !== 'photo') {
                return null
              }

              return <img src={media.media_url} />
            })}
          </React.Fragment>
        ))}
      </div>
    )}
  </StaticQuery>
)

const tweetsQuery = graphql`
  query TwitterGallery {
    allTweet {
      edges {
        node {
          id
          entities {
            media {
              id
              type
              media_url
            }
          }
        }
      }
    }
  }
`
