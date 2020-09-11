import React from "react";
import { Container, Text, StyledCode } from "./Info.styles";

const InfoSection = () => (
  <Container>
    <Text>
      Programowaniem zajmuję się od małego. Od zawsze ciekawiły mnie produkcje
      gier komputerowych, dlatego też szybko zainteresowałem się językiem{" "}
      <span style={{ color: "#4f83cc" }}>C++</span>.
      <br /> <br />
      Wstęp do <span style={{ color: "#ffb04c" }}>JavaScript</span> był dzięki
      temu bardzo płynny i prosty, a nauka nowych technologii ciekawa i
      nieprzytłaczająca.
    </Text>
    <StyledCode />
  </Container>
);

export default InfoSection;
