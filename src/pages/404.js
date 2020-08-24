import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import media from "../utils/media";

const StyledContainer = styled.section`
  height: calc(100vh - 180px);
  ${media.tablet`
    height:calc(100vh - 120px);
  `}
`;

const StyledText = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.l};
  text-align: center;
  color: white;
  opacity: 0.4;
  padding: 50px;
`;

const NotFoundPage = () => (
  <>
    <StyledContainer>
      <StyledText>Nie znaleziono strony...</StyledText>
    </StyledContainer>
    <Footer />
  </>
);

export default NotFoundPage;
