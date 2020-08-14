import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

const StyledContainer = styled.div`
  width: 100%;
  min-height: calc(200vh - 150px);
`;

const IndexPage = () => (
  <>
    <StyledContainer>
      <Hero />
    </StyledContainer>
  </>
);

export default IndexPage;
