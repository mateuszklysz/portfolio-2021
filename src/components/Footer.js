import React from "react";
import styled from "styled-components";
// import media from "../utils/media";

const StyledContainer = styled.footer`
  background-color: ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  line-height: 80px;
  text-align: center;
  width: 100%;
  height: 80px;
`;

const Footer = () => (
  <>
    <StyledContainer>
      <p>© 2020 Mateusz Kłysz. All rights reserved</p>
    </StyledContainer>
  </>
);

export default Footer;
