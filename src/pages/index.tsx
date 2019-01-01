import React from "react";
import { SEO } from "../components/SEO/SEO";
import { ImageGalleryContainer } from "../containers/ImageGalleryContainer/ImageGalleryContainer";
import { LayoutWithHeroImageContainer } from "../containers/LayoutContainer/LayoutWithHeroImageContainer";

const IndexPage = () => (
  <LayoutWithHeroImageContainer>
    <SEO
      title="Home"
      keywords={[`justagayboy94`, `slave`, `twink`, `gay`, `bdsm`]}
    />
    <ImageGalleryContainer />
  </LayoutWithHeroImageContainer>
);

export default IndexPage;
