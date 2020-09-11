import React from "react";
import { Container, Image, Text } from "./Project.styles";

const Project = ({ name, img, slug }) => (
  <>
    <Container to={slug} paintDrip hex="#121212">
      <Image fluid={img.fluid} />
      <Text>{name}</Text>
    </Container>
  </>
);

export default Project;
