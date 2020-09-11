import React from "react";
import { Container, Text, ButtonContainer } from "./More.styles";
import Button from "../../Buttons/Button/Button";
import Github from "../../Buttons/Github/Github";

const MoreSection = () => (
  <Container>
    <Text>Chcesz dowiedzieć się więcej?</Text>
    <ButtonContainer>
      <Button text="Kontakt" to="/contact" />
      <Github />
    </ButtonContainer>
  </Container>
);

export default MoreSection;
