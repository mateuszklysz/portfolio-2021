import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import gsap from "gsap";
import media from "../utils/media";
import GlobalStyle from "../utils/global";
import theme from "../utils/theme";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const StyledContainer = styled.section`
  position: fixed;
  top: 100px;
  left: 0;
  height: calc(100% + 80px);
  width: 100%;
  overflow: hidden;
  ${media.tablet`
    top: 0;
    padding-top: 50px;
  `}
`;

export default ({ children }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const mq = window.matchMedia("(max-width: 1024px)");
  let scrollHeight;

  const setBodyHeight = () => {
    if (mq.matches && scrollHeight !== document.body.style.height) {
      scrollHeight = `calc(${
        scrollRef.current.getBoundingClientRect().height
      }px + 50px)`;
    } else if (!mq.matches && scrollHeight !== document.body.style.height) {
      scrollHeight = `calc(${
        scrollRef.current.getBoundingClientRect().height
      }px + 100px)`;
    }
    if (document.body.style.height === scrollHeight) {
      return;
    }
    document.body.style.height = scrollHeight;
  };

  setInterval(() => {
    setBodyHeight();
  }, 500);

  useEffect(() => {
    setBodyHeight();
  });

  useScrollPosition(
    ({ currPos }) => {
      gsap.to(scrollRef.current, {
        y: -currPos.y,
        ease: "Expo.easeOut",
        force3D: true,
      });
    },
    null,
    null,
    true
  );

  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContainer ref={containerRef}>
          <NavBar />
          <div ref={scrollRef}>
            {children}
            <Footer />
          </div>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};
