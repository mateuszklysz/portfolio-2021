import React from "react";
import styled from "styled-components";
import media from "../utils/media";
import { graphql } from "gatsby";

import FirstSection from "../components/About/FirstSection";
import SecondSection from "../components/About/SecondSection";
import Skills from "../components/About/Skills";

const StyledContainer = styled.section`
  margin: 50px auto;
  padding: 0 100px;
  max-width: 1250px;
  ${media.tablet`
    padding: 0;
    margin: 0 100px;
  `}
  ${media.phone`
    margin: 0 50px;
  `}
`;

const StyledTextContainer = styled.header`
  width: 100%;
  color: ${({ theme: { color } }) => color.white};

  ${media.tablet`
    text-align: center;
  `}
`;

const StyledAboutText = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.xm};

  ${media.tablet`
    font-size: ${({ theme: { font } }) => font.size.m};
  `}
`;
const StyledNameText = styled.h2`
  font-size: ${({ theme: { font } }) => font.size.xl};

  ${media.tablet`
    font-size: ${({ theme: { font } }) => font.size.l};
  `}
`;

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

const Projects = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  return (
    <>
      <StyledContainer>
        <StyledTextContainer>
          <StyledAboutText>KILKA SŁÓW O MNIE</StyledAboutText>
          <StyledNameText>{siteMetadata.author}</StyledNameText>
        </StyledTextContainer>
        <FirstSection />
        <SecondSection />
      </StyledContainer>
      <Skills />
    </>
  );
};
export default Projects;
