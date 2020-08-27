import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Projects />
    </>
  );
};

export default IndexPage;
