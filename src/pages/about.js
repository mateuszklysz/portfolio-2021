import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import Scrollbar from "smooth-scrollbar";
import { graphql } from "gatsby";

import media from "../utils/media";

import FirstSection from "../components/About/FirstSection";
import SecondSection from "../components/About/SecondSection";
import Skills from "../components/About/Skills";
import InfoSection from "../components/About/InfoSection";
import MoreSection from "../components/About/MoreSection";
import Footer from "../components/Footer/Footer";

const ScrollContainer = styled.div`
  height: calc(100vh - 100px);
  ${media.tablet`
    height: auto;
  `}
`;

const StyledContainer = styled.section`
  position: relative;
  margin: 50px auto;
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
  const scrollbar = useRef(null);
  const nameRef = useRef(null);

  const textAnimation = () => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(nameRef.current, {
      duration: 1.2,
      text: siteMetadata.author,
      ease: "none",
    });
  };

  useEffect(() => {
    Scrollbar.initAll();
    Scrollbar.detachStyle();
    scrollbar.current.scrollTo(0, 0);
    textAnimation();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <ScrollContainer ref={scrollbar} data-scrollbar>
        <StyledContainer>
          <StyledTextContainer>
            <StyledAboutText>KILKA SŁÓW O MNIE</StyledAboutText>
            <StyledNameText ref={nameRef} />
          </StyledTextContainer>
          <FirstSection />
          <SecondSection />
        </StyledContainer>
        <Skills />
        <StyledContainer>
          <InfoSection />
          <MoreSection />
        </StyledContainer>
        <Footer />
      </ScrollContainer>
    </>
  );
};
export default Projects;
