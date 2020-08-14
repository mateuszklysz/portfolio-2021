import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  max-width: 1400px;
  height: 400px;
  color: ${({ theme: { color } }) => color.white};
  font-family: ${({ theme: { font } }) => font.family.montserrat};
`;
const StyledName = styled.h3`
  position: relative;
  top: 5px;
  font-size: ${({ theme: { font } }) => font.size.m};
  font-weight: lighter;
`;
const StyledProfession = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.xl};
  font-weight: bold;
`;
const StyledMotto = styled.h2`
  font-size: ${({ theme: { font } }) => font.size.l};
  font-weight: lighter;
`;
const Hero = () => {
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
    <StyledContainer>
      <StyledName>{siteMetadata.author}</StyledName>
      <StyledProfession>Front-end Developer</StyledProfession>
      <StyledMotto>Skupiam się na czystym kodzie</StyledMotto>
    </StyledContainer>
  );
};
export default Hero;
