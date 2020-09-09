import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
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
  </>
);

export default NotFoundPage;
