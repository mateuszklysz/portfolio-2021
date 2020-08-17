import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import media from "../utils/media";
import Cube from "./Cube/Cube";

const StyledContainer = styled.section`
  margin: 100px 100px 40px 100px;
  /* background-color: red; */
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  color: ${({ theme: { color } }) => color.white};

  ${media.desktopL`
    height: auto;
    flex-direction: column;
 `}

  ${media.tablet`
    margin-top: 50px;
  `}
`;

const StyledTextContainer = styled.div`
  position: relative;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.desktopL`
    text-align: center;
    position: static;
   `}
`;

const StyledCubeContainer = styled.div`
  z-index: 1;
  width: 700px;
  height: 700px;
  outline: none;

  ${media.desktopS`
    width: 500px;
    height: 500px;
  `}

  ${media.phone`
    width: 350px;
    height: 350px;
  `}

  ${media.ip4`
    width: 300px;
    height: 300px;
  `}
`;

const StyledName = styled.h3`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.xm};
  font-weight: lighter;

  ${media.desktopS`
    font-size: ${({ theme: { font } }) => font.size.m}
   `}

  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.s}
  `}

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.xs}
  `}
`;

const StyledProfession = styled.h1`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.xxl};
  font-weight: bold;

  ${media.desktopS`
    font-size: ${({ theme: { font } }) => font.size.xl}
   `}

  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.l}
  `}

  ${media.ip4`
    font-size: 30px}
  `}
`;

const StyledMotto = styled.h2`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.l};
  font-weight: lighter;

  ${media.desktopS`
    font-size: ${({ theme: { font } }) => font.size.xm}
   `}

  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.m}
  `}

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.xs}
  `}
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
      <StyledTextContainer>
        <StyledName>{siteMetadata.author}</StyledName>
        <StyledProfession>Front-end Developer</StyledProfession>
        <StyledMotto>Skupiam się na czystym i prostym kodzie</StyledMotto>
      </StyledTextContainer>
      <StyledCubeContainer>
        <Cube />
      </StyledCubeContainer>
    </StyledContainer>
  );
};
export default Hero;
