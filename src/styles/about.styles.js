import styled from "styled-components";
import media from "../utils/media";

export const Container = styled.section`
  position: relative;
  margin: 50px auto 0 auto;
  padding: 0 100px;
  max-width: 1250px;
  ${media.tablet`
    padding: 0;
    margin: 0 100px;
  `}
  ${media.phone`
    margin: 0 50px;
  `}
`;

export const TextContainer = styled.header`
  width: 100%;
  color: ${({ theme: { color } }) => color.white};
  ${media.tablet`
    text-align: center;
  `}
`;

export const AboutText = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.xm};
  ${media.tablet`
    font-size: ${({ theme: { font } }) => font.size.m};
  `}
`;

export const NameText = styled.h2`
  font-size: ${({ theme: { font } }) => font.size.xl};
  ${media.tablet`
    font-size: ${({ theme: { font } }) => font.size.l};
  `}
`;
