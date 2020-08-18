import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import gsap from "gsap";
import media from "../utils/media";
import Cube from "./Cube/Cube";

const StyledContainer = styled.section`
  margin: 0 100px 40px 100px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  color: ${({ theme: { color } }) => color.white};

  ${media.desktopL`
    height: auto;
    flex-direction: column;
 `}
`;

const StyledTextContainer = styled.div`
  position: relative;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;

  ${media.desktopL`
    text-align: center;
    align-items:center;
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
  padding-left: 5px;

  ${media.desktopL`
    font-size: ${({ theme: { font } }) => font.size.m}
    padding-left: 0;
   `}

  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs}
  `}

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s}
  `}
`;

const StyledProfession = styled.h1`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.xxl};
  font-weight: bold;

  ${media.desktopL`
    font-size: ${({ theme: { font } }) => font.size.xl};
    padding-left: 0;
   `}

  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.l};
  `}

  ${media.ip4`
    font-size: 30px}
  `}
`;

const StyledMotto = styled.h2`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.l};
  padding-left: 2px; 

  ${media.desktopL`
    font-size: ${({ theme: { font } }) => font.size.xm};
    padding-left: 0;
   `}

  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.m}
  `}

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s}
  `}
`;

const StyledIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 10px;
  width: 200px;
  height: 50px;
  ${media.phone`
    margin-left: 0;
    height:40px;
    width: 150px;
   `}
`;

const StyledButton = styled(AniLink)`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  background-color: ${({ theme: { color } }) => color.primary};
  text-align: center;
  line-height: 50px;
  width: 100px;
  height: 100%;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 20px;
  font-weight: bold;
  box-sizing: border-box;
  ${media.phone`
    line-height: 40px;
  `}
`;

const StyledGithub = styled.a`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  ${media.phone`
    width: 40px;
    height: 40px;
   `}
`;

const Hero = () => {
  const textContainerRef = useRef(null);
  const cubeContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      textContainerRef.current,
      { x: "-=300", autoAlpha: 0 },
      { duration: 2, x: "0", autoAlpha: 1 }
    ).fromTo(
      cubeContainerRef.current,
      { x: "-=300", autoAlpha: 0 },
      { duration: 2, x: "0", autoAlpha: 1 },
      "-=2"
    );
  }, []);

  const {
    site: { siteMetadata },
    file: { childImageSharp },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
        file(relativePath: { eq: "github.png" }) {
          childImageSharp {
            fluid(maxHeight: 54) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return (
    <StyledContainer>
      <StyledTextContainer ref={textContainerRef}>
        <StyledName>{siteMetadata.author}</StyledName>
        <StyledProfession>Front-end Developer</StyledProfession>
        <StyledMotto>Skupiam się na czystym i prostym kodzie</StyledMotto>
        <StyledIconsContainer>
          <StyledButton paintDrip hex="#121212" to="about">
            O MNIE
          </StyledButton>
          <StyledGithub href="https://github.com/mateuszklysz" target="_blank">
            <Img fluid={childImageSharp.fluid} />
          </StyledGithub>
        </StyledIconsContainer>
      </StyledTextContainer>
      <StyledCubeContainer ref={cubeContainerRef}>
        <Cube />
      </StyledCubeContainer>
    </StyledContainer>
  );
};
export default Hero;
