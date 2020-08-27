import React from "react";
import styled from "styled-components";
import media from "../../utils/media";
import Button from "../Buttons/Button";
import Github from "../Buttons/Github";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  ${media.desktop`
   height: 200px;
  `}
  ${media.tablet`
   height: 150px;
  `}
`;

const StyledText = styled.p`
  font-size: ${({ theme: { font } }) => font.size.l};
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  ${media.phone`
  font-size: ${({ theme: { font } }) => font.size.xm};
  `}
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 200px;
  height: 50px;
  ${media.phone`
    width: 150px;
    height: 40px;
  `}
  ${media.ip4`
    width: 120px;
    height: 30px;
  `}
`;

const MoreSection = () => (
  <StyledContainer>
    <StyledText>Chcesz dowiedzieć się więcej?</StyledText>
    <StyledButtonContainer>
      <Button text="Kontakt" to="/contact" />
      <Github />
    </StyledButtonContainer>
  </StyledContainer>
);

export default MoreSection;
