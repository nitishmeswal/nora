"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import Planet from "./Planet";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={["#0a0a0f"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <directionalLight position={[-3, -2, -3]} intensity={0.3} color="#4a3aff" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#7c5cff" />

      <Suspense fallback={null}>
        <Planet />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
