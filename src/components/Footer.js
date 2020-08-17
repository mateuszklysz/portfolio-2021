import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import media from "../utils/media";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${({ theme: { color } }) => color.primary};
`;

const StyledText = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.s};

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.xs}
  `}
`;

const Footer = props => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <StyledFooter>
      <StyledText>
        {siteMetadata.author} © 2020 Wszelkie prawa zastrzeżone.
      </StyledText>
    </StyledFooter>
  );
};

export default Footer;
