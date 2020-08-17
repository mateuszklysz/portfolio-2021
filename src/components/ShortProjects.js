import React from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "gatsby";
import media from "../utils/media";

const StyledText = styled.h2`
  padding-left: 100px;
  color: ${({ theme: { color } }) => color.white};
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
  margin: 50px;
  height: 500px;
  width: 500px;
  flex-direction: column;
  flex-wrap: wrap;
  ${media.desktopS`
  height: 400px;
  `}
  ${media.phone`
  height: 350px;
  margin-left: 0;
  margin-bottom: 50px;
  `}
`;

const StyledProject = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
  margin: 0 50px;
  width: 500px;
  height: 500px;
  border-radius: 25px;
  ${media.desktopS`
    height: 400px;
    width: 400px;
  `}
  ${media.phone`
    height: 350px;
    width: 350px;
  `}
`;

const ShortProjects = () => (
  <>
    <StyledText>Projekty</StyledText>
    <ScrollContainer
      className="container"
      hideScrollbars={true}
      vertical={false}
    >
      <StyledList>
        <Link to="/404">
          <StyledProject>
            {" "}
            <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
              produkcja w toku...
            </h2>
          </StyledProject>
        </Link>
        <StyledProject>
          <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
            produkcja w toku...
          </h2>
        </StyledProject>
        <StyledProject>
          <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
            produkcja w toku...
          </h2>
        </StyledProject>
        <StyledProject>
          <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
            produkcja w toku...
          </h2>
        </StyledProject>
        <StyledProject>
          <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
            produkcja w toku...
          </h2>
        </StyledProject>
        <StyledProject>
          <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
            produkcja w toku...
          </h2>
        </StyledProject>
        <StyledProject>
          <h2 style={{ color: "white", opacity: "0.4", fontSize: "24px" }}>
            produkcja w toku...
          </h2>
        </StyledProject>
      </StyledList>
    </ScrollContainer>
  </>
);

export default ShortProjects;
