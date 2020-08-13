import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import SEO from "../components/SEO/SEO";

export default ({ children }) => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Header</h1>
      {children}
      <h3>Footer</h3>
    </ThemeProvider>
  </>
);
