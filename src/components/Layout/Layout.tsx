import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { ThemeProvider } from "../../helpers/styled-components";
import avatar from "../../images/avatar.jpg";
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
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header title={data.site.siteMetadata.title} avatar={avatar} />
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
