import React from "react";
import { Container } from "./Hero.styles";
import Info from "../HeroInfo/HeroInfo";
import Cube from "../HeroCube/HeroCube";

const Hero = () => (
  <Container>
    <Info />
    <Cube />
  </Container>
);

export default Hero;
