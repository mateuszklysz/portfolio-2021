import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
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

const ProjectPage = ({
  data: {
    allGraphCmsProject: { nodes },
  },
}) => {
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
  console.log(bodyRef.current);
  return (
    <div style={{ minHeight: "calc(100% - 180px)" }}>
      <Container>
        <Section ref={infoRef}>
          <HeaderS>Nazwa projektu:</HeaderS>
          <HeaderL>{nodes[0].title}</HeaderL>
          <HeaderS>Data:</HeaderS>
          <HeaderM>{nodes[0].date}</HeaderM>
          <HeaderS>Technologie:</HeaderS>
          <HeaderM>{nodes[0].technologies.join(", ")}</HeaderM>
          <ButtonContainer>
            <Button text="Link" to={nodes[0].site} external={true} />
            <Github githubLink={nodes[0].github} />
          </ButtonContainer>
        </Section>
        <ImageContainer ref={imgRef}>
          <GatsbyImage
            image={nodes[0].image.gatsbyImageData}
            alt={nodes[0].title}
          />
        </ImageContainer>
      </Container>
      <ColorfulBar ref={barRef}>OPIS PROJEKTU</ColorfulBar>
      <ContainerBody ref={bodyRef}>
        <SectionBody>
          <MDXRenderer>
            {nodes[0].content.markdownNode.childMdx.body}
          </MDXRenderer>
        </SectionBody>
      </ContainerBody>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    allGraphCmsProject(filter: { slug: { eq: $slug } }) {
      nodes {
        content {
          html
          markdownNode {
            childMdx {
              body
            }
          }
        }
        title
        technologies
        github
        date
        site
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;

export default ProjectPage;
