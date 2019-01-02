import { graphql, StaticQuery } from "gatsby";
import React from "react";
import {
  Image,
  ImageGallery
} from "../../components/ImageGallery/ImageGallery";

interface Edge {
  node: {
    id: string;
    full_text: string;
    entities: {
      media: Array<{
        id: string;
        type: string;
        url: string;
        media_url_https: string;
      }>;
    };
  };
}

interface QueryResponse {
  site: {
    siteMetadata: {
      twitterUrl: string;
    };
  };

  allTweet: {
    edges: Edge[];
  };
}

export class ImageGalleryContainer extends React.Component {
  public render() {
    return (
      <StaticQuery query={tweetsQuery}>
        {(data: QueryResponse) => (
          <ImageGallery
            moreButton={{
              href: data.site.siteMetadata.twitterUrl,
              label: "More on Twitter"
            }}
            title="Latest pics"
            images={this.filterImages(data.allTweet.edges)}
          />
        )}
      </StaticQuery>
    );
  }

  private filterImages(edges: Edge[]) {
    const images: Image[] = [];

    edges.forEach(edge => {
      edge.node.entities.media.forEach(media => {
        if (media.type === "photo") {
          images.push({
            alt: edge.node.full_text,
            src: media.media_url_https,
            url: media.url
          });
        }
      });
    });

    return images;
  }
}

const tweetsQuery = graphql`
  query TwitterGallery {
    site {
      siteMetadata {
        twitterUrl
      }
    }
    allTweet {
      edges {
        node {
          id
          full_text
          entities {
            media {
              id
              type
              url
              media_url_https
            }
          }
        }
      }
    }
  }
`;
