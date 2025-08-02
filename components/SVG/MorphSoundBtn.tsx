"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default function MorphSoundBtn() {
  const [open, setOpen] = useState(true);

  const wave1Path =
    "M13.4375 4.1875C13.4375 4.1875 14.375 5.125 14.375 6.6875C14.375 8.25 13.4375 9.1875 13.4375 9.1875";
  const wave2Path =
    "M16.3125 2.3125C16.3125 2.3125 17.875 3.875 17.875 6.6875C17.875 9.5 16.3125 11.0625 16.3125 11.0625";

  // X lines placed in the same positions as the waves
  const mute1Path = "M14 4.5L19 9.5";
  const mute2Path = "M19 4.5L14 9.5";

  useEffect(() => {
    if (open) {
      // Mute
      gsap.to("#wave1", {
        morphSVG: mute1Path,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to("#wave2", {
        morphSVG: mute2Path,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // Sound
      gsap.to("#wave1", {
        morphSVG: wave1Path,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to("#wave2", {
        morphSVG: wave2Path,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [open]);
  return (
    <svg
      className="ml-1 !mt-2 "
      onClick={() => setOpen((prev) => !prev)}
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Speaker base */}
      <path
        d="M1.25 8.36812V5.63189C1.25 4.81814 1.86991 4.15848 2.63462 4.15848H4.64231C4.77779 4.15848 4.91029 4.11618 5.0234 4.03682L9.17658 1.12288C9.63689 0.799933 10.25 1.15122 10.25 1.73792V12.2621C10.25 12.8487 9.63689 13.2001 9.17658 12.8771L5.0234 9.9632C4.91029 9.88386 4.77779 9.8415 4.64231 9.8415H2.63462C1.86991 9.8415 1.25 9.18187 1.25 8.36812Z"
        stroke="#253143"
        strokeWidth="1.5"
      />
      {/* Morphable lines */}
      <path
        id="wave1"
        d="M13.4375 4.1875C13.4375 4.1875 14.375 5.125 14.375 6.6875C14.375 8.25 13.4375 9.1875 13.4375 9.1875"
        stroke="#253143"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="wave2"
        d="M16.3125 2.3125C16.3125 2.3125 17.875 3.875 17.875 6.6875C17.875 9.5 16.3125 11.0625 16.3125 11.0625"
        stroke="#253143"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
