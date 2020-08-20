import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const StyledContainer = styled.section`
  height: calc(100vh - 100px);
`;

const StyledContent = styled.div`
  font-size: ${({ theme: { font } }) => font.size.l};
  text-align: center;
  color: white;
  opacity: 0.4;
  padding: 50px;
`;

const ProjectPage = ({ data: { mdx } }) => {
  return (
    <StyledContainer>
      <StyledContent>{mdx.frontmatter.title}</StyledContent>
      <StyledContent>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </StyledContent>
    </StyledContainer>
  );
};

export default ProjectPage;

export const query = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
