import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import gsap from "gsap";
import media from "../utils/media";
import Logo from "../assets/svg/icon.svg";
import Hamburger from "../assets/svg/hamburger.svg";

const StyledContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledLogoContainer = styled.div`
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const StyledLogo = styled(Logo)`
  width: 60px;
  height: 60px;
`;

const StyledMenu = styled.ul`
  z-index: 100;
  margin-right: 100px;
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
  const [logoTl] = useState(
    gsap.timeline({
      paused: true,
    })
  );
  const [aboutTl] = useState(
    gsap.timeline({
      paused: true,
      defaults: { duration: 0.15, ease: "power0.easeNone" },
    })
  );
  const [contactTl] = useState(
    gsap.timeline({
      paused: true,
      defaults: { duration: 0.15, ease: "power0.easeNone" },
    })
  );

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    aboutTl
      .to(aboutRef.current, { top: "+=50" })
      .to(aboutRef.current, { top: "-=50", duration: 0 })
      .to(aboutRef.current, { top: "0" })
      .reverse();

    contactTl
      .to(contactRef.current, { top: "+=50" })
      .to(contactRef.current, { top: "-=50", duration: 0 })
      .to(contactRef.current, { top: "0" })
      .reverse();

    logoTl
      .to(logoRef.current, {
        duration: 0.3,
        scale: "-=0.1",
      })
      .reverse();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLogoTimeline = () => {
    logoTl.reversed(!logoTl.reversed());
  };

  const toggleMenuTimeline = tl => {
    tl.reversed(!tl.reversed());
  };

  return (
    <>
      <StyledContainer>
        <StyledLogoContainer
          ref={logoRef}
          onMouseOver={toggleLogoTimeline}
          onMouseOut={toggleLogoTimeline}
        >
          <StyledLink paintDrip hex="#121212" to="/">
            <StyledLogo />
          </StyledLink>
        </StyledLogoContainer>

        <StyledMenu>
          <li>
            <StyledLink
              onMouseOver={() => toggleMenuTimeline(aboutTl)}
              onMouseOut={() => toggleMenuTimeline(aboutTl)}
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
              onMouseOver={() => toggleMenuTimeline(contactTl)}
              onMouseOut={() => toggleMenuTimeline(contactTl)}
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
