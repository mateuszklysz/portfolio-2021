import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import gsap from "gsap";
import { Link } from "gatsby";
import media from "../utils/media";

const StyledText = styled.h2`
  padding-left: 100px;
  color: ${({ theme: { color } }) => color.white};
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  margin: 50px;
  height: 500px;
  width: 500px;
  flex-direction: column;
  flex-wrap: wrap;
  ${media.desktopS`
  height: 400px;
  `}
  ${media.phone`
  height: 350px;
  margin-left: 0;
  margin-bottom: 50px;
  `}
`;

const StyledProject = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  text-decoration: none;
  margin: 0 50px;
  width: 500px;
  height: 500px;
  border-radius: 25px;
  ${media.desktopS`
    height: 400px;
    width: 400px;
  `}
  ${media.phone`
    height: 350px;
    width: 350px;
  `}
`;

const ShortProjects = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      textRef.current,
      { x: "-=100", autoAlpha: 0 },
      { duration: 2, x: "0", autoAlpha: 1 }
    );
  }, []);

  return (
    <>
      <StyledText ref={textRef}>Projekty</StyledText>
      <ScrollContainer
        className="container"
        hideScrollbars={true}
        vertical={false}
      >
        <StyledList>
          <StyledProject to="/404">
            <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
              produkcja w toku...
            </h2>
          </StyledProject>

          <StyledProject to="/404">
            <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
              produkcja w toku...
            </h2>
          </StyledProject>
          <StyledProject to="/404">
            <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
              produkcja w toku...
            </h2>
          </StyledProject>
          <StyledProject to="/404">
            <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
              produkcja w toku...
            </h2>
          </StyledProject>
          <StyledProject to="/404">
            <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
              produkcja w toku...
            </h2>
          </StyledProject>
          <StyledProject to="/404">
            <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
              produkcja w toku...
            </h2>
          </StyledProject>
          <StyledProject to="/404">
            <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
              produkcja w toku...
            </h2>
          </StyledProject>
        </StyledList>
      </ScrollContainer>
    </>
  );
};

export default ShortProjects;
