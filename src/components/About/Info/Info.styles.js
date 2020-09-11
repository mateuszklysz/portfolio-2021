import styled from "styled-components";
import media from "../../../utils/media";
import Code from "../../../assets/svg/code.svg";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  ${media.phone`
    height: 500px;
  `}
  ${media.ip4`
  height: 450px;
  `}
`;

export const Text = styled.p`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xxm};
  ${media.desktop`
    font-size: 23px};
  `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xm};
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.xs};
  `}
`;

export const StyledCode = styled(Code)`
  z-index: -1;
  position: absolute;
  right: 200px;
  opacity: 10%;
  ${media.tablet`
    right: 0;
    height:400px;
    width:400px;
  `}
  ${media.phone`
    right: 0;
    height:250px;
    width:250px;
  `}
  ${media.ip4`
    right: -20px;
    height:270px;
    width:270px;
   `}
`;
