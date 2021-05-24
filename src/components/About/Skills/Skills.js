import React, { useState, useRef, useEffect } from "react";
import useMousePosition from "../../../hooks/useMousePosition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HoverText,
  Wrapper,
  Container,
  Option,
  Header,
  Icon,
  IconsContainer,
  Text,
} from "./Skills.styles";
import Html from "../../../assets/svg/about/html5.svg";
import TypeScript from "../../../assets/svg/about/typescript.svg";
import Gatsby from "../../../assets/svg/about/gatsby.svg";
import Sass from "../../../assets/svg/about/sass.svg";
import ThreeJS from "../../../assets/svg/about/threejs.svg";
import Rust from "../../../assets/svg/about/rust.svg";
import Electron from "../../../assets/svg/about/electron.svg";
import Rwd from "../../../assets/svg/about/RWD.svg";
import Linux from "../../../assets/svg/about/linux.svg";
import Graphql from "../../../assets/svg/about/graphql.svg";
import Styled from "../../../assets/svg/about/styled.svg";
import Firebase from "../../../assets/svg/about/firebase.svg";
import Graphcms from "../../../assets/svg/about/graphcms.svg";
import Figma from "../../../assets/svg/about/figma.svg";

const Skills = () => {
  const hoverTextRef = useRef(null);
  const wrapperRef = useRef(null);
  const wrapperUsedRef = useRef(null);
  const canRef = useRef(null);
  const learnRef = useRef(null);

  const [hoverText, setHoverText] = useState("");
  const [hoverTextVisible, setHoverTextVisible] = useState("hidden");

  let { mouseX, mouseY } = useMousePosition();

  useEffect(() => {
    if (hoverTextRef.current && hoverTextVisible === "visible") {
      hoverTextRef.current.setAttribute(
        "style",
        `top: ${mouseY - 80}px; left: ${mouseX}px;`
      );
    }
  });

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
    gsap.fromTo(
      wrapperRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "0 40%",
        },
      }
    );
    gsap.fromTo(
      [wrapperUsedRef.current, wrapperUsedRef.current.children],
      { x: "-10", autoAlpha: 0 },
      {
        x: "0",
        autoAlpha: 1,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: wrapperUsedRef.current,
          start: "0 60%",
        },
      }
    );
  }, []);

  return (
    <>
      <HoverText ref={hoverTextRef} show={hoverTextVisible}>
        {hoverText}
      </HoverText>
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
              <TypeScript />
            </Icon>
            <Text>JS ES6+ / Typescript</Text>
          </Option>
          <Option>
            <Icon>
              <Gatsby />
            </Icon>
            <Text>React / GatsbyJS</Text>
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
              <Rust />
            </Icon>
            <Text>Rust</Text>
          </Option>
          <Option>
            <Icon>
              <Electron />
            </Icon>
            <Text>Electron</Text>
          </Option>
          <Option>
            <Icon>
              <Rwd />
            </Icon>
            <Text>RWD</Text>
          </Option>
        </Container>
      </Wrapper>
      <Wrapper used ref={wrapperUsedRef}>
        <Header>Z czego korzystałem</Header>
        <IconsContainer>
          <Icon
            onMouseEnter={() => {
              if (hoverTextRef.current) {
                setHoverText("Linux");
                setHoverTextVisible("visible");
              }
            }}
            onMouseLeave={() => setHoverTextVisible("hidden")}
          >
            <Linux />
          </Icon>
          <Icon
            onMouseEnter={() => {
              if (hoverTextRef.current) {
                setHoverText("GraphQL");
                setHoverTextVisible("visible");
              }
            }}
            onMouseLeave={() => setHoverTextVisible("hidden")}
          >
            <Graphql />
          </Icon>
          <Icon
            onMouseEnter={() => {
              if (hoverTextRef.current) {
                setHoverText("Styled Component");
                setHoverTextVisible("visible");
              }
            }}
            onMouseLeave={() => setHoverTextVisible("hidden")}
          >
            <Styled />
          </Icon>
          <Icon
            onMouseEnter={() => {
              if (hoverTextRef.current) {
                setHoverText("Firebase");
                setHoverTextVisible("visible");
              }
            }}
            onMouseLeave={() => setHoverTextVisible("hidden")}
          >
            <Firebase />
          </Icon>
          <Icon
            onMouseEnter={() => {
              if (hoverTextRef.current) {
                setHoverText("Figma");
                setHoverTextVisible("visible");
              }
            }}
            onMouseLeave={() => setHoverTextVisible("hidden")}
          >
            <Figma />
          </Icon>
          <Icon
            onMouseEnter={() => {
              if (hoverTextRef.current) {
                setHoverText("GraphCMS");
                setHoverTextVisible("visible");
              }
            }}
            onMouseLeave={() => setHoverTextVisible("hidden")}
          >
            <Graphcms />
          </Icon>
        </IconsContainer>
      </Wrapper>
    </>
  );
};
export default Skills;
