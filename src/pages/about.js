import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { graphql } from "gatsby";
import media from "../utils/media";
import Skills from "../components/About/Skills";
import InfoSection from "../components/About/InfoSection";
import MoreSection from "../components/About/MoreSection";
import HobbySection from "../components/About/HobbySection";

const StyledContainer = styled.section`
  position: relative;
  margin: 50px auto 0 auto;
  padding: 0 100px;
  max-width: 1250px;
  ${media.tablet`
    padding: 0;
    margin: 0 100px;
  `}
  ${media.phone`
    margin: 0 50px;
  `}
`;

const StyledTextContainer = styled.header`
  width: 100%;
  color: ${({ theme: { color } }) => color.white};
  ${media.tablet`
    text-align: center;
  `}
`;

const StyledAboutText = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.xm};
  ${media.tablet`
    font-size: ${({ theme: { font } }) => font.size.m};
  `}
`;

const StyledNameText = styled.h2`
  font-size: ${({ theme: { font } }) => font.size.xl};
  ${media.tablet`
    font-size: ${({ theme: { font } }) => font.size.l};
  `}
`;

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

const Projects = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  const nameRef = useRef(null);
  const skillsRef = useRef(null);
  const infoRef = useRef(null);

  const gsapAnimations = () => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(nameRef.current, {
      duration: 1.2,
      text: siteMetadata.author,
      ease: "none",
    });
    gsap.fromTo(
      skillsRef.current.children,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "-40% 40%",
        },
      }
    );
    gsap.fromTo(
      infoRef.current.children,
      { x: "-=100", autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "-40% 40%",
        },
      }
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    gsapAnimations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <StyledContainer>
        <StyledTextContainer>
          <StyledAboutText>KILKA SŁÓW O MNIE</StyledAboutText>
          <StyledNameText ref={nameRef} />
        </StyledTextContainer>
        <HobbySection />
        <HobbySection second />
      </StyledContainer>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <StyledContainer ref={infoRef}>
        <InfoSection />
        <MoreSection />
      </StyledContainer>
    </>
  );
};
export default Projects;
