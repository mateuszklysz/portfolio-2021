import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import media from "../../../utils/media";

export const Container = styled(AniLink)`
  position: relative;
  margin-right: 100px;
  border-radius: 25px;
  width: 500px;
  height: 500px;
  background-color: ${({ theme: { color } }) => color.secondary};
  ${media.laptop`
    height: 400px;
    width: 400px;
  `}
  ${media.phone`
    margin-right: 50px;
    height: 300px;
    width: 300px;
  `} 
  ${media.ip4`
    margin-right: 25px;
    height: 250px;
    width: 250px;
  `};
`;

export const Text = styled.div`
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xxm};
  font-weight: bold;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Image = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 30%;
  border-radius: 25px;
`;
