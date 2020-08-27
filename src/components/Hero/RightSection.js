import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import media from "../../utils/media";
import Cube from "../Cube/Cube";

const StyledCubeContainer = styled.figure`
  z-index: 1;
  min-width: 700px;
  height: 700px;
  outline: none;
  ${media.laptop`
    min-width: 500px;
    height: 500px;
  `}
  ${media.phone`
    min-width: 350px;
    height: 350px;
  `}
  ${media.ip4`
    min-width: 300px;
    height: 300px;
  `}
`;

const RightComponent = () => {
  const cubeContainerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3" } });
    tl.fromTo(
      cubeContainerRef.current,
      { x: "-=300", autoAlpha: 0 },
      { duration: 2, x: "0", autoAlpha: 1 }
    );
  }, []);

  return (
    <StyledCubeContainer ref={cubeContainerRef}>
      <Cube />
    </StyledCubeContainer>
  );
};
export default RightComponent;
