"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Menu = ({ id }: { id: string }) => {
  const [selectedOption, setSelectedOption] = useState("All Objects");
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const highlightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const index = [
      "All Objects",
      "Architectural",
      "Ceremonial",
      "Decorative",
      "Musical",
      "Playful",
      "Useable",
      "Wearable",
    ].indexOf(selectedOption);
    const selectedEl = optionRefs.current[index];
    const highlightEl = highlightRef.current;

    if (selectedEl && highlightEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rect = selectedEl.getBoundingClientRect();
      const rect1 = highlightEl.getBoundingClientRect();

      const x1 = rect1.left - containerRect.left;
      const y1 = rect1.top - containerRect.top;
      const x = rect.left - containerRect.left;
      const y = rect.top - containerRect.top;

      // Stage 1: Fast travel and scale up
      gsap.fromTo(
        highlightEl,
        {
          x: x1,
          y: y1,
          scale: 0.1,
          width: rect1.width,
          height: rect1.height,
          opacity: 0.8,
          ease: "bounce.inOut",
          duration: 0.5,
        },
        {
          x,
          y,
          width: rect.width,
          height: rect.height,
          scale: 1,
          duration: 0.25,
          ease: "power1.inOut",
        }
      );
    }
  }, [selectedOption]);
  return (
    <div
      id={id}
      ref={containerRef}
      className="relative  md:flex hidden z-[10000]  top-[100px] bg-[#C7C6C5] mx-auto  gap-x-[10px] w-fit px-[6px] py-[5px] rounded-full"
    >
      {/* Animated Highlight */}
      <div
        ref={highlightRef}
        className="absolute bg-white rounded-full  pointer-events-none transition-all duration-300"
        style={{ top: 0, left: 0, width: 0, height: 0, opacity: 0 }}
      />

      {[
        "All Objects",
        "Architectural",
        "Ceremonial",
        "Decorative",
        "Musical",
        "Playful",
        "Useable",
        "Wearable",
      ].map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            optionRefs.current[i] = el;
          }}
          onClick={() => setSelectedOption(item)}
          className={`w-auto inline px-[10px] text-center  z-10 py-[10px] cursor-pointer rounded-full `}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Menu;
