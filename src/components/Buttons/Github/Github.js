import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GithubLink } from "./Github.styles";
import Img from "gatsby-image";
import gsap from "gsap";

const Github = ({ githubLink = "https://github.com/mateuszklysz" }) => {
  const githubRef = useRef(null);
  const {
    file: { childImageSharp },
  } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "github.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  const handleButtonAnimation = (item, scale) => {
    const tl = gsap.timeline({
      defaults: { ease: "power0.easeNone" },
    });
    tl.to(item.current, {
      duration: 0.3,
      scale,
    });
  };

  return (
    <GithubLink
      href={`${githubLink}`}
      target="_blank"
      ref={githubRef}
      onMouseEnter={() => handleButtonAnimation(githubRef, 0.95)}
      onMouseLeave={() => handleButtonAnimation(githubRef, 1)}
    >
      <Img fluid={childImageSharp.fluid} />
    </GithubLink>
  );
};
export default Github;
