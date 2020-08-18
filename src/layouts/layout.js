import React from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "../utils/global";
import theme from "../utils/theme";

import SEO from "../components/SEO/SEO";
import NavBar from "../components/NavBar";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
`;

export default ({ children }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContainer>
          <NavBar />
          {children}
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};
