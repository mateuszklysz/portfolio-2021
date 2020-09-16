import React, { useRef, useState } from "react";
import gsap from "gsap";
import {
  Container,
  LogoContainer,
  StyledLogo,
  Menu,
  StyledLink,
  StyledSpan,
  HamburgerIcon,
  HamburgerMenu,
} from "./NavBar.styles";

const NavBar = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const hamburgerIconRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogoAnimation = scale => {
    const tl = gsap.timeline({
      defaults: { ease: "power0.easeNone" },
    });
    tl.to(logoRef.current, {
      duration: 0.3,
      scale,
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
    setShowMenu(!showMenu);
    const [elements] = hamburgerIconRef.current.children;
    const rec3 = elements.getElementById("rec3");
    const rec2 = elements.getElementById("rec2");

    if (!showMenu) {
      gsap.to(hamburgerRef.current, {
        x: "-420px",
        duration: 0.15,
        ease: "Power3.easeOut ",
      });
      gsap.fromTo(rec3, { width: "100%" }, { width: "60%", duration: 0.1 });
      gsap.fromTo(rec2, { width: "100%" }, { width: "80%", duration: 0.1 });
    } else {
      gsap.to(hamburgerRef.current, {
        x: 0,
        duration: 0.2,
        ease: "Power4.easeIn",
      });
      gsap.fromTo(rec3, { width: "60%" }, { width: "100%", duration: 0.1 });
      gsap.fromTo(rec2, { width: "80%" }, { width: "100%", duration: 0.1 });
    }
  };

  return (
    <>
      <Container>
        <LogoContainer
          ref={logoRef}
          onMouseEnter={() => handleLogoAnimation(0.9)}
          onMouseLeave={() => handleLogoAnimation(1)}
        >
          <StyledLink paintDrip hex="#121212" to="/">
            <StyledLogo />
          </StyledLink>
        </LogoContainer>
        <Menu>
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
        </Menu>
      </Container>
      <div ref={hamburgerIconRef}>
        <HamburgerIcon onClick={handleHamburger} />
      </div>
      <HamburgerMenu ref={hamburgerRef}>
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
      </HamburgerMenu>
    </>
  );
};

export default NavBar;
