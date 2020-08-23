import React, { useRef } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "react-three-fiber";
import media from "../../utils/media";

const StyledCanvas = styled(Canvas)`
  width: 700px;
  height: 700px;
  ${media.desktopS`
    width: 700px;
    height: 500px;
  `}
  ${media.phone`
    width: 350px;
    height: 350px;
  `}
  ${media.ip4`
    width: 300px;
    height: 300px;
  `}
`;

const Box = () => {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta / 5;
  });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color="#212121"
        transparent
        opacity={1}
      />
    </mesh>
  );
};

const Cube = () => {
  return (
    <>
      <StyledCanvas colorManagement camera={{ position: [0, 2, 10], fov: 8.5 }}>
        <Box />
        <ambientLight />
        <pointLight position={[-20, 20, 40]} intensity={1} />
      </StyledCanvas>
    </>
  );
};

export default Cube;
