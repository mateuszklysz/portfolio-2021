import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "../assets/svg/cube.svg";
import Hamburger from "../assets/svg/hamburger.svg";
import media from "../utils/media";

const StyledContainer = styled.nav`
  position: relative;
  height: 100px;
  background-color: ${({ theme: { color } }) => color.primary};
  ${media.tablet`
    display:none;
  `}
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translate(0, -50%);
`;

const StyledMenu = styled.ul`
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translate(0, -50%);
  width: 385px;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;
const StyledLink = styled(Link)`
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  font-size: ${({ theme: { font } }) => font.size.m};
  color: ${({ theme: { color } }) => color.white};
  text-decoration: none;
`;

const StyledHamburger = styled(Hamburger)`
  display: none;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 35px;
  height: 30.33px;
  ${media.tablet`
    display:block;
  `}
`;

const NavBar = () => (
  <>
    <StyledContainer>
      <Link to="/">
        <StyledLogo />
      </Link>
      <StyledMenu>
        <li>
          <StyledLink to="/projects">Projekty</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">O mnie</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Kontakt</StyledLink>
        </li>
      </StyledMenu>
    </StyledContainer>
    <StyledHamburger />
  </>
);

export default NavBar;
