import React from "react";
import { Container, Text, StyledCode } from "./Info.styles";

const InfoSection = () => (
  <Container>
    <Text>
      Programowaniem zajmuję się od małego. Od zawsze ciekawiły mnie produkcje
      gier komputerowych, dlatego też szybko zainteresowałem się językami{" "}
      <span style={{ color: "#0d47a1" }}>C++</span> oraz{" "}
      <span style={{ color: "#7c43bd" }}>C#</span>.
      <br /> <br />
      Wstęp do <span style={{ color: "#ffb04c" }}>JavaScript</span> był dzięki
      temu bardzo płynny, a sam{" "}
      <span style={{ color: "#5472d3" }}>Typescript</span> nie był aż tak ciężki
      do nauki.
    </Text>
    <StyledCode />
  </Container>
);

export default InfoSection;
