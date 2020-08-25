import React, { useRef } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import gsap from "gsap";
import media from "../../utils/media";

const StyledGithubLink = styled.a`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  ${media.phone`
    width: 40px;
    height: 40px;
   `}
  ${media.ip4`
    width: 30px;
    height: 30px;
   `}
`;

const Github = ({ githubLink = "https://github.com/mateuszklysz" }) => {
  const githubRef = useRef(null);
  console.log(githubLink);
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
    <StyledGithubLink
      href={githubLink}
      target="_blank"
      ref={githubRef}
      onMouseEnter={() => handleButtonAnimation(githubRef, 0.95)}
      onMouseLeave={() => handleButtonAnimation(githubRef, 1)}
    >
      <Img fluid={childImageSharp.fluid} />
    </StyledGithubLink>
  );
};
export default Github;
