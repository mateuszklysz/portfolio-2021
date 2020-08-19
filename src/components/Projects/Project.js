import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import media from "../../utils/media";

const StyledProject = styled(AniLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  text-decoration: none;
  margin-right: 100px;
  width: 500px;
  height: 500px;
  border-radius: 25px;
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
  `}
`;

const Project = () => (
  <>
    <StyledProject to="404">
      <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
        produkcja w toku...
      </h2>
    </StyledProject>
  </>
);

export default Project;
