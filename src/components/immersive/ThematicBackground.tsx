"use client";

import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

type ThemeType = 'web' | 'mobile' | 'marketing' | 'cyber' | 'design' | 'software';

interface ThematicBackgroundProps {
  type: ThemeType;
}

// Simple seeded random to ensure hydration consistency
function createRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function WebEffect() {
  const points = useMemo(() => {
    const random = createRandom(123);
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      p[i * 3] = (random() - 0.5) * 60;
      p[i * 3 + 1] = (random() - 0.5) * 60;
      p[i * 3 + 2] = (random() - 0.5) * 60;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      ref.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 2;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={points} stride={3}>
        <PointMaterial transparent color="#00f0ff" size={0.15} sizeAttenuation={true} blending={THREE.AdditiveBlending} opacity={0.6} />
      </Points>

      <Float speed={2} rotationIntensity={1}>
        <mesh position={[10, 5, -10]}>
          <icosahedronGeometry args={[6, 2]} />
          <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.2} blending={THREE.AdditiveBlending} />
        </mesh>
        <mesh position={[10, 5, -10]}>
           <icosahedronGeometry args={[3, 1]} />
           <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.4} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
    </group>
  );
}

function DesignEffect() {
  const ref = useRef<THREE.Group>(null);
  const torusNodes = useMemo(() => {
    const random = createRandom(456);
    return [...Array(10)].map(() => ({
      pos: [(random() - 0.5) * 30, (random() - 0.5) * 30, -20] as [number, number, number],
      rot: [random() * Math.PI, 0, 0] as [number, number, number]
    }));
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={ref}>
       <Float speed={3} rotationIntensity={2}>
         <mesh position={[0, 0, -10]}>
            <octahedronGeometry args={[8, 0]} />
            <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.3} blending={THREE.AdditiveBlending} />
         </mesh>
       </Float>
       {torusNodes.map((node, i) => (
         <Float key={i} speed={2} position={node.pos}>
           <mesh rotation={node.rot}>
             <torusGeometry args={[1.5, 0.02, 16, 50]} />
             <meshBasicMaterial color="#db2777" transparent opacity={0.5} blending={THREE.AdditiveBlending} />
           </mesh>
         </Float>
       ))}
    </group>
  );
}

function SoftwareEffect() {
  const points = useMemo(() => {
    const random = createRandom(789);
    const p = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      p[i * 3] = (random() - 0.5) * 50;
      p[i * 3 + 1] = (random() - 0.5) * 50;
      p[i * 3 + 2] = (random() - 0.5) * 50;
    }
    return p;
  }, []);

  return (
    <group>
      <Points positions={points} stride={3}>
        <PointMaterial transparent color="#8b5cf6" size={0.1} sizeAttenuation={true} blending={THREE.AdditiveBlending} opacity={0.7} />
      </Points>
      <Float speed={5} rotationIntensity={1} floatIntensity={1}>
         <group position={[0, 0, -12]}>
           <mesh>
             <boxGeometry args={[10, 10, 10, 4, 4, 4]} />
             <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.2} blending={THREE.AdditiveBlending} />
           </mesh>
           <mesh>
             <boxGeometry args={[4, 4, 4]} />
             <meshBasicMaterial color="#a78bfa" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
           </mesh>
         </group>
      </Float>

    </group>
  );
}

function MobileEffect() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={group}>
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.2} position={[(i - 3.5) * 6, Math.sin(i) * 5, -15 + i]}>
          <mesh>
            <boxGeometry args={[3, 6, 0.1]} />
            <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.3} blending={THREE.AdditiveBlending} />
          </mesh>
        </Float>
      ))}

      <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} />
    </group>
  );
}

function MarketingEffect() {
  const count = 20;
  const nodes = useMemo(() => {
    const random = createRandom(101);
    return [...Array(count)].map(() => ({
      pos: new THREE.Vector3((random() - 0.5) * 30, (random() - 0.5) * 30, (random() - 0.5) * 20),
      color: ['#f59e0b', '#fbbf24', '#d97706'][Math.floor(random() * 3)]
    }));
  }, []);

  return (
    <group>
      {nodes.map((node, i) => (
        <Float key={i} speed={2} floatIntensity={2}>
          <mesh position={node.pos}>
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshBasicMaterial color={node.color} wireframe transparent opacity={0.8} blending={THREE.AdditiveBlending} />
          </mesh>
        </Float>
      ))}
      <mesh position={[0, 0, -10]}>
        <octahedronGeometry args={[12, 1]} />
        <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </mesh>

    </group>
  );
}

function CyberEffect() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group>
      <Float speed={4} rotationIntensity={2}>
        <mesh ref={mesh} position={[0, 0, -10]}>
          <dodecahedronGeometry args={[8, 1]} />
          <MeshDistortMaterial 
            color="#ff003c" 
            speed={3} 
            distort={0.5} 
            wireframe 
            transparent 
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Float>

    </group>
  );
}

function ThemeEffect({ type }: { type: ThemeType }) {
  switch (type) {
    case 'web': return <WebEffect />;
    case 'mobile': return <MobileEffect />;
    case 'marketing': return <MarketingEffect />;
    case 'cyber': return <CyberEffect />;
    case 'design': return <DesignEffect />;
    case 'software': return <SoftwareEffect />;
    default: return <WebEffect />;
  }
}

export default function ThematicBackground({ type }: ThematicBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <ThemeEffect type={type} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function Stars({ radius, depth, count, factor, saturation }: any) {
  const points = useMemo(() => {
    const random = createRandom(202);
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius + random() * depth;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [radius, depth, count]);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial transparent color="white" size={0.1} sizeAttenuation={true} opacity={0.3} />
    </Points>
  );
}
