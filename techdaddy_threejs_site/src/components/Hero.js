import React from "react";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

export default function Hero() {
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}