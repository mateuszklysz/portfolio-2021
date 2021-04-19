import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta / 6;
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
      <Canvas colorManagement camera={{ position: [0, 2, 10], fov: 8.5 }}>
        <Box />
        <ambientLight />
        <pointLight position={[-20, 20, 40]} intensity={1} />
      </Canvas>
    </>
  );
};

export default Cube;
