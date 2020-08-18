import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import gsap from "gsap";
import { Link } from "gatsby";
import media from "../utils/media";

const StyledText = styled.h2`
  padding-left: 100px;
  color: ${({ theme: { color } }) => color.white};
  ${media.phone`
  padding-left: 50px;
  font-size:${({ theme: { font } }) => font.size.m}
  `}
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
  margin-top: 25px;
  margin-left: 30px;
  margin-bottom: 30px;
  `}
`;

const StyledProject = styled(Link)`
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

const ShortProjects = () => {
  const textRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      textRef.current,
      { x: "-=100", autoAlpha: 0 },
      { duration: 3, x: "0", autoAlpha: 1, delay: 0.5 }
    ).fromTo(
      listRef.current,
      { x: "-=100", autoAlpha: 0 },
      { duration: 2, x: "0", autoAlpha: 1 },
      "-=2.5"
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
        <StyledList ref={listRef}>
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
