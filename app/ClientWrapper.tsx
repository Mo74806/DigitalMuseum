"use client";

import NavBar from "@/components/NavBar";
import { MenuProvider } from "@/context/useMenu";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  return (
    <MenuProvider>
      <NavBar />
      <div ref={scrollerRef}>{children}</div>
    </MenuProvider>
  );
}
