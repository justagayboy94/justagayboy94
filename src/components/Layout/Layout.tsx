import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { ThemeProvider } from "../../helpers/styled-components";
import { theme } from "../../themes/default";
import { Header } from "../Header/Header";

import "./layout.css";

export interface Props {
  children: React.ReactNode;
}

export const Layout: React.SFC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              initials
            }
          }
        }
      `}
      render={data => (
        <>
          <Header title={data.site.siteMetadata.initials} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0
            }}
          >
            {children}
          </div>
        </>
      )}
    />
  </ThemeProvider>
);
