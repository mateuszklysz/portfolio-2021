import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Wrapper, Text, Container } from "../styles/contact.styles";
import Aside from "../components/Contact/Aside/Aside";
import Form from "../components/Contact/Form/Form";

const Contact = () => {
  const containerRef = useRef(null);

  const gsapAnimations = () => {
    gsap.fromTo(
      containerRef.current.children,
      {
        x: "-=50",
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.5,
      }
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    gsapAnimations();
  }, []);

  return (
    <>
      <Wrapper ref={containerRef}>
        <Text>Szukasz kontaktu?</Text>
        <Container>
          <Aside />
          <Form />
        </Container>
      </Wrapper>
    </>
  );
};

export default Contact;
