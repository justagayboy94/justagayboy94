import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

export interface Meta {
  name: string;
  content: string;
}

export interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  keywords?: string[];
  title: string;
}

export const SEO: React.SFC<Props> = ({
  description,
  lang,
  meta,
  keywords,
  title
}) => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              content: metaDescription,
              name: `description`
            },
            {
              content: title,
              property: `og:title`
            },
            {
              content: metaDescription,
              property: `og:description`
            },
            {
              content: `website`,
              property: `og:type`
            },
            {
              content: `summary`,
              name: `twitter:card`
            },
            {
              content: data.site.siteMetadata.author,
              name: `twitter:creator`
            },
            {
              content: title,
              name: `twitter:title`
            },
            {
              content: metaDescription,
              name: `twitter:description`
            }
          ]
            .concat(
              (keywords || []).length > 0
                ? {
                    content: (keywords || []).join(`, `),
                    name: `keywords`
                  }
                : []
            )
            .concat(meta || [])}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  keywords: [],
  lang: `en`,
  meta: []
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
