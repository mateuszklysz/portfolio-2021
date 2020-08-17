import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../utils/global";
import theme from "../utils/theme";

import SEO from "../components/SEO/SEO";
import NavBar from "../components/NavBar";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const StyledMain = styled.main`
  margin: auto;
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
      </StyledContainer>
    </ThemeProvider>
  </>
);
