import React from "react";
import { Headline } from "../components/Headline/Headline";
import { GatsbyLinkButton } from "../components/LinkButton/LinkButton";
import { SEO } from "../components/SEO/SEO";
import { BoyfriendStatsContainer } from "../containers/BoyfriendStatsContainer/BoyfriendStatsContainer";
import { ImageGalleryContainer } from "../containers/ImageGalleryContainer/ImageGalleryContainer";
import { LayoutWithHeroImageContainer } from "../containers/LayoutContainer/LayoutWithHeroImageContainer";

const IndexPage = () => (
  <LayoutWithHeroImageContainer>
    <SEO
      title="Home"
      keywords={[`justagayboy94`, `slave`, `twink`, `gay`, `bdsm`]}
    />
    <ImageGalleryContainer />
    <Headline subheadline="The rules are quite simple for 2019: He has to stay locked 24/7 in his beautiful tiny chastity cage. No orgasms, only a few ruined orgasms. That's it!">
      boyfriend
    </Headline>
    <BoyfriendStatsContainer />
    <GatsbyLinkButton to="/bf">Discover his journey</GatsbyLinkButton>
  </LayoutWithHeroImageContainer>
);

export default IndexPage;
