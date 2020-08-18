import React from "react";
import styled, { ThemeProvider } from "styled-components";
import media from "../utils/media";

import GlobalStyle from "../utils/global";
import theme from "../utils/theme";

import SEO from "../components/SEO/SEO";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;

  ${media.tablet`
    margin-top: 50px;
  `}
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
          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};
