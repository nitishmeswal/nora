"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

let cachedTexture: THREE.CanvasTexture | null = null;
function getTexture(): THREE.CanvasTexture {
  if (cachedTexture) return cachedTexture;
  const rng = seededRandom(42);
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  const gradient = ctx.createLinearGradient(0, 0, 1024, 512);
  gradient.addColorStop(0, "#0d1b2a");
  gradient.addColorStop(0.3, "#1b2838");
  gradient.addColorStop(0.5, "#162447");
  gradient.addColorStop(0.7, "#1f4068");
  gradient.addColorStop(1, "#0d1b2a");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 512);

  ctx.fillStyle = "rgba(30, 80, 130, 0.4)";
  for (let i = 0; i < 60; i++) {
    const x = rng() * 1024;
    const y = rng() * 512;
    const w = 20 + rng() * 80;
    const h = 10 + rng() * 40;
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, rng() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "rgba(60, 140, 200, 0.2)";
  for (let i = 0; i < 40; i++) {
    const x = rng() * 1024;
    const y = rng() * 512;
    const r = 5 + rng() * 30;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "rgba(100, 200, 255, 0.15)";
  for (let i = 0; i < 30; i++) {
    const x = rng() * 1024;
    const y = rng() * 512;
    const r = 2 + rng() * 8;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  cachedTexture = tex;
  return tex;
}

const ATMOSPHERE_VERTEX = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ATMOSPHERE_FRAGMENT = `
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    gl_FragColor = vec4(uColor, intensity * uIntensity);
  }
`;

const ATMOSPHERE_UNIFORMS = {
  uColor: { value: new THREE.Color("#4a6fa5") },
  uIntensity: { value: 0.6 },
};

export default function Planet() {
  const group = useRef<THREE.Group>(null);
  const atmosphereMatRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const texture = getTexture();

  useFrame((_state, delta) => {
    const root = typeof document !== "undefined" ? document.documentElement : null;
    const raw = root?.style.getPropertyValue("--scroll-progress") ?? "0";
    const p = parseFloat(raw) || 0;

    if (!group.current) return;

    group.current.rotation.y += delta * 0.15;
    group.current.rotation.y += p * 0.02;

    const isMobile = viewport.width < 5;

    if (p < 0.15) {
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, 0, 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, 0, 0.05);
      const s = THREE.MathUtils.lerp(1.0, 1.2, p / 0.15);
      group.current.scale.setScalar(s);
    } else if (p < 0.35) {
      const settleP = (p - 0.15) / 0.2;
      const eased = settleP * settleP * (3 - 2 * settleP);

      if (isMobile) {
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, 0, 0.05);
        group.current.position.y = THREE.MathUtils.lerp(
          group.current.position.y,
          eased * -0.5,
          0.05
        );
        const s = THREE.MathUtils.lerp(1.2, 0.9, eased);
        group.current.scale.setScalar(s);
      } else {
        const targetX = eased * (viewport.width * 0.28);
        const targetY = eased * (-viewport.height * 0.22);
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.05);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.05);
        const s = THREE.MathUtils.lerp(1.2, 0.75, eased);
        group.current.scale.setScalar(s);
      }
    } else {
      if (isMobile) {
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, 0, 0.05);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.5, 0.05);
        group.current.scale.setScalar(
          THREE.MathUtils.lerp(group.current.scale.x, 0.9, 0.05)
        );
      } else {
        const targetX = viewport.width * 0.28;
        const targetY = -viewport.height * 0.22;
        group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.05);
        group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.05);
        group.current.scale.setScalar(
          THREE.MathUtils.lerp(group.current.scale.x, 0.75, 0.05)
        );
      }
    }

    if (atmosphereMatRef.current) {
      atmosphereMatRef.current.uniforms.uIntensity.value =
        0.4 + Math.sin(_state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.3}
          roughness={0.6}
          emissive="#0a1628"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.45, 64, 64]} />
        <shaderMaterial
          ref={atmosphereMatRef}
          transparent
          side={THREE.BackSide}
          uniforms={ATMOSPHERE_UNIFORMS}
          vertexShader={ATMOSPHERE_VERTEX}
          fragmentShader={ATMOSPHERE_FRAGMENT}
        />
      </mesh>
    </group>
  );
}
