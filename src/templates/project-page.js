import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
// import media from "../utils/media"
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Button from "../components/Buttons/ExternalButton";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 50px auto;
  padding: 0 100px;
  max-width: 1250px;
`;

const StyledSection = styled.section`
  width: 50%;
  color: ${({ theme: { color } }) => color.white};
  font-size: 28px;
  font-weight: bold;
`;

const StyledHeaderL = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  font-size: 64px;
  margin-bottom: 10px;
`;

const StyledHeaderM = styled.h2`
  color: ${({ theme: { color } }) => color.white};
  font-size: 30px;
  margin-bottom: 10px;
`;

const StyledHeaderS = styled.h2`
  color: #6d6d6d;
  font-weight: lighter;
  font-size: 24px;
  margin-bottom: 10px;
`;

const StyledButtonContainer = styled.div`
  margin-top: 15px;
  height: 50px;
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
            <Button text="O mnie" to={mdx.frontmatter.site} />
          </StyledButtonContainer>
        </StyledSection>
        <StyledSection>
          <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} />
        </StyledSection>
      </StyledContainer>
      <StyledContainer>
        <StyledSection style={{ width: "100%" }}>
          <StyledHeaderS>Opis</StyledHeaderS>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </StyledSection>
      </StyledContainer>
    </>
  );
};

export default ProjectPage;

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
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
