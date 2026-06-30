"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WireframeOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#2563EB"
          wireframe
          distort={0.25}
          speed={1.5}
          transparent
          opacity={0.5}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  const count = 60;
  const positions = useRef(
    new Float32Array(
      Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 8)
    )
  );
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#111111" size={0.02} transparent opacity={0.3} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-90">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <WireframeOrb />
        <Particles />
      </Canvas>
    </div>
  );
}
