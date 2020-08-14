import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../utils/global";
import theme from "../utils/theme";

import SEO from "../components/SEO";
import NavBar from "../components/NavBar";

export default ({ children }) => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      {children}
      <h3>Footer</h3>
    </ThemeProvider>
  </>
);
