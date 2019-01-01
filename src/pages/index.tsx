import React from "react";
import { Container } from "../components/Container/Container";
import { SEO } from "../components/SEO/SEO";
import { TwitterGallery } from "../components/TwitterGallery/TwitterGallery";
import { LayoutWithHeroImageContainer } from "../containers/LayoutContainer/LayoutWithHeroImageContainer";

const IndexPage = () => (
  <LayoutWithHeroImageContainer>
    <SEO
      title="Home"
      keywords={[`justagayboy94`, `slave`, `twink`, `gay`, `bdsm`]}
    />
    <Container>
      <TwitterGallery />
    </Container>
  </LayoutWithHeroImageContainer>
);

export default IndexPage;
