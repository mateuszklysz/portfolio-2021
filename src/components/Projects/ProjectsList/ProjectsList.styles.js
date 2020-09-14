import styled from "styled-components";
import ScrollImage from "../../../assets/svg/scroll.svg";
import media from "../../../utils/media";

export const ProjectsText = styled.div`
  display: flex;
  padding-left: 100px;
  color: ${({ theme: { color } }) => color.white};
  ${media.phone`
  padding-left: 50px;
  font-size:${({ theme: { font } }) => font.size.m}
  `}
`;

export const StyledScrollImage = styled(ScrollImage)`
  width: 40px;
  height: 40px;
  margin-left: 15px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  margin: 50px;
  height: 500px;
  width: 500px;
  flex-direction: column;
  flex-wrap: wrap;
  ${media.desktop`
    height: 400px;
  `}
  ${media.phone`
    height: 300px;
    margin-top: 25px;
    margin-left: 30px;
    margin-bottom: 30px;
  `}
  ${media.ip4`
    height: 250px;
  `}
`;
