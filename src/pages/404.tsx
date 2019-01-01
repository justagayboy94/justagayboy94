import React from "react";

import { Container } from "../components/Container/Container";
import { SEO } from "../components/SEO/SEO";
import { LayoutContainer } from "../containers/LayoutContainer/LayoutContainer";

const NotFoundPage = () => (
  <LayoutContainer>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutContainer>
);

export default NotFoundPage;
