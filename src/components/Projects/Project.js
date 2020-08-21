import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";

import media from "../../utils/media";

const StyledContainer = styled.div`
  position: relative;
  margin-right: 100px;
  border-radius: 25px;
  width: 500px;
  height: 500px;
  background-color: ${({ theme: { color } }) => color.secondary};
    
  ${media.desktopS`
    height: 400px;
    width: 400px;
  `} 

  ${media.phone`
    margin-right: 50px;
    height: 300px;
    width: 300px;
  `} 

  ${media.ip4`
    margin-right: 25px;
    height: 250px;
    width: 250px;
  `};
`;

const StyledLink = styled(AniLink)`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xxm};
  font-weight: bold;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
`;

const StyledImage = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* filter: blur(4px); */
  opacity: 30%;
`;

const Project = ({ name, img, slug }) => (
  <>
    <StyledContainer>
      <StyledImage fluid={img.fluid} />
      <StyledLink to={slug} paintDrip hex="#121212">
        {name}
      </StyledLink>
    </StyledContainer>
  </>
);

export default Project;
