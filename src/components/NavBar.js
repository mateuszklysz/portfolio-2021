import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import gsap from "gsap";
import media from "../utils/media";
import Logo from "../assets/svg/cube.svg";
import Hamburger from "../assets/svg/hamburger.svg";

const StyledContainer = styled.nav`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  height: 100px;
  width: 100%;
  background-color: ${({ theme: { color } }) => color.primary};

  ${media.tablet`
    display: none;
  `}
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 100px;
  transform: translate(0, -50%);
`;

const StyledMenu = styled.ul`
  z-index: 100;
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

const StyledLink = styled(AniLink)`
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  font-size: ${({ theme: { font } }) => font.size.m};
  color: ${({ theme: { color } }) => color.white};
  text-decoration: none;
  overflow: hidden;
  padding: 5px;
  display: block;
`;

const StyledSpan = styled.span`
  position: relative;
`;
const StyledHamburger = styled(Hamburger)`
  z-index: 100;
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

const NavBar = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      aboutRef.current,
      { top: "-=30", autoAlpha: 0 },
      { duration: 0.7, top: "0", autoAlpha: 1 }
    ).fromTo(
      contactRef.current,
      { top: "-=30", autoAlpha: 0 },
      { duration: 0.7, top: "0", autoAlpha: 1 },
      "-=0.5"
    );
  }, []);

  const handleAnimate = item => {
    const tl = gsap.timeline();
    tl.fromTo(
      item.current,
      { top: "0" },
      { duration: 0.3, top: "+=50" }
    ).fromTo(
      item.current,
      { top: "-50" },
      {
        top: "+=50",
        duration: 0.3,
        ease: "power3",
      },
      "-=0.2"
    );
  };

  return (
    <>
      <StyledContainer>
        <AniLink paintDrip hex="#121212" to="/">
          <StyledLogo />
        </AniLink>
        <StyledMenu>
          <li>
            <StyledLink
              onMouseEnter={() => handleAnimate(aboutRef)}
              paintDrip
              hex="#121212"
              to="about"
            >
              <StyledSpan ref={aboutRef}>O mnie</StyledSpan>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              fade
              to="contact"
              onMouseEnter={() => handleAnimate(contactRef)}
            >
              <StyledSpan ref={contactRef}>Kontakt</StyledSpan>
            </StyledLink>
          </li>
        </StyledMenu>
      </StyledContainer>
      <StyledHamburger />
    </>
  );
};

export default NavBar;
