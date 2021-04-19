import styled from "styled-components";
import media from "../../../../utils/media";

export const CubeContainer = styled.figure`
  z-index: 1;
  width: 700px;
  height: 700px;
  min-width: 700px;
  min-height: 700px;
  max-width: 700px;
  max-height: 700px;
  outline: none;
  ${media.desktop`
    width: 500px;
    height: 500px;
    min-width: 500px;
    min-height: 500px;
    max-width: 500px;
    max-height: 500px;
  `}
  ${media.phone`
    width: 350px;
    height: 350px;
    min-width: 350px;
    min-height: 350px;
    max-width: 350px;
    max-height: 350px;
  `}
  ${media.ip4`
    width: 300px;
    height: 300px;
    min-width: 300px;
    min-height: 300px;
    max-width: 300px;
    max-height: 300px;
  `}
`;
