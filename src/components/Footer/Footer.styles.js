import styled from "styled-components";
import media from "../../utils/media";

export const Container = styled.footer`
  background-color: ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  line-height: 80px;
  text-align: center;
  width: 100%;
  height: 80px;
  ${media.phone`
  font-size: ${({ theme: { font } }) => font.size.s};
    `}
`;
