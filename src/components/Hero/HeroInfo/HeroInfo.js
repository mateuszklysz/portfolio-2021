import React, { useRef, useEffect } from "react";
import {
  TextContainer,
  Name,
  Profession,
  Motto,
  IconsContainer,
} from "./HeroInfo.styles";
import { useStaticQuery, graphql } from "gatsby";
import gsap from "gsap";
import Button from "../../Buttons/Button/Button";
import Github from "../../Buttons/Github/Github";

const HeroInfo = () => {
  const textContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      textContainerRef.current,
      { x: "-=300", autoAlpha: 0 },
      { duration: 2, x: "0", autoAlpha: 1 }
    );
  }, []);

  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <TextContainer ref={textContainerRef}>
      <Name>{siteMetadata.author}</Name>
      <Profession>
        Front-end <br /> Developer
      </Profession>
      <Motto>
        Skupiam się na czystym i<br /> prostym{" "}
        <span style={{ color: "#c17900" }}>
          {"<"}kodzie{">"}
        </span>
      </Motto>
      <IconsContainer>
        <Button text="O mnie" to="/about" />
        <Github />
      </IconsContainer>
    </TextContainer>
  );
};
export default HeroInfo;
