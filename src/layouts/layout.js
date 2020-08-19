import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Scrollbar from "smooth-scrollbar";

import media from "../utils/media";
import GlobalStyle from "../utils/global";
import theme from "../utils/theme";

import SEO from "../components/SEO/SEO";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;

  ${media.tablet`
    margin-top: 50px;
  `}
`;

const StyledScroll = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  ${media.tablet`
    height: auto;
  `}
`;

export default ({ children }) => {
  useEffect(() => {
    Scrollbar.initAll();
    Scrollbar.detachStyle();
  }, []);
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContainer>
          <NavBar />
          <StyledScroll data-scrollbar>
            {children}
            <Footer />
          </StyledScroll>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};
