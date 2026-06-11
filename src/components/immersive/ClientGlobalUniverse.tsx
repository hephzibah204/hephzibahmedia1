"use client";

import dynamic from "next/dynamic";

const GlobalUniverse = dynamic(() => import("@/components/immersive/GlobalUniverse"), { ssr: false });

export default function ClientGlobalUniverse() {
  return <GlobalUniverse />;
}
