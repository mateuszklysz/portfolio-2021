import styled, { css } from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import media from "../../../utils/media";

export const StyledButton = styled.p`
  color: ${({ theme: { color } }) => color.black};
  font-size: ${({ theme: { font } }) => font.size.m};
  background-color: ${({ theme: { color } }) => color.white};
  text-align: center;
  line-height: 50px;
  width: 130px;
  height: 100%;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 20px;
  font-weight: bold;
  box-sizing: border-box;
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs};
    width: 100px;
    line-height: 40px;
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s};
    width: 70px;
    line-height: 30px;
   `}
`;

const button = () => css`
  display: block;
  color: inherit;
  text-decoration: none;
`;

export const ButtonLink = styled(AniLink)`
  ${button}
`;

export const ExternalButtonLink = styled.a`
  ${button}
`;
