import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { ImageGallery } from "../../components/ImageGallery/ImageGallery";

interface Edge {
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
}

interface QueryResponse {
  allTweet: {
    edges: Edge[];
  };
}

export class ImageGalleryContainer extends React.Component {
  public render() {
    return (
      <StaticQuery query={tweetsQuery}>
        {(data: QueryResponse) => (
          <ImageGallery images={this.filterImages(data.allTweet.edges)} />
        )}
      </StaticQuery>
    );
  }

  private filterImages(edges: Edge[]) {
    const images: string[] = [];

    edges.forEach(edge => {
      edge.node.entities.media.forEach(media => {
        if (media.type === "photo") {
          images.push(media.media_url);
        }
      });
    });

    return images;
  }
}

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
