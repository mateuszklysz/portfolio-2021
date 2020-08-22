import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import media from "../utils/media";

import Button from "../components/Buttons/ExternalButton";

const StyledContainer = styled.div`
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

const StyledContainerBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 50px auto;
  padding: 0 100px;
  max-width: 1250px;

  ${media.desktopL`
    margin: auto;
    padding: 0;
  `}

  ${media.tablet`
    margin-bottom:50px;
  `}
`;

const StyledSection = styled.section`
  width: 50%;
  color: ${({ theme: { color } }) => color.white};
  font-size: 28px;
  font-weight: bold;

  ${media.desktopL`
    width: 40%;
  `}

  ${media.desktopS`
    font-size: calc(28px / 1.5);
  `}

  ${media.tablet`
    text-align: center;
    width: 80%;
  `}
`;

const StyledSectionBody = styled.section`
  width: 50%;
  color: ${({ theme: { color } }) => color.white};
  font-size: 28px;
  font-weight: bold;
  width: 100%;

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
`;

const StyledHeaderL = styled.h2`
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

const StyledHeaderM = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  font-size: 30px;
  margin-bottom: 10px;

  ${media.desktopL`
    font-size: calc(30px / 1.5);
  `}
`;

const StyledHeaderS = styled.h2`
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

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  height: 50px;

  ${media.tablet`
    justify-content:center;
    margin: 15px auto;
  `}

  ${media.phone`
    height: 45px;
  `}

  ${media.ip4`
    height: 30px;
  `}
`;

const ProjectPage = ({ data: { mdx } }) => {
  return (
    <>
      <StyledContainer>
        <StyledSection>
          <StyledHeaderS>Nazwa projektu:</StyledHeaderS>
          <StyledHeaderL>{mdx.frontmatter.title}</StyledHeaderL>
          <StyledHeaderS>Data:</StyledHeaderS>
          <StyledHeaderM>{mdx.frontmatter.date}</StyledHeaderM>
          <StyledHeaderS>Technologie:</StyledHeaderS>
          <StyledHeaderM>{mdx.frontmatter.technologies}</StyledHeaderM>
          <StyledButtonContainer>
            <Button text="Link" to={mdx.frontmatter.site} />
          </StyledButtonContainer>
        </StyledSection>
        <StyledSection>
          <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
        </StyledSection>
      </StyledContainer>
      <StyledContainerBody>
        <StyledSectionBody>
          <StyledHeaderS>Opis</StyledHeaderS>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </StyledSectionBody>
      </StyledContainerBody>
    </>
  );
};

export default ProjectPage;

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        technologies
        site
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;
