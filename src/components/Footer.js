import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import media from "../utils/media";

const StyledContainer = styled.footer`
  background-color: ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  line-height: 80px;
  text-align: center;
  width: 100%;
  height: 80px;
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.s};
  `}
`;

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
      <StyledContainer>
        <p>
          © {siteMetadata.date} {siteMetadata.author}. All rights reserved
        </p>
      </StyledContainer>
    </>
  );
};

export default Footer;
