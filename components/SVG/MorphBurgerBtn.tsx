"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

interface BurgerMenuProps {
  onClick?: () => void;
}

export default function BurgerMenu({ onClick }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);

  const line1 = useRef<SVGPathElement>(null);
  const line2 = useRef<SVGPathElement>(null);
  const line3 = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (open) {
      // Morph to cross
      gsap.to(line1.current, {
        morphSVG: { shape: "M3 21.32L21 3.32001" },
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(line2.current, { opacity: 0, duration: 0.2 });
      gsap.to(line3.current, {
        morphSVG: { shape: "M3 3.32001L21 21.32" },
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      // Morph back to burger
      gsap.to(line1.current, {
        morphSVG: { shape: "M4 18L20 18" },
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(line2.current, { opacity: 1, duration: 0.2 });
      gsap.to(line3.current, {
        morphSVG: { shape: "M4 6L20 6" },
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [open]);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
    onClick?.();
  };

  return (
    <svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      style={{ cursor: "pointer" }}
    >
      <path
        ref={line1}
        d="M4 18L20 18"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        ref={line2}
        d="M4 12L20 12"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        ref={line3}
        d="M4 6L20 6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
