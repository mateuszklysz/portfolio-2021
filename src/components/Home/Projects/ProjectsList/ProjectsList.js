import React, { useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import ScrollContainer from "react-indiana-drag-scroll";
import gsap from "gsap";
import { List, ProjectsText, StyledScrollImage } from "./ProjectsList.styles";
import Project from "../Project/Project";

const ProjectsList = () => {
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
      <ProjectsText ref={textRef}>
        <h1>Projekty</h1>
        <div ref={scrollImgRef}>
          <StyledScrollImage />
        </div>
      </ProjectsText>
      <ScrollContainer className="container" hideScrollbars vertical={false}>
        <List ref={listRef}>
          {edges.map(project => (
            <Project
              name={project.node.frontmatter.title}
              img={project.node.frontmatter.featuredImage.childImageSharp}
              slug={project.node.frontmatter.slug}
              key={project.node.id}
            />
          ))}
        </List>
      </ScrollContainer>
    </>
  );
};

export default ProjectsList;
