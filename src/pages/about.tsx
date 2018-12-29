import React from "react";
import styled from "styled-components";
import { SEO } from "../components/SEO/SEO";
import { ThemeProvider } from "../helpers/styled-components";
import { theme } from "../themes/default";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutPage = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <SEO title="About" />
      <h1>About</h1>
    </Container>
  </ThemeProvider>
);

export default AboutPage;
