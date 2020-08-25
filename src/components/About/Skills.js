import React from "react";
import styled from "styled-components";
import media from "../../utils/media";

const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.secondary};
  height: 850px;
  width: 100%;
  ${media.desktopL`
    height: 600px;
  `}
  ${media.phone`
    height: 400px;
  `}
  ${media.ip4`
    height: 350px;
  `}
`;

const StyledDiv = styled.div`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xxm};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  ${media.desktopS`
    font-size: ${({ theme: { font } }) => font.size.xm};
  `}
  ${media.tablet`
    width: 50%;
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.m};
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s};
  `}
`;

const StyledCanName = styled.h1`
  margin-bottom: 20px;
  background: linear-gradient(to right, #4c8c4a, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledLearnName = styled.h1`
  margin-bottom: 20px;
  background: linear-gradient(to right, #ffb04c, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledText = styled.p`
  text-align: center;
  line-height: 50px;
  ${media.desktopS`
  line-height: 40px;
  `}
  ${media.phone`
    line-height: 35px;
  `}
  ${media.ip4`
    line-height: 25px;
  `}
`;

const Skills = () => (
  <StyledContainer>
    <StyledDiv>
      <StyledCanName>Co potrafię</StyledCanName>
      <StyledText>
        Semantic HTML
        <br /> Styled Components
        <br /> React / Gatsby
        <br /> Git / Github
        <br /> JS ES6
        <br /> Sass
        <br /> <span style={{ opacity: "50%" }}>...</span>
      </StyledText>
    </StyledDiv>
    <StyledDiv>
      <StyledLearnName>Czego się uczę</StyledLearnName>
      <StyledText>
        GSAP
        <br />
        Vue.js/Gridsome
        <br /> TypeScript
        <br /> Terminal
        <br /> React Native
        <br /> Three.js
        <br /> Electron
      </StyledText>
    </StyledDiv>
  </StyledContainer>
);

export default Skills;
