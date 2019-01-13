import React from "react";
import { Headline } from "../components/Headline/Headline";
import { SEO } from "../components/SEO/SEO";
import { BoyfriendFollowButton } from "../containers/BoyfriendFollowButton/BoyfriendFollowButton";
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
    <BoyfriendFollowButton />
  </LayoutContainer>
);

export default IndexPage;
