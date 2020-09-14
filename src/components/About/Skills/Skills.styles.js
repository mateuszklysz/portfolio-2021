import styled, { css } from "styled-components";
import media from "../../../utils/media";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.secondary};
  height: 900px;
  width: 100%;
  ${media.phone`
    height: 600px;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
  ${media.tablet`
    width: 50%;
  `}
`;

export const Option = styled.div`
  ${({ color }) =>
    color
      ? css`
          background: linear-gradient(to right, ${color}, #1c1c1c);
        `
      : css`
          background: linear-gradient(to right, #121212, #1c1c1c);
        `}
  border-radius: 25px;
  display: flex;
  align-items: center;
  width: 520px;
  height: 100px;
  margin: 10px 0;
  ${media.desktop`
    width: 420px;
  `}
  ${media.laptop`
    width: 350px;
  `}
  ${media.tablet`
    width: 300px;
  `}
  ${media.phone`
    width: 180px;
    height: 70px;
    background:none;
    ${({ color }) =>
      color
        ? css`
            background: linear-gradient(to right, ${color}, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `
        : null}
    `}
  ${media.ip4`
    width: 150px;
  `}
`;

export const Header = styled.p`
  line-height: 100px;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.l};
  font-weight: bold;
  margin: 0 auto;
  ${media.desktop`
    font-size: ${({ theme: { font } }) => font.size.xxm}
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.m};
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.xs}
  `}
`;

export const Icon = styled.div`
  margin: 10px 20px;
  & > svg {
    width: 60px;
    height: 60px;
  }
  ${media.desktop`
    & > svg {
      width: 50px;
      height: 50px;
    }
  `}
  ${media.phone`
    & > svg {
      width: 30px;
      height: 30px;
    }
  `}
  ${media.ip4`
    & > svg {
      width: 25px;
      height: 25px;
    }
  `}
`;

export const Text = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xxm};
  font-weight: bold;
  ${media.desktop`
    font-size: ${({ theme: { font } }) => font.size.xm}
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs};
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s}
  `}
`;
