import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Cube from "./Cube";

const StyledContainer = styled.section`
  /* background-color: red; */
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: auto; */
  width: 80%;
  height: 25vw;
  color: ${({ theme: { color } }) => color.white};
  font-family: ${({ theme: { font } }) => font.family.montserrat};
`;
const StyledName = styled.h3`
  z-index: 2;
  top: 5px;
  font-size: 1.5vw;
  font-weight: lighter;
`;
const StyledProfession = styled.h1`
  z-index: 2;
  font-size: 4.7vw;
  font-weight: bold;
`;
const StyledMotto = styled.h2`
  z-index: 2;
  font-size: 2vw;
  font-weight: lighter;
`;
const StyledCubeContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -40%);
  width: 45vw;
  height: 45vw;
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
      <StyledName>{siteMetadata.author}</StyledName>
      <StyledProfession>Front-end Developer</StyledProfession>
      <StyledMotto>Skupiam się na czystym kodzie</StyledMotto>
      <StyledCubeContainer>
        <Cube />
      </StyledCubeContainer>
    </StyledContainer>
  );
};
export default Hero;
