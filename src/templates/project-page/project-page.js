import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Container,
  ContainerBody,
  ColorfulBar,
  Section,
  SectionBody,
  HeaderL,
  HeaderM,
  HeaderS,
  ButtonContainer,
  ImageContainer,
} from "./project-page.styles";
import Button from "../../components/Buttons/Button/Button";
import Github from "../../components/Buttons/Github/Github";

const ProjectPage = ({ pageContext: { data } }) => {
  const infoRef = useRef(null);
  const imgRef = useRef(null);
  const bodyRef = useRef(null);
  const barRef = useRef(null);
  const gsapAnimations = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      infoRef.current.children,
      {
        x: "-=100",
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
      }
    );
    tl.fromTo(
      imgRef.current,
      {
        x: "-=20",
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 2,
        duration: 1.5,
      },
      "-=1"
    );
    tl.fromTo(
      [bodyRef.current.children, barRef.current],
      {
        y: "-=10",
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: {
          each: 0.4,
          from: "end",
        },
      },
      "-=1.1"
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    gsapAnimations();
  }, []);

  return (
    <div style={{ minHeight: "calc(100% - 180px)" }}>
      <Container>
        <Section ref={infoRef}>
          <HeaderS>Nazwa projektu:</HeaderS>
          <HeaderL>{data.title}</HeaderL>
          <HeaderS>Data:</HeaderS>
          <HeaderM>{data.date}</HeaderM>
          <HeaderS>Technologie:</HeaderS>
          <HeaderM>{data.technologies.join(", ")}</HeaderM>
          <ButtonContainer>
            <Button text="Link" to={data.site} external={true} />
            <Github githubLink={data.github} />
          </ButtonContainer>
        </Section>
        <ImageContainer ref={imgRef}>
          <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
        </ImageContainer>
      </Container>
      <ColorfulBar ref={barRef}>OPIS PROJEKTU</ColorfulBar>
      <ContainerBody ref={bodyRef}>
        <SectionBody>
          <MDXRenderer>{data.content.markdownNode.childMdx.body}</MDXRenderer>
        </SectionBody>
      </ContainerBody>
    </div>
  );
};

export default ProjectPage;
