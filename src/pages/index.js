import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Scrollbar from "smooth-scrollbar";

import media from "../utils/media";

import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

const ScrollContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  ${media.tablet`
    height: auto;
  `}
`;

const IndexPage = props => {
  const scrollbar = useRef(null);

  useEffect(() => {
    Scrollbar.initAll();
    Scrollbar.detachStyle();
    scrollbar.current.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollContainer ref={scrollbar} data-scrollbar>
        <Hero />
        <Projects />
        <Footer />
      </ScrollContainer>
    </>
  );
};

export default IndexPage;
