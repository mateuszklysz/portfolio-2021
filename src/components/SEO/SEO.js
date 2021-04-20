import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            description
            author
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { author, description },
      },
    }) => (
      <Helmet>
        <html lang="pl" />
        <title>{author} - Portfolio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        ></meta>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    )}
  />
);

export default SEO;
