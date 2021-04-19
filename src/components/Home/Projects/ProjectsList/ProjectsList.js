import React, { useEffect, useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import ScrollContainer from "react-indiana-drag-scroll";
import gsap from "gsap";
import {
  Projects,
  ProjectsText,
  StyledScrollImage,
} from "./ProjectsList.styles";
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

  return (
    <StaticQuery
      query={graphql`
        query {
          allGraphCmsProject {
            nodes {
              title
              slug
              date
              technologies
              site
              github
              image {
                url
              }
            }
          }
        }
      `}
      render={({ allGraphCmsProject: { nodes } }) => (
        <>
          <ProjectsText ref={textRef}>
            <h1>Projekty</h1>
            <div ref={scrollImgRef}>
              <StyledScrollImage />
            </div>
          </ProjectsText>
          <ScrollContainer
            className="container"
            hideScrollbars
            vertical={false}
          >
            <Projects ref={listRef}>
              {nodes.map(project => (
                <Project
                  name={project.title}
                  img={project.image.url}
                  slug={project.slug}
                  key={project.slug}
                />
              ))}
            </Projects>
          </ScrollContainer>
        </>
      )}
    />
  );
};

export default ProjectsList;
