import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import media from "../../utils/media";

const StyledSecondSection = styled.section`
  margin: 100px 0 140px 0;
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { color } }) => color.white};
  width: 100%;

  ${media.tablet`
    margin: 70px 0;
    flex-direction: column;
    align-items: center;
  `}
`;

const StyledSecondTextContainer = styled.div`
  display: flex;
  height: 100%;
  width: 500px;
  margin: auto 0;
  padding-right: 50px;
  text-align: right;
  font-size: ${({ theme: { font } }) => font.size.xxm};

  ${media.desktopL`
    font-size: 23px;
  `}

  ${media.desktopS`
    font-size: ${({ theme: { font } }) => font.size.xm};
  `}

  ${media.tablet`
    padding-right: 0px;
    text-align:left;
    margin-bottom:50px;
  `}

  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs};
    width: 100%;
  `}
`;

const StyledSecondImage = styled(Img)`
  width: 500px;

  ${media.phone`
    width: 300px;
  `}

  ${media.ip4`
    width: 250px;
  `}
`;

const SecondSection = () => {
  const sectionRef = useRef(null);

  const {
    file: { childImageSharp },
  } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "aae.jpg" }) {
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
      { x: "+=100", autoAlpha: 0 },
      { duration: 3, x: "0", autoAlpha: 1 }
    );
  }, []);

  return (
    <StyledSecondSection ref={sectionRef}>
      <StyledSecondTextContainer>
        <p>
          Moje hobby to&nbsp;
          <strong style={{ color: "#4c8c4a" }}>
            grafika komputerowa, animacje 2D i 3D oraz gry komputerowe.
          </strong>
          &nbsp;Gdyby nie front-end pewnie poszedłbym w któryś z tych kierunków.
        </p>
      </StyledSecondTextContainer>
      <StyledSecondImage fluid={childImageSharp.fluid} />
    </StyledSecondSection>
  );
};

export default SecondSection;
