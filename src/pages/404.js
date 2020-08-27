import React from "react";
import styled from "styled-components";

const StyledText = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.l};
  text-align: center;
  color: white;
  opacity: 0.4;
  padding: 50px;
`;

const NotFoundPage = () => (
  <>
    <StyledText>Nie znaleziono strony...</StyledText>
  </>
);

export default NotFoundPage;
