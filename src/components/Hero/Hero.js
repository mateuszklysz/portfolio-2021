import React from "react";
import styled from "styled-components";
import media from "../../utils/media";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const StyledContainer = styled.main`
  display: flex;
  margin: 0 100px 40px 100px;
  height: 650px;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  color: ${({ theme: { color } }) => color.white};
  ${media.desktop`
    height: auto;
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
