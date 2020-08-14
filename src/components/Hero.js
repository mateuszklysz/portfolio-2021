import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import media from "../utils/media";
import Cube from "./Cube";

const StyledContainer = styled.section`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 25vw;
  color: ${({ theme: { color } }) => color.white};
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  ${media.tablet`
    margin-top: 50px;
    width: 400px;
    height: 300px;
  `}
  ${media.phone`
  margin-top:30px;
  width: 320px;
  `}
  ${media.ip4`
  
  width: 250px;
  `}
`;
const StyledName = styled.h3`
  z-index: 2;
  top: 5px;
  font-size: 1.5vw;
  font-weight: lighter;
  ${media.tablet`
  font-size:${({ theme: { font } }) => font.size.s} ;
  `}
`;
const StyledProfession = styled.h1`
  z-index: 2;
  font-size: 4.7vw;
  font-weight: bold;
  ${media.tablet`
  font-size:${({ theme: { font } }) => font.size.l} ;
  `}
`;
const StyledMotto = styled.h2`
  z-index: 2;
  font-size: 2vw;
  font-weight: lighter;
  ${media.tablet`
  width:260px;
  font-size:${({ theme: { font } }) => font.size.xm} ;
  `}
`;
const StyledCubeContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -40%);
  width: 45vw;
  height: 45vw;
  ${media.tablet`
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin 0 auto;
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
      <StyledMotto>Skupiam się na czystym i prostym kodzie</StyledMotto>
      <StyledCubeContainer>
        <Cube />
      </StyledCubeContainer>
    </StyledContainer>
  );
};
export default Hero;
