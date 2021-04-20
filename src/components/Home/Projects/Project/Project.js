import React from "react";
import { Container, Text } from "./Project.styles";
import { Image } from "./Project.styles";

const Project = ({ name, img, slug }) => {
  return (
    <Container to={slug} paintDrip hex="#121212">
      <Image image={img} alt={name} />
      <Text>{name}</Text>
    </Container>
  );
};

export default Project;
