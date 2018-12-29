import { graphql, StaticQuery } from "gatsby";
import React from "react";

interface QueryResponse {
  allTweet: {
    edges: Array<{
      node: {
        id: string;
        entities: {
          media: Array<{
            id: string;
            type: string;
            media_url: string;
          }>;
        };
      };
    }>;
  };
}

export const TwitterGallery: React.SFC = () => (
  <StaticQuery query={tweetsQuery}>
    {(data: QueryResponse) => (
      <div>
        {data.allTweet.edges.map(edge => (
          <React.Fragment key={edge.node.id}>
            {edge.node.entities.media.map(media => {
              if (media.type !== "photo") {
                return null;
              }

              return <img src={media.media_url} />;
            })}
          </React.Fragment>
        ))}
      </div>
    )}
  </StaticQuery>
);

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
`;
