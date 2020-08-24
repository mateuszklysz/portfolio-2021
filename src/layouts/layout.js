import React from "react";
import styled, { ThemeProvider } from "styled-components";
import media from "../utils/media";
import GlobalStyle from "../utils/global";
import theme from "../utils/theme";
import SEO from "../components/SEO/SEO";
import NavBar from "../components/NavBar/NavBar";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  height: calc(100vh - 100px);
  ${media.tablet`
    padding-top: 50px;
    height: auto;
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
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};
