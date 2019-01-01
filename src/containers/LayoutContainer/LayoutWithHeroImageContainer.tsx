import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { LayoutWithHeroImage } from "../../components/Layout/LayoutWithHeroImage";
import { ThemeProvider } from "../../helpers/styled-components";
import { theme } from "../../themes/default";

import avatar from "../../images/avatar.jpg";

export interface Props {
  children: React.ReactNode;
}

export const LayoutWithHeroImageContainer: React.SFC<Props> = ({
  children
}) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query LayoutWithHeroImageContainer {
          site {
            siteMetadata {
              initials
            }
          }
        }
      `}
      render={data => (
        <LayoutWithHeroImage
          heroImage={avatar}
          title={data.site.siteMetadata.initials}
        >
          {children}
        </LayoutWithHeroImage>
      )}
    />
  </ThemeProvider>
);
