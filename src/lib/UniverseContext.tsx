"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useScroll, useSpring, MotionValue } from 'framer-motion';

interface UniverseContextType {
  scrollProgress: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const UniverseContext = createContext<UniverseContextType | null>(null);

export function UniverseProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('hero');
  
  // Smooth springs for 3D camera/element movement
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <UniverseContext.Provider value={{ scrollProgress, mouseX, mouseY, activeSection, setActiveSection }}>
      {children}
    </UniverseContext.Provider>
  );
}

export function useUniverse() {
  const context = useContext(UniverseContext);
  if (!context) throw new Error('useUniverse must be used within UniverseProvider');
  return context;
}
