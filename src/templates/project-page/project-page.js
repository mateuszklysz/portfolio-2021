import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Container,
  ContainerBody,
  Section,
  SectionBody,
  HeaderL,
  HeaderM,
  HeaderS,
  ButtonContainer,
  StyledImage,
} from "./project-page.styles";
import Button from "../../components/Buttons/Button/Button";
import Github from "../../components/Buttons/Github/Github";

const ProjectPage = ({ data: { mdx } }) => {
  const infoRef = useRef(null);
  const imgRef = useRef(null);
  const bodyRef = useRef(null);
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
      imgRef.current.children,
      {
        x: "-=20",
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 2,
        duration: 1.5,
      },
      "-=0.5"
    );
    tl.fromTo(
      bodyRef.current.children,
      {
        y: "-=10",
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
      },
      "-=1"
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    gsapAnimations();
  }, []);

  return (
    <>
      <div style={{ minHeight: "calc(100% - 180px)" }}>
        <Container>
          <Section ref={infoRef}>
            <HeaderS>Nazwa projektu:</HeaderS>
            <HeaderL>{mdx.frontmatter.title}</HeaderL>
            <HeaderS>Data:</HeaderS>
            <HeaderM>{mdx.frontmatter.date}</HeaderM>
            <HeaderS>Technologie:</HeaderS>
            <HeaderM>{mdx.frontmatter.technologies}</HeaderM>
            <ButtonContainer>
              <Button text="Link" to={mdx.frontmatter.site} external={true} />
              <Github githubLink={mdx.frontmatter.github} />
            </ButtonContainer>
          </Section>
          <StyledImage ref={imgRef}>
            <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
          </StyledImage>
        </Container>
        <ContainerBody ref={bodyRef}>
          <SectionBody>
            <HeaderS>Opis</HeaderS>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </SectionBody>
        </ContainerBody>
      </div>
    </>
  );
};

export default ProjectPage;

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        technologies
        site
        github
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;
