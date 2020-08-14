import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Box = () => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.002;
  });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} rotateX={10} />
      <meshStandardMaterial attach="material" color="grey" />
    </mesh>
  );
};

const Cube = () => {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 2, 10], fov: 10 }}>
        <spotLight intensity={0.5} position={[0, 10, 20]} />
        <Box rotateX="100" />
      </Canvas>
    </>
  );
};

export default Cube;
