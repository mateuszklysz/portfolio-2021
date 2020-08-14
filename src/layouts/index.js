import React from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../utils/global";
import theme from "../utils/theme";

import SEO from "../components/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex: 1 0 auto;
`;

export default ({ children }) => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
        <NavBar />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  </>
);
