import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Container,
  TextContainer,
  AboutText,
  NameText,
} from "../styles/about.styles";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { graphql } from "gatsby";
import Skills from "../components/About/Skills/Skills";
import Info from "../components/About/Info/Info";
import More from "../components/About/More/More";
import Hobby from "../components/About/Hobby/Hobby";

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
          start: "0 40%",
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
        stagger: 0.7,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "0 40%",
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
      <Container>
        <TextContainer>
          <AboutText>KILKA SŁÓW O MNIE</AboutText>
          <NameText ref={nameRef} />
        </TextContainer>
        <Hobby />
        <Hobby second />
      </Container>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <Container ref={infoRef}>
        <Info />
        <More />
      </Container>
    </>
  );
};
export default Projects;
