import React from "react";
import { SEO } from "../components/SEO/SEO";
import { TwitterGallery } from "../components/TwitterGallery/TwitterGallery";
import { LayoutWithHeroImageContainer } from "../containers/LayoutContainer/LayoutWithHeroImageContainer";

const IndexPage = () => (
  <LayoutWithHeroImageContainer>
    <SEO
      title="Home"
      keywords={[`justagayboy94`, `slave`, `twink`, `gay`, `bdsm`]}
    />
    <TwitterGallery />
  </LayoutWithHeroImageContainer>
);

export default IndexPage;
