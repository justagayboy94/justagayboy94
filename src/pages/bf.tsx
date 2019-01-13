import React from "react";
import { Headline } from "../components/Headline/Headline";
import { SEO } from "../components/SEO/SEO";
import { BoyfriendFollowButtonContainer } from "../containers/BoyfriendFollowButtonContainer/BoyfriendFollowButtonContainer";
import { BoyfriendStatsContainer } from "../containers/BoyfriendStatsContainer/BoyfriendStatsContainer";
import { LayoutContainer } from "../containers/LayoutContainer/LayoutContainer";

const BfPage = () => (
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
      description="The rules are quite simple for 2019: He has to stay locked 24/7 in his beautiful tiny chastity cage. No orgasms, only a few ruined orgasms. That's it!"
    />
    <Headline subheadline="The rules are quite simple for 2019: He has to stay locked 24/7 in his beautiful tiny chastity cage. No orgasms, only a few ruined orgasms. That's it!">
      boyfriend
    </Headline>
    <BoyfriendStatsContainer />
    <BoyfriendFollowButtonContainer />
  </LayoutContainer>
);

export default BfPage;
