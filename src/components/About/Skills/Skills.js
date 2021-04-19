import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wrapper,
  Container,
  Option,
  Header,
  Icon,
  Text,
} from "./Skills.styles";
import Html from "../../../assets/svg/about/html5.svg";
import Gatsby from "../../../assets/svg/about/gatsby.svg";
import JSIcon from "../../../assets/svg/about/javascript.svg";
import Sass from "../../../assets/svg/about/sass.svg";
import ThreeJS from "../../../assets/svg/about/threejs.svg";
import GraphQL from "../../../assets/svg/about/graphql.svg";
import Typescript from "../../../assets/svg/about/typescript.svg";
import GSAPIcon from "../../../assets/svg/about/gsap.svg";
import Pwa from "../../../assets/svg/about/PWA.svg";
import Vue from "../../../assets/svg/about/vue.svg";

const Skills = () => {
  const wrapperRef = useRef(null);
  const canRef = useRef(null);
  const learnRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      [canRef.current.children, learnRef.current.children],
      { x: "-10", autoAlpha: 0 },
      {
        x: "0",
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "0 40%",
        },
      }
    );
  }, []);
  return (
    <Wrapper ref={wrapperRef}>
      <Container ref={canRef}>
        <Option color="#4C8C4A">
          <Header>Co potrafię</Header>
        </Option>
        <Option>
          <Icon>
            <Html />
          </Icon>
          <Text>Semantic HTML</Text>
        </Option>
        <Option>
          <Icon>
            <Typescript />
          </Icon>
          <Text>Typescript</Text>
        </Option>
        <Option>
          <Icon>
            <Gatsby />
          </Icon>
          <Text>React / GatsbyJS</Text>
        </Option>
        <Option>
          <Icon>
            <JSIcon />
          </Icon>
          <Text>JS ES6+</Text>
        </Option>
        <Option>
          <Icon>
            <Sass />
          </Icon>
          <Text>Sass / Scss</Text>
        </Option>
      </Container>
      <Container ref={learnRef}>
        <Option color="#FFB04C">
          <Header>Czego się uczę</Header>
        </Option>
        <Option>
          <Icon>
            <ThreeJS />
          </Icon>
          <Text>Three.js</Text>
        </Option>
        <Option>
          <Icon>
            <GraphQL />
          </Icon>
          <Text>GraphQL</Text>
        </Option>
        <Option>
          <Icon>
            <Vue />
          </Icon>
          <Text>Vue 3</Text>
        </Option>
        <Option>
          <Icon>
            <GSAPIcon />
          </Icon>
          <Text>GSAP</Text>
        </Option>
        <Option>
          <Icon>
            <Pwa />
          </Icon>
          <Text>PWA</Text>
        </Option>
      </Container>
    </Wrapper>
  );
};
export default Skills;
