import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import media from "../../utils/media";

const StyledFirstSection = styled.section`
  margin: 100px 0 140px 0;
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { color } }) => color.white};
  width: 100%;

  ${media.tablet`
    margin: 70px 0;
    flex-direction:column-reverse;
    align-items:center;
  `}
`;

const StyledFirstImage = styled(Img)`
  width: 500px;

  ${media.phone`
    width: 300px;
  `}

  ${media.ip4`
    width: 250px;
  `}
`;

const StyledFirstTextContainer = styled.div`
  display: flex;
  height: 100%;
  width: 500px;
  margin: auto 0;
  padding-left: 50px;
  font-size: ${({ theme: { font } }) => font.size.xxm};
  /* font-weight: bold; */

  ${media.desktopL`
    font-size: 23px;
  `}

  ${media.desktopS`
    font-size: ${({ theme: { font } }) => font.size.xm};
  `}

  ${media.tablet`
    padding-left: 0px;
    text-align: right;
    margin-bottom:50px;
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs};
    width: 100%;
  `}
`;

const FirstSection = () => {
  const sectionRef = useRef(null);

  const {
    file: { childImageSharp },
  } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "react.jpg" }) {
          size
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { x: "-=300", autoAlpha: 0 },
      { duration: 3, x: "0", autoAlpha: 1 }
    );
  }, []);

  return (
    <StyledFirstSection ref={sectionRef}>
      <StyledFirstImage fluid={childImageSharp.fluid} />
      <StyledFirstTextContainer>
        <p>
          Interesują mnie trendy w zakresie&nbsp;
          <strong style={{ color: "#f05545" }}>
            projektowania stron WWW, user experiance oraz user interface design.
          </strong>
          &nbsp;Zawsze stawiam na nowoczesne rozwiązania.
        </p>
      </StyledFirstTextContainer>
    </StyledFirstSection>
  );
};

export default FirstSection;
