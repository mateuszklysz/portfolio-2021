import styled from "styled-components";
import media from "../../../utils/media";

export const CubeContainer = styled.figure`
  z-index: 1;
  min-width: 700px;
  height: 700px;
  outline: none;
  ${media.laptop`
    min-width: 500px;
    height: 500px;
  `}
  ${media.phone`
    min-width: 350px;
    height: 350px;
  `}
  ${media.ip4`
    min-width: 300px;
    height: 300px;
  `}
`;
