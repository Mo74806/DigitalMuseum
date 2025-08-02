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
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content: scroller,
      smooth: true,
      smoothTouch: true,
      // touchMultiplier: 1,
      lerp: 0.03,
      syncTouch: true,
      gestureOrientation: "vertical",
    });

    lenisRef.current = lenis;

    // Sync ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <MenuProvider>
      <NavBar />
      <div ref={scrollerRef}>{children}</div>
    </MenuProvider>
  );
}
