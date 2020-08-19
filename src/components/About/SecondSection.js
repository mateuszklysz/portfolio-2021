import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import media from "../../utils/media";

const StyledSecondSection = styled.section`
  margin: 100px 0;
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
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
  font-weight: bold;

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
  const {
    file: { childImageSharp },
  } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "aae.jpg" }) {
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

  return (
    <>
      <StyledSecondSection>
        <StyledSecondTextContainer>
          <p>
            Moje hobby to grafika komputerowa, animacje 2D i 3D oraz gry
            komputerowe
          </p>
        </StyledSecondTextContainer>
        <StyledSecondImage fluid={childImageSharp.fluid} />
      </StyledSecondSection>
    </>
  );
};

export default SecondSection;
