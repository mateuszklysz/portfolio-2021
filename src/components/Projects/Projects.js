import React, { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import gsap from "gsap";
import Project from "./Project";
import ScrollImage from "../../assets/svg/scroll.svg";
import media from "../../utils/media";

const StyledProjectsText = styled.div`
  display: flex;
  padding-left: 100px;
  color: ${({ theme: { color } }) => color.white};
  ${media.phone`
  padding-left: 50px;
  font-size:${({ theme: { font } }) => font.size.m}
  `}
`;

const StyledScrollImage = styled(ScrollImage)`
  width: 40px;
  height: 40px;
  margin-left: 15px;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  margin: 50px;
  height: 500px;
  width: 500px;
  flex-direction: column;
  flex-wrap: wrap;
  ${media.laptop`
    height: 400px;
  `}
  ${media.phone`
    height: 300px;
    margin-top: 25px;
    margin-left: 30px;
    margin-bottom: 30px;
  `}
  ${media.ip4`
    height: 250px;
  `}
`;

const ShortProjects = () => {
  const textRef = useRef(null);
  const listRef = useRef(null);
  const scrollImgRef = useRef(null);

  const containerAnimation = () => {
    const [elements] = scrollImgRef.current.children;
    const dot = elements.getElementById("dot");

    const dotTl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power0", duration: 0.7 },
    });
    dotTl
      .to(dot, { x: "0", opacity: 0, duration: 0 })
      .to(dot, { x: "-=30", opacity: 1 })
      .to(dot, { x: "-=30", opacity: 0 })
      .to(dot, { x: "0", opacity: 0, duration: 0.2 });

    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      textRef.current,
      { x: "-=100", autoAlpha: 0 },
      { duration: 3, x: "0", autoAlpha: 1, delay: 0.5 }
    ).fromTo(
      listRef.current,
      { x: "-=100", autoAlpha: 0 },
      { duration: 2, x: "0", autoAlpha: 1 },
      "-=2.5"
    );
  };

  useEffect(() => {
    containerAnimation();
  }, []);

  const {
    allMdx: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { order: ASC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                featuredImage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <>
      <StyledProjectsText ref={textRef}>
        <h1>Projekty</h1>
        <div ref={scrollImgRef}>
          <StyledScrollImage />
        </div>
      </StyledProjectsText>
      <ScrollContainer className="container" hideScrollbars vertical={false}>
        <StyledList ref={listRef}>
          {edges.map(project => (
            <Project
              name={project.node.frontmatter.title}
              img={project.node.frontmatter.featuredImage.childImageSharp}
              slug={project.node.frontmatter.slug}
              key={project.node.id}
            />
          ))}
        </StyledList>
      </ScrollContainer>
    </>
  );
};

export default ShortProjects;
