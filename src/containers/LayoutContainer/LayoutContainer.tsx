import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { ThemeProvider } from "../../helpers/styled-components";
import { theme } from "../../themes/default";

export interface Props {
  children: React.ReactNode;
}

export const LayoutContainer: React.SFC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query LayoutContainer {
          site {
            siteMetadata {
              initials
            }
          }
        }
      `}
      render={data => (
        <Layout title={data.site.siteMetadata.initials}>{children}</Layout>
      )}
    />
  </ThemeProvider>
);
