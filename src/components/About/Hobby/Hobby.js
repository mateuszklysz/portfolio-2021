import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useStaticQuery, graphql } from "gatsby";
import { Section, Image, TextContainer, StrongText } from "./Hobby.styles";

const HobbySection = ({ second = false }) => {
  const firstSection = useRef(null);
  const secondSection = useRef(null);

  const {
    allFile: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { absolutePath: { regex: "/about/" } }) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    if (second) {
      gsap.fromTo(
        firstSection.current,
        { x: "+=100", autoAlpha: 0 },
        { duration: 2, x: "0", autoAlpha: 1 }
      );
    } else {
      gsap.fromTo(
        secondSection.current,
        { x: "-=100", autoAlpha: 0 },
        { duration: 2, x: "0", autoAlpha: 1 }
      );
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (second) {
    return (
      <Section ref={firstSection} $second={second}>
        <TextContainer $second={second}>
          <p>
            Moje hobby to&nbsp;
            <StrongText $second={second}>
              grafika komputerowa, animacje 2D i 3D oraz gry komputerowe.
            </StrongText>
            &nbsp;Gdyby nie front-end pewnie poszedłbym w któryś z tych
            kierunków.
          </p>
        </TextContainer>
        <Image
          image={edges[0].node.childImageSharp.gatsbyImageData}
          alt="Montowanie"
        />
      </Section>
    );
  } else {
    return (
      <Section ref={secondSection} $second={second}>
        <Image
          image={edges[1].node.childImageSharp.gatsbyImageData}
          alt="Programowanie"
        />
        <TextContainer $second={second}>
          <p>
            Interesują mnie trendy w zakresie&nbsp;
            <StrongText $second={second}>
              projektowania stron WWW, user experience oraz user interface
              design.
            </StrongText>
            &nbsp;Zawsze stawiam na nowoczesne rozwiązania.
          </p>
        </TextContainer>
      </Section>
    );
  }
};

export default HobbySection;
