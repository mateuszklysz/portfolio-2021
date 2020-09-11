import styled from "styled-components";
import media from "../../../utils/media";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  ${media.desktop`
   height: 200px;
  `}
  ${media.tablet`
   height: 150px;
  `}
`;

export const Text = styled.p`
  font-size: ${({ theme: { font } }) => font.size.l};
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  ${media.phone`
  font-size: ${({ theme: { font } }) => font.size.xm};
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 200px;
  height: 50px;
  ${media.phone`
    width: 150px;
    height: 40px;
  `}
  ${media.ip4`
    width: 120px;
    height: 30px;
  `}
`;
