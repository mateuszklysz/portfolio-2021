import React, { useRef, useEffect } from "react";
import { CubeContainer } from "./HeroCube.styles";
import gsap from "gsap";
import Cube from "../../Cube/Cube";

const HeroCube = () => {
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
    <CubeContainer ref={cubeContainerRef}>
      <Cube />
    </CubeContainer>
  );
};
export default HeroCube;
