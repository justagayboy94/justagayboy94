import React from "react";
import { Headline } from "../components/Headline/Headline";
import { SEO } from "../components/SEO/SEO";
import { BoyfriendFollowButtonContainer } from "../containers/BoyfriendFollowButtonContainer/BoyfriendFollowButtonContainer";
import { BoyfriendStatsContainer } from "../containers/BoyfriendStatsContainer/BoyfriendStatsContainer";
import { LayoutContainer } from "../containers/LayoutContainer/LayoutContainer";

const IndexPage = () => (
  <LayoutContainer>
    <SEO
      title="Boyfriend"
      keywords={[
        `justagayboy94`,
        `slave`,
        `twink`,
        `gay`,
        `bdsm`,
        `rubberboy92`
      ]}
    />
    <Headline>boyfriend</Headline>
    <BoyfriendStatsContainer />
    <BoyfriendFollowButtonContainer />
  </LayoutContainer>
);

export default IndexPage;
