import styled from "styled-components";
import media from "../../../utils/media";

export const TextContainer = styled.div`
  position: relative;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  width: 550px;
  ${media.desktop`
    width: auto;
    text-align: center;
    align-items:center;
    position: static;
   `}
`;

export const Name = styled.h3`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.xm};
  padding-left: 5px;
  position: relative;
  top: 10px;
  ${media.desktop`
    font-size: ${({ theme: { font } }) => font.size.m};
    padding-left: 0;
   `}
  ${media.phone`
    position: static;
    font-size: ${({ theme: { font } }) => font.size.xs};
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s};
  `}
`;

export const Profession = styled.h1`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.xxl};
  font-weight: bold;
  ${media.desktop`
    font-size: ${({ theme: { font } }) => font.size.xl};
    padding-left: 0;
   `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.l};
  `}
  ${media.ip4`
    font-size: 30px};
  `}
`;

export const Motto = styled.h2`
  z-index: 2;
  font-size: ${({ theme: { font } }) => font.size.l};
  padding-left: 2px;
  ${media.desktop`
    font-size: ${({ theme: { font } }) => font.size.xm};
    padding-left: 0;
   `}
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.m};
  `}
  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s};
  `}
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 10px;
  width: 200px;
  height: 50px;
  ${media.phone`
    margin-left: 0;
    height:40px;
    width: 150px;
   `}
  ${media.ip4`
    width: 120px;
    height:30px;
   `}
`;
