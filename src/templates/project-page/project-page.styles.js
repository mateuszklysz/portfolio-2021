import styled from "styled-components";
import media from "../../utils/media";

export const Container = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 50px auto;
  padding: 0 100px;
  max-width: 1250px;
  ${media.desktopL`
    padding: 0;
  `}
  ${media.tablet`
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  `}
`;

export const ContainerBody = styled.article`
  display: flex;
  width: 100%;
  min-height: 200px;
  justify-content: center;
  margin: 50px auto 100px auto;
  padding: 0 100px;
  max-width: 1250px;
  ${media.desktopL`
    margin: auto;
    padding: 0;
  `}
  ${media.tablet`
    margin-bottom: 50px;
    height: auto;
  `}
  ${media.phone`
    margin-bottom: 20px;
  `}
`;

export const Section = styled.section`
  width: 50%;
  color: ${({ theme: { color } }) => color.white};
  font-size: 28px;
  font-weight: bold;
  ${media.desktopL`
    width: 35%;
  `}
  ${media.desktopS`
    font-size: calc(28px / 1.5);
  `}
  ${media.tablet`
    text-align: center;
    margin-bottom: 30px;
    width: 100%;
  `}
`;

export const SectionBody = styled.section`
  width: 100%;
  color: ${({ theme: { color } }) => color.white};
  font-size: 28px;
  font-weight: bold;
  ${media.desktopL`
    font-size: calc(28px / 1.5);
    margin: 0 100px;
  `};
  ${media.tablet`
    margin: 0 60px;
  `};
  ${media.phone`
    font-size: ${({ theme: { font } }) => font.size.xs};
  `}
  ${media.ip4`
    margin: 0 40px;
  `}
`;

export const HeaderL = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  font-size: 64px;
  margin-bottom: 10px;
  ${media.desktopL`
    font-size: calc(64px / 1.5);
  `}
  ${media.tablet`
    margin-bottom: 0;
  `}
`;

export const HeaderM = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  font-size: 30px;
  margin-bottom: 10px;
  ${media.desktopL`
    font-size: calc(30px / 1.5);
  `}
`;

export const HeaderS = styled.h2`
  color: #6d6d6d;
  font-weight: lighter;
  font-size: 24px;
  margin-bottom: 10px;
  ${media.desktopL`
    font-size: calc(24px / 1.5);
  `}
  ${media.tablet`
    margin-bottom: 0;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  height: 50px;
  width: 200px;
  ${media.tablet`
    margin: 15px auto;
  `}
  ${media.phone`
    height: 45px;
    width: 150px;
  `}
  ${media.ip4`
    height: 30px;
    width: 120px;
  `}
`;

export const StyledImage = styled.div`
  width: 500px;
  height: 500px;
  margin: 20px;
  ${media.desktopL`
  width: 400px;
  height: 400px;
  `}
  ${media.phone`
  width: 300px;
  height: 300px;
  `}
  ${media.ip4`
  width: 250px;
  height: 250px;
  `}
`;
