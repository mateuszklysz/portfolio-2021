import styled from "styled-components";
import media from "../../../utils/media";

export const EmailContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  ${media.laptop`
width: 400px;
`}
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: ${({ theme: { color } }) => color.secondary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  line-height: normal;
  -webkit-user-select: text;
  font-weight: bold;
  border: none;
  width: 500px;
  height: 50px;
  padding: 0 20px;
  &::placeholder {
    color: ${({ theme: { color } }) => color.white};
  }
  ${media.laptop`
  width: 400px;
  `}
  ${media.phone`
  width: 300px;
  `}
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme: { color } }) => color.white};
    box-shadow: 0 0 0px 1000px ${({ theme: { color } }) => color.secondary}
      inset;
  }
`;

export const StyledArea = styled.textarea`
  box-sizing: border-box;
  background-color: ${({ theme: { color } }) => color.secondary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  font-family: ${({ theme: { font } }) => font.family.openSans};
  line-height: 1;
  -webkit-user-select: text;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  resize: none;
  width: 500px;
  height: 300px;
  &::placeholder {
    color: ${({ theme: { color } }) => color.white};
  }
  ${media.laptop`
    width: 400px;
  `}
  ${media.phone`
    width: 300px;
  `}
`;

export const ErrorMessange = styled.p`
  width: 100%;
  margin-bottom: 15px;
  color: ${({ theme: { color } }) => color.red};
  ${media.tablet`
    text-align: center;
  `}
`;

export const ConfirmContainer = styled.div`
  display: flex;
  ${media.laptop`
    flex-direction:column;
  `}
`;

export const Button = styled.button`
  background-color: ${({ theme: { color } }) => color.secondary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  font-family: ${({ theme: { font } }) => font.family.openSans};
  font-weight: bold;
  cursor: pointer;
  border: none;
  width: 180px;
  height: 74px;
  margin-left: 10px;
  ${media.laptop`
    width: 300px;
    margin: 10px 0;
    height: 50px;
  `}
`;
