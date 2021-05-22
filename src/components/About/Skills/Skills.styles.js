import styled, { css } from "styled-components";
import media from "../../../utils/media";

export const HoverText = styled.p`
  visibility: ${({ show }) => show};
  z-index: 1000;
  position: fixed;
  color: ${({ theme: { color } }) => color.white};
  background-color: ${({ theme: { color } }) => color.secondary};
  padding: 5px 15px;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ used }) =>
    used
      ? css`
          flex-direction: column;
          padding: 20px 0;
          background: linear-gradient(
            90deg,
            rgb(18, 18, 18) 0%,
            rgb(28, 28, 28) 100%
          );
        `
      : css`
          background-color: ${({ theme: { color } }) => color.secondary};
          height: 900px;
          ${media.phone`
             height: 600px;
          `}
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
          background: linear-gradient(to right, #212121, #1c1c1c);
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
    height: 70px;`}
  ${media.ip4`
    width: 145px;
  `}
`;

export const Header = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.l};
  font-weight: bold;
  margin: 0 auto;
  ${media.desktop`
    font-size: ${({ theme: { font } }) => font.size.xxm}
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xm};
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.xxs}
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

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  padding: 0 15px;
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
