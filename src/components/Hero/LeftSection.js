import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import gsap from "gsap";
import media from "../../utils/media";
import Button from "../Buttons/Button";
import Github from "../Buttons/Github";

const StyledTextContainer = styled.div`
  position: relative;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  ${media.desktop`
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
  ${media.desktop`
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
  ${media.desktop`
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
  ${media.desktop`
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

const LeftComponent = () => {
  const textContainerRef = useRef(null);

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
    <StyledTextContainer ref={textContainerRef}>
      <StyledName>{siteMetadata.author}</StyledName>
      <StyledProfession>Front-end Developer</StyledProfession>
      <StyledMotto>
        Skupiam się na czystym i prostym{" "}
        <span style={{ color: "#c17900" }}>
          {"<"}kodzie{">"}
        </span>
      </StyledMotto>
      <StyledIconsContainer>
        <Button text="O mnie" to="/about" />
        <Github />
      </StyledIconsContainer>
    </StyledTextContainer>
  );
};
export default LeftComponent;
