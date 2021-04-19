import styled from "styled-components";
import logo from "../../../assets/svg/github.svg";
import media from "../../../utils/media";

export const GithubLink = styled.a`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  ${media.phone`
    width: 40px;
    height: 40px;
   `}
  ${media.ip4`
    width: 30px;
    height: 30px;
   `}
`;

export const GithubLogo = styled(logo)`
  width: 50px;
  height: 50px;
  ${media.phone`
    width: 40px;
    height: 40px;
   `}
  ${media.ip4`
    width: 30px;
    height: 30px;
   `}
`;
