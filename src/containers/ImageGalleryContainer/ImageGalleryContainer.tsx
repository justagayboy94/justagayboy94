import { graphql, StaticQuery } from "gatsby";
import React from "react";
import {
  Image,
  ImageGallery
} from "../../components/ImageGallery/ImageGallery";
import { LinkButton } from "../../components/LinkButton/LinkButton";

interface Edge {
  node: {
    full_text: string;
    extended_entities: {
      media: Array<{
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

  allTwitterTimelineTweet: {
    edges: Edge[];
  };
}

export class ImageGalleryContainer extends React.Component {
  public render() {
    return (
      <StaticQuery query={tweetsQuery}>
        {(data: QueryResponse) => (
          <ImageGallery
            moreButton={
              <LinkButton
                href={data.site.siteMetadata.twitterUrl}
                target="_blank"
              >
                More on Twitter
              </LinkButton>
            }
            title="Latest pics"
            images={this.filterImages(data.allTwitterTimelineTweet.edges)}
          />
        )}
      </StaticQuery>
    );
  }

  private filterImages(edges: Edge[]) {
    const images: Image[] = [];

    edges.forEach(edge => {
      edge.node.extended_entities.media.forEach(media => {
        images.push({
          alt: edge.node.full_text,
          src: media.media_url_https,
          url: media.url
        });
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
    allTwitterTimelineTweet(
      limit: 10
      filter: {
        retweeted: { eq: false }
        extended_entities: { media: { elemMatch: { type: { eq: "photo" } } } }
      }
    ) {
      edges {
        node {
          full_text
          extended_entities {
            media {
              media_url_https
              url
            }
          }
        }
      }
    }
  }
`;
