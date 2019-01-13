import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { LinkButton } from "../../components/LinkButton/LinkButton";

interface QueryResponse {
  site: {
    siteMetadata: {
      bfTwitterUrl: string;
    };
  };
}

export const BoyfriendFollowButtonContainer = () => (
  <StaticQuery query={query}>
    {(data: QueryResponse) => (
      <LinkButton href={data.site.siteMetadata.bfTwitterUrl} target="_blank">
        Follow him on Twitter
      </LinkButton>
    )}
  </StaticQuery>
);

const query = graphql`
  query BoyfriendFollowButton {
    site {
      siteMetadata {
        bfTwitterUrl
      }
    }
  }
`;
