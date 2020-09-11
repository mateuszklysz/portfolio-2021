import React from "react";
import { Container } from "./Footer.styles";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            date
          }
        }
      }
    `
  );
  return (
    <>
      <Container>
        <p>
          © {siteMetadata.date} {siteMetadata.author}. All rights reserved
        </p>
      </Container>
    </>
  );
};

export default Footer;
