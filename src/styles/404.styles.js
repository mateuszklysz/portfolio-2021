import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 180px);
`;

export const Text = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.l};
  text-align: center;
  color: white;
  opacity: 0.4;
  padding: 50px;
`;
