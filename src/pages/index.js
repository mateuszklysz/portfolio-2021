import React, { useEffect } from "react";
import Hero from "../components/Home/Hero/Hero/Hero";
import Projects from "../components/Home/Projects/ProjectsList/ProjectsList";

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
