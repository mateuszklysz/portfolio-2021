import React from "react";
import styled from "styled-components";

const StyledText = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  padding: 50px 100px;
`;

const IndexPage = () => <StyledText>Main Page</StyledText>;

export default IndexPage;
