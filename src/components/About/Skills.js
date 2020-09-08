import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import media from "../../utils/media";
import Html from "../../assets/svg/about/html5.svg";
import SCIcon from "../../assets/svg/about/styled-components.svg";
import Gatsby from "../../assets/svg/about/gatsby.svg";
import JSIcon from "../../assets/svg/about/javascript.svg";
import Sass from "../../assets/svg/about/sass.svg";
import ThreeJS from "../../assets/svg/about/threejs.svg";
import GraphQL from "../../assets/svg/about/graphql.svg";
import Typescript from "../../assets/svg/about/typescript.svg";
import GSAPIcon from "../../assets/svg/about/gsap.svg";
import VSCode from "../../assets/svg/about/vscode.svg";

const StyledWrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.secondary};
  height: 900px;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
  ${media.tablet`
    width: 50%;
  `}
`;

const StyledOption = styled.div`
  ${({ color }) =>
    color
      ? css`
          background: linear-gradient(to right, ${color}, #1c1c1c);
        `
      : css`
          background: linear-gradient(to right, #121212, #1c1c1c);
        `}

  border-radius: 25px;
  display: flex;
  align-items: center;
  width: 520px;
  height: 100px;
  margin: 10px 0;
  ${media.desktop`
    width: 420px;
  `}
  ${media.laptop`
    width: 350px;
  `}
  ${media.tablet`
    width: 300px;
  `}
  ${media.phone`
    width: 180px;
  `}
  ${media.ip4`
    width: 150px;
  `}
`;

const StyledHeader = styled.p`
  line-height: 100px;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.l};
  font-weight: bold;
  margin: 0 auto;
  ${media.desktop`
    font-size: ${({ theme: { font } }) => font.size.xxm}
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.m}
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.xs}
  `}
`;

const StyledIcon = styled.div`
  margin: 10px 20px;
  & > svg {
    width: 60px;
    height: 60px;
  }
  ${media.desktop`
    & > svg {
      width: 50px;
      height: 50px;
    }
  `}
  ${media.phone`
    & > svg {
      width: 30px;
      height: 30px;
    }
  `}
  ${media.ip4`
    & > svg {
      width: 25px;
      height: 25px;
    }
  `}
`;

const StyledText = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xxm};
  font-weight: bold;
  ${media.desktop`
    font-size: ${({ theme: { font } }) => font.size.xm}
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs}
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s}
  `}
`;

const Skills = () => {
  const wrapperRef = useRef(null);
  const canRef = useRef(null);
  const learnRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      [canRef.current.children, learnRef.current.children],
      { x: "-10", autoAlpha: 0 },
      {
        x: "0",
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "0 40%",
        },
      }
    );
  }, []);
  return (
    <StyledWrapper ref={wrapperRef}>
      <StyledContainer ref={canRef}>
        <StyledOption color="#4C8C4A">
          <StyledHeader>Co potrafię</StyledHeader>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <Html />
          </StyledIcon>
          <StyledText>Semantic HTML</StyledText>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <SCIcon />
          </StyledIcon>
          <StyledText>Styled Components</StyledText>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <Gatsby />
          </StyledIcon>
          <StyledText>React / GatsbyJS</StyledText>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <JSIcon />
          </StyledIcon>
          <StyledText>JS ES6+</StyledText>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <Sass />
          </StyledIcon>
          <StyledText>Sass / Scss</StyledText>
        </StyledOption>
      </StyledContainer>
      <StyledContainer ref={learnRef}>
        <StyledOption color="#FFB04C">
          <StyledHeader>Czego się uczę</StyledHeader>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <ThreeJS />
          </StyledIcon>
          <StyledText>Three.js</StyledText>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <GraphQL />
          </StyledIcon>
          <StyledText>GraphQL</StyledText>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <Typescript />
          </StyledIcon>
          <StyledText>Typescript</StyledText>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <GSAPIcon />
          </StyledIcon>
          <StyledText>GSAP</StyledText>
        </StyledOption>
        <StyledOption>
          <StyledIcon>
            <VSCode />
          </StyledIcon>
          <StyledText>VSCode</StyledText>
        </StyledOption>
      </StyledContainer>
    </StyledWrapper>
  );
};
export default Skills;
