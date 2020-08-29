import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import media from "../../utils/media";

const StyledSection = styled.section`
  margin: 100px 0 140px 0;
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { color } }) => color.white};
  width: 100%;
  ${media.tablet`
    margin: 70px 0;
     ${({ $second }) =>
       $second
         ? css`
             flex-direction: column;
           `
         : css`
             flex-direction: column-reverse;
           `}
    align-items: center;
  `}
`;

const StyledImage = styled(Img)`
  width: 500px;
  ${media.phone`
    width: 300px;
  `}
  ${media.ip4`
    width: 250px;
  `}
`;

const StyledTextContainer = styled.div`
  display: flex;
  height: 100%;
  width: 500px;
  margin: auto 0;
  ${({ $second }) =>
    $second
      ? css`
          padding-right: 50px;
          text-align: right;
        `
      : css`
          padding-left: 50px;
        `}
  font-size: ${({ theme: { font } }) => font.size.xxm};
  ${media.desktop`
    font-size: 23px;
  `}
  ${media.laptop`
    font-size: ${({ theme: { font } }) => font.size.xm};
  `}
  ${media.tablet`
    ${({ $second }) =>
      $second
        ? css`
            text-align: right;
            padding-right: 0;
          `
        : css`
            text-align: left;
            padding-left: 0;
          `}
    margin-bottom:50px;
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs};
    width: 100%;
  `}
`;

const StyledStrong = styled.strong`
  ${({ $second }) =>
    $second
      ? css`
          color: ${({ theme: { color } }) => color.green};
        `
      : css`
          color: ${({ theme: { color } }) => color.blue};
        `}
`;

const HobbySection = ({ second = false }) => {
  const firstSection = useRef(null);
  const secondSection = useRef(null);

  const {
    allFile: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/about/" } }) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    if (second) {
      gsap.fromTo(
        firstSection.current,
        { x: "+=100", autoAlpha: 0 },
        { duration: 2, x: "0", autoAlpha: 1 }
      );
    } else {
      gsap.fromTo(
        secondSection.current,
        { x: "-=100", autoAlpha: 0 },
        { duration: 2, x: "0", autoAlpha: 1 }
      );
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (second) {
    return (
      <StyledSection ref={firstSection} $second={second}>
        <StyledTextContainer $second={second}>
          <p>
            Moje hobby to&nbsp;
            <StyledStrong $second={second}>
              grafika komputerowa, animacje 2D i 3D oraz gry komputerowe.
            </StyledStrong>
            &nbsp;Gdyby nie front-end pewnie poszedłbym w któryś z tych
            kierunków.
          </p>
        </StyledTextContainer>
        <StyledImage fluid={edges[0].node.childImageSharp.fluid} />
      </StyledSection>
    );
  } else {
    return (
      <StyledSection ref={secondSection} $second={second}>
        <StyledImage fluid={edges[1].node.childImageSharp.fluid} />
        <StyledTextContainer $second={second}>
          <p>
            Interesują mnie trendy w zakresie&nbsp;
            <StyledStrong $second={second}>
              projektowania stron WWW, user experiance oraz user interface
              design.
            </StyledStrong>
            &nbsp;Zawsze stawiam na nowoczesne rozwiązania.
          </p>
        </StyledTextContainer>
      </StyledSection>
    );
  }
};

export default HobbySection;
