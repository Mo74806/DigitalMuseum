"use client";

import { useGSAP } from "@gsap/react";
import { div } from "framer-motion/client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import BurgerMenu from "./SVG/MorphBurgerBtn";
import { useMenu } from "@/context/useMenu";

gsap.registerPlugin(MorphSVGPlugin);

const Menu = ({ id }: { id: string }) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const { selectedOption, changeSelectedOption } = useMenu();
  const [openMenu, setOpenMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const highlightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (openMenu) {
      //open menu animation
      gsap.fromTo(
        "#small-menu",
        {
          borderTopLeftRadius: "50%",
          borderBottomLeftRadius: "50%",
          width: "50px",
          height: "50px",
        },
        {
          borderRadius: "20px",
          width: "92%",
          height: "85%",
          zIndex: "1000000000",
          ease: "power1.inOut",
          duration: 1,
        }
      );
      gsap.to("#small-menu-options > div ", {
        delay: 1,
        opacity: 1,
        stagger: 0.1,
        ease: "power1.inOut",
        bottom: 0,
        duration: "1",
      });
    } else if (!openMenu && !firstLoad) {
      //close menu animation
      gsap.to("#small-menu", {
        width: "50px",
        zIndex: "1000000000",
        height: "50px",
        ease: "power1.inOut",
        duration: 1,
      });

      gsap.to("#small-menu", {
        delay: "2",
        ease: "power1.inOut",
        borderRadius: "50%",
        duration: 0.5,
      });
    }
    setFirstLoad(false);
  }, [openMenu, selectedOption]);
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
    <>
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
            onClick={() => changeSelectedOption(item)}
            className={`w-auto inline px-[10px] text-center  z-10 py-[10px] cursor-pointer rounded-full `}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        id="small-menu"
        className=" md:hidden  absolute  z-[10000] p-0 text-center items-center justify-center  w-[50px]  h-[50px]    top-[2.5%] right-[17px]  bg-[#C7C6C5]   flex  rounded-full"
      >
        <BurgerMenu
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        />
        {!openMenu ? null : (
          <div
            id="small-menu-options"
            className="flex flex-col gap-y-1 overflow-hidden w-full"
          >
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
                onClick={() => {
                  changeSelectedOption(item);
                  setOpenMenu(false);
                }}
                style={{ fontStyle: "italic" }}
                className={`opacity-0 bottom-[-300px]     ${
                  selectedOption === item &&
                  "bg-[#253143]  font-[500] scale-[110%]  text-white "
                }    text-[1.2rem] relative  text-[#253143]  bordre-[#6D6E7D]  inline  text-center !w-auto  py-[15px] z-10  cursor-pointer  `}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
