import React from "react";
import styled from "styled-components";
import media from "../utils/media";

import FirstSection from "../components/About/FirstSection";
import SecondSection from "../components/About/SecondSection";

const StyledContainer = styled.section`
  margin: 50px 200px;

  ${media.tablet`
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

const Projects = () => (
  <>
    <StyledContainer>
      <StyledTextContainer>
        <StyledAboutText>KILKA SŁÓW O MNIE</StyledAboutText>
        <StyledNameText>Mateusz Kłysz</StyledNameText>
      </StyledTextContainer>
      <FirstSection />
      <SecondSection />
    </StyledContainer>
  </>
);

export default Projects;
