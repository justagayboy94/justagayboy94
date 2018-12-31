import React from "react";
import { HeroImage } from "../components/HeroImage/HeroImage";
import { Layout } from "../components/Layout/Layout";
import { SEO } from "../components/SEO/SEO";
import { TwitterGallery } from "../components/TwitterGallery/TwitterGallery";

import avatar from "../images/avatar.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`justagayboy94`, `slave`, `twink`, `gay`, `bdsm`]}
    />
    <HeroImage image={avatar} />
    <TwitterGallery />
  </Layout>
);

export default IndexPage;
