import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from "../../assets/svg/logo.svg";
import Hamburger from "../../assets/svg/hamburger_icon.svg";
import media from "../../utils/media";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  height: 100px;
  width: 100%;
  background-color: ${({ theme: { color } }) => color.primary};
  ${media.tablet`
    display: none;
  `}
`;

export const LogoContainer = styled.div`
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

export const StyledLogo = styled(Logo)`
  width: 60px;
  height: 60px;
`;

export const Menu = styled.ul`
  z-index: 100;
  margin-right: 100px;
  width: 385px;
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const StyledLink = styled(AniLink)`
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  font-size: ${({ theme: { font } }) => font.size.m};
  color: ${({ theme: { color } }) => color.white};
  text-decoration: none;
  overflow: hidden;
  padding: 15px;
  display: block;
  ${media.tablet`
    font-size: ${({ theme: { font } }) => font.size.xm};
  `}
`;

export const StyledSpan = styled.span`
  position: relative;
`;

export const HamburgerIcon = styled(Hamburger)`
  z-index: 101;
  display: none;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 35px;
  height: 30.33px;
  ${media.tablet`
    display:block;
  `}
`;

export const HamburgerMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  z-index: 100;
  position: fixed;
  background-color: ${({ theme: { color } }) => color.primary};
  top: 0;
  right: -420px;
  width: 30%;
  height: 100vh;
  ${media.tablet`
    display: block;
    display: flex;
  `}
  ${media.phone`
    width: 40%;
  `}
  ${media.ip4`
    width: 50%;
  `}
`;
