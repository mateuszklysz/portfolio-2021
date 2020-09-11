import styled from "styled-components";
import Mail from "../../../assets/svg/mail.svg";
import media from "../../../utils/media";

export const StyledMail = styled(Mail)`
  width: 360px;
  height: 240px;
  ${media.laptop`
    width:270px;
    height:180px;
  `};
  ${media.tablet`
    display:none;
  `}
`;

export const InfoText = styled.p`
  display: block;
  font-size: ${({ theme: { font } }) => font.size.xm};
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  padding-top: 25px;
  ${media.tablet`
    padding: 25px 0;
    text-align: center;
  `}
`;
