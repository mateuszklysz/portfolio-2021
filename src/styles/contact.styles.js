import styled from "styled-components";
import media from "../utils/media";

export const Wrapper = styled.section`
  min-height: calc(100vh - 200px);
  max-width: 1250px;
  margin: auto;
  padding: 20px 100px 0 100px;
  ${media.tablet`
    padding: 0 100px 25px 100px;
  `}
  ${media.phone`
    padding: 0;
  `}
`;

export const Container = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin: 40px auto 0 auto;
  ${media.tablet`
    margin: auto;
    align-items: center;
    flex-direction: column-reverse;
  `}
`;

export const Text = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.xl};
  color: ${({ theme: { color } }) => color.white};
  ${media.tablet`
    text-align: center;
    font-size: ${({ theme: { font } }) => font.size.l};
  `};
`;
