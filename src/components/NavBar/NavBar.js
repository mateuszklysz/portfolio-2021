import React, { useRef, useState } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import gsap from "gsap";

import media from "../../utils/media";

import Logo from "../../assets/svg/icon.svg";
import Hamburger from "../../assets/svg/hamburger.svg";

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
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  overflow: hidden;
  padding: 5px;
  display: block;

  ${media.tablet`
  font-size: ${({ theme: { font } }) => font.size.xm};
  `}
`;

const StyledSpan = styled.span`
  position: relative;
`;

const StyledHamburgerIcon = styled(Hamburger)`
  z-index: 101;
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

const StyledHamburgerMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  background-color: ${({ theme: { color } }) => color.black};
  top: 0;
  right: -420px;
  width: 40%;
  height: 100vh;

  ${media.tablet`
    display: block;
    display:flex;
  `}
`;

const NavBar = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const hamburgerIconRef = useRef(null);

  let [showMenu, setShowMenu] = useState(false);

  const handleLogoAnimation = scale => {
    const tl = gsap.timeline({
      defaults: { ease: "power0.easeNone" },
    });
    tl.to(logoRef.current, {
      duration: 0.3,
      scale: scale,
    });
  };

  const handleMenuAnimation = (item, mode) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.15, ease: "power0.easeNone" },
    });
    if (mode) {
      tl.to(item.current, { top: "+=50" })
        .to(item.current, { top: "-=100", duration: 0 })
        .to(item.current, { top: "0" });
    } else {
      tl.to(item.current, { top: "-=50" })
        .to(item.current, { top: "+=100", duration: 0 })
        .to(item.current, { top: "0" });
    }
  };

  const handleHamburger = () => {
    setShowMenu((showMenu = !showMenu));
    const [elements] = hamburgerIconRef.current.children;
    const rec3 = elements.getElementById("rec3");
    const rec2 = elements.getElementById("rec2");

    if (showMenu) {
      gsap.to(hamburgerRef.current, {
        x: "-420px",
        duration: 0.3,
        ease: "Power4.easeOut",
      });
      gsap.fromTo(rec3, { width: "100%" }, { width: "60%", duration: 0.2 });
      gsap.fromTo(rec2, { width: "100%" }, { width: "80%", duration: 0.2 });
    } else {
      gsap.to(hamburgerRef.current, {
        x: 0,
        duration: 0.3,
        ease: "Power4.easeIn",
      });
      gsap.fromTo(rec3, { width: "60%" }, { width: "100%", duration: 0.2 });
      gsap.fromTo(rec2, { width: "80%" }, { width: "100%", duration: 0.2 });
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledLogoContainer
          ref={logoRef}
          onMouseEnter={() => handleLogoAnimation(0.9)}
          onMouseLeave={() => handleLogoAnimation(1)}
        >
          <StyledLink paintDrip hex="#121212" to="/">
            <StyledLogo />
          </StyledLink>
        </StyledLogoContainer>
        <StyledMenu>
          <li>
            <StyledLink
              onMouseEnter={() => handleMenuAnimation(aboutRef, 1)}
              onMouseLeave={() => handleMenuAnimation(aboutRef, 0)}
              paintDrip
              hex="#121212"
              to="/about"
            >
              <StyledSpan ref={aboutRef}>O mnie</StyledSpan>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              onMouseEnter={() => handleMenuAnimation(contactRef, 1)}
              onMouseLeave={() => handleMenuAnimation(contactRef, 0)}
              paintDrip
              hex="#121212"
              to="/contact"
            >
              <StyledSpan ref={contactRef}>Kontakt</StyledSpan>
            </StyledLink>
          </li>
        </StyledMenu>
      </StyledContainer>
      <div ref={hamburgerIconRef}>
        <StyledHamburgerIcon onClick={handleHamburger} />
      </div>
      <StyledHamburgerMenu ref={hamburgerRef}>
        <StyledLink onClick={handleHamburger} paintDrip hex="#121212" to="/">
          Home
        </StyledLink>
        <StyledLink
          onClick={handleHamburger}
          paintDrip
          hex="#121212"
          to="/about"
        >
          O mnie
        </StyledLink>
        <StyledLink
          onClick={handleHamburger}
          paintDrip
          hex="#121212"
          to="/contact"
        >
          Kontakt
        </StyledLink>
      </StyledHamburgerMenu>
    </>
  );
};

export default NavBar;
