import styled from "styled-components";
import media from "../../../utils/media";

export const Container = styled.main`
  display: flex;
  margin: 0 auto 40px auto;
  padding: 0 95px;
  height: 650px;
  max-width: 1500px;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme: { font } }) => font.family.montserrat};
  color: ${({ theme: { color } }) => color.white};
  ${media.desktop`
    padding: 0 85px;
    height: 550px;
    justify-content: center;
 `}
  ${media.tablet`
    height: auto;
    padding: 0;
    flex-direction: column;
 `}
`;
