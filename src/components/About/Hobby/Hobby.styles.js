import styled, { css } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import media from "../../../utils/media";

export const Section = styled.section`
  margin: 100px 0 140px 0;
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { color } }) => color.white};
  width: 100%;
  ${media.tablet`
    margin: 70px 0;
     ${({ $second }) =>
       $second
         ? css`
             flex-direction: column;
           `
         : css`
             flex-direction: column-reverse;
           `}
    align-items: center;
  `}
`;

export const Image = styled(GatsbyImage)`
  width: 500px;
  ${media.phone`
    width: 300px;
  `}
  ${media.ip4`
    width: 250px;
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  height: 100%;
  width: 500px;
  margin: auto 0;
  ${({ $second }) =>
    $second
      ? css`
          padding-right: 50px;
          text-align: right;
        `
      : css`
          padding-left: 50px;
        `}
  font-size: ${({ theme: { font } }) => font.size.xxm};
  ${media.desktop`
    font-size: 23px;
  `}
  ${media.laptop`
    font-size: ${({ theme: { font } }) => font.size.xm};
  `}
  ${media.tablet`
    ${({ $second }) =>
      $second
        ? css`
            text-align: right;
            padding-right: 0;
          `
        : css`
            text-align: left;
            padding-left: 0;
          `}
    margin-bottom:50px;
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs};
    width: 100%;
  `}
`;

export const StrongText = styled.strong`
  ${({ $second }) =>
    $second
      ? css`
          color: ${({ theme: { color } }) => color.green};
        `
      : css`
          color: ${({ theme: { color } }) => color.blue};
        `}
`;
