"use client";

import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useUniverse } from '@/lib/UniverseContext';

// Simple seeded random to ensure hydration consistency
function createRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function DataParticles() {
  const { scrollProgress } = useUniverse();
  const ref = useRef<THREE.Points>(null);
  
  const points = useMemo(() => {
    const random = createRandom(333);
    const p = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      p[i * 3] = (random() - 0.5) * 40;
      p[i * 3 + 1] = (random() - 0.5) * 40;
      p[i * 3 + 2] = (random() - 0.5) * 40;
    }
    return p;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const sp = scrollProgress.get();
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05 + sp * 2;
      ref.current.position.y = sp * 5;
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const { scrollProgress } = useUniverse();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      const sp = scrollProgress.get();
      groupRef.current.rotation.x = sp * Math.PI;
      groupRef.current.position.y = -sp * 10;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-15, 5, -20]}>
          <icosahedronGeometry args={[4, 1]} />
          <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.2} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[12, -8, -15]}>
          <boxGeometry args={[4, 4, 4, 2, 2, 2]} />
          <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.15} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
        <mesh position={[0, -15, -25]}>
          <torusGeometry args={[12, 0.05, 16, 100]} />
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </mesh>
      </Float>
      <gridHelper args={[200, 100, '#3b82f6', '#020202']} position={[0, -30, -20]} rotation={[0, 0, 0]} material-transparent material-opacity={0.15} />
    </group>
  );
}

function GlobalCameraController() {
  const { mouseX, mouseY, scrollProgress } = useUniverse();
  
  useFrame((state) => {
    const mx = mouseX.get();
    const my = mouseY.get();
    const sp = scrollProgress.get();

    // Smoothly interpolate camera position
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mx * 3, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, my * 2 + 5 - sp * 30, 0.05);
    state.camera.lookAt(0, -sp * 10, -10);
  });

  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#020202']} />
      <fog attach="fog" args={['#020202', 15, 60]} />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[20, 20, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-20, -20, -10]} intensity={0.5} color="#ef4444" />

      <Stars radius={150} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
      
      <DataParticles />
      <FloatingGeometry />
      <GlobalCameraController />
    </>
  );
}

export default function GlobalUniverse() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas shadows dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 5, 30]} fov={75} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
