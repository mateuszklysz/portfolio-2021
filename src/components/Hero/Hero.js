import React from "react";
import styled from "styled-components";
import media from "../../utils/media";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const StyledContainer = styled.main`
  display: flex;
  margin: 0 auto 40px auto;
  padding: 0 95px;
  height: 650px;
  max-width: 1500px;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  color: ${({ theme: { color } }) => color.white};
  ${media.desktop`
    height: auto;
    flex-direction: column;
 `}
  ${media.tablet`
    height: auto;
    padding: 0;
    flex-direction: column;
 `}
`;

const Hero = () => (
  <StyledContainer>
    <LeftSection />
    <RightSection />
  </StyledContainer>
);

export default Hero;
