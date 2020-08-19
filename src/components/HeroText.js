import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import gsap from "gsap";
import media from "../utils/media";

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

const StyledName = styled.h3`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.xm};
  padding-left: 5px;
  position: relative;
  top: 10px;

  ${media.desktopL`
    font-size: ${({ theme: { font } }) => font.size.m};
    padding-left: 0;
   `}

  ${media.phone`
    position: static;
    font-size: ${({ theme: { font } }) => font.size.xs};
  `}

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s};
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
    font-size: 30px};
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
    font-size: ${({ theme: { font } }) => font.size.m};
  `}

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s};
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

  ${media.ip4`
    width: 120px;
    height:30px;
   `}
`;

const StyledButton = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  background-color: ${({ theme: { color } }) => color.primary};
  text-align: center;
  line-height: 50px;
  width: 130px;
  height: 100%;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 20px;
  font-weight: bold;
  box-sizing: border-box;
  ${media.phone`
    width: 100px;
    line-height: 40px;
  `}

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s};
    width: 70px;
    line-height: 30px;
   `}
`;

const StyledButtonLink = styled(AniLink)`
  display: block;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

const StyledGithubLink = styled.a`
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

  ${media.ip4`
    width: 30px;
    height: 30px;
   `}
`;

const HeroText = () => {
  const textContainerRef = useRef(null);
  const buttonRef = useRef(null);
  const githubRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      textContainerRef.current,
      { x: "-=300", autoAlpha: 0 },
      { duration: 2, x: "0", autoAlpha: 1 }
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
  const handleButtonAnimation = (item, scale) => {
    const tl = gsap.timeline({
      defaults: { ease: "power0.easeNone" },
    });
    tl.to(item.current, {
      duration: 0.3,
      scale: scale,
    });
  };
  return (
    <StyledTextContainer ref={textContainerRef}>
      <StyledName>{siteMetadata.author}</StyledName>
      <StyledProfession>Front-end Developer</StyledProfession>
      <StyledMotto>Skupiam się na czystym i prostym kodzie</StyledMotto>
      <StyledIconsContainer>
        <StyledButton
          ref={buttonRef}
          onMouseEnter={() => handleButtonAnimation(buttonRef, 0.95)}
          onMouseLeave={() => handleButtonAnimation(buttonRef, 1)}
        >
          <StyledButtonLink paintDrip hex="#121212" to="about">
            O MNIE
          </StyledButtonLink>
        </StyledButton>
        <StyledGithubLink
          href="https://github.com/mateuszklysz"
          target="_blank"
          ref={githubRef}
          onMouseEnter={() => handleButtonAnimation(githubRef, 0.95)}
          onMouseLeave={() => handleButtonAnimation(githubRef, 1)}
        >
          <Img fluid={childImageSharp.fluid} />
        </StyledGithubLink>
      </StyledIconsContainer>
    </StyledTextContainer>
  );
};
export default HeroText;
