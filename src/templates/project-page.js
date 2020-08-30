import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import media from "../utils/media";
import Button from "../components/Buttons/ExternalButton";
import Github from "../components/Buttons/Github";

const StyledContainer = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 50px auto;
  padding: 0 100px;
  max-width: 1250px;
  ${media.desktopL`
    padding: 0;
  `}
  ${media.tablet`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  `}
`;

const StyledContainerBody = styled.article`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: center;
  margin: 50px auto 100px auto;
  padding: 0 100px;
  max-width: 1250px;
  ${media.desktopL`
    margin: auto;
    padding: 0;
  `}
  ${media.tablet`
    margin-bottom: 50px;
    height: auto;
  `}
`;

const StyledSection = styled.section`
  width: 50%;
  color: ${({ theme: { color } }) => color.white};
  font-size: 28px;
  font-weight: bold;
  ${media.desktopL`
    width: 40%;
  `}
  ${media.desktopS`
    font-size: calc(28px / 1.5);
  `}
  ${media.tablet`
    text-align: center;
    margin-bottom: 30px;
    width: 60%;
  `}
`;

const StyledSectionBody = styled.section`
  width: 50%;
  color: ${({ theme: { color } }) => color.white};
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  ${media.desktopL`
    font-size: calc(28px / 1.5);
    margin: 0 100px;
  `};
  ${media.tablet`
    margin: 0 60px;
  `};
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs};
  `}
`;

const StyledHeaderL = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  font-size: 64px;
  margin-bottom: 10px;
  ${media.desktopL`
    font-size: calc(64px / 1.5);
  `}
  ${media.tablet`
    margin-bottom: 0;
  `}
`;

const StyledHeaderM = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  font-size: 30px;
  margin-bottom: 10px;
  ${media.desktopL`
    font-size: calc(30px / 1.5);
  `}
`;

const StyledHeaderS = styled.h2`
  color: #6d6d6d;
  font-weight: lighter;
  font-size: 24px;
  margin-bottom: 10px;
  ${media.desktopL`
    font-size: calc(24px / 1.5);
  `}
  ${media.tablet`
    margin-bottom: 0;
  `}
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  height: 50px;
  width: 200px;
  ${media.tablet`
    margin: 15px auto;
  `}
  ${media.phone`
    height: 45px;
    width: 150px;
  `}
  ${media.ip4`
    height: 30px;
    width: 120px;
  `}
`;

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
        y: "+=10",
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
        <StyledContainer>
          <StyledSection ref={infoRef}>
            <StyledHeaderS>Nazwa projektu:</StyledHeaderS>
            <StyledHeaderL>{mdx.frontmatter.title}</StyledHeaderL>
            <StyledHeaderS>Data:</StyledHeaderS>
            <StyledHeaderM>{mdx.frontmatter.date}</StyledHeaderM>
            <StyledHeaderS>Technologie:</StyledHeaderS>
            <StyledHeaderM>{mdx.frontmatter.technologies}</StyledHeaderM>
            <StyledButtonContainer>
              <Button text="Link" to={mdx.frontmatter.site} />
              <Github githubLink={mdx.frontmatter.github} />
            </StyledButtonContainer>
          </StyledSection>
          <StyledSection ref={imgRef}>
            <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
          </StyledSection>
        </StyledContainer>
        <StyledContainerBody>
          <StyledSectionBody ref={bodyRef}>
            <StyledHeaderS>Opis</StyledHeaderS>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </StyledSectionBody>
        </StyledContainerBody>
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
