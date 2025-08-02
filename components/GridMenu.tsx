"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Grid from "./SVG/Grid";
import List from "./SVG/List";

const GridMenu = ({ setShowGrid }: { setShowGrid: (val: string) => void }) => {
  const [selectedOption, setSelectedOption] = useState("Switch to grid");
  const containerRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const highlightRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const index = ["Switch to grid", "Switch to list"].indexOf(selectedOption);
    const unselectedIndex = index === 0 ? 1 : 0;
    const wrapper = document.getElementById(`text-wrapper-${unselectedIndex}`);
    const text = document.getElementById(`text-${unselectedIndex}`);
    if (wrapper) {
      gsap.set(wrapper, { width: "auto" }); // set to auto to get full width
      const fullWidth = wrapper.offsetWidth;

      gsap.set(wrapper, { width: 0 }); // start from 0
      gsap.to(wrapper, {
        width: fullWidth,
        duration: 0.3,
        ease: "power1.out",
      });
      gsap.to(text, {
        opacity: 1,
        duration: 0.15,
        ease: "power1.in",
      });
    }
  }, [selectedOption]);

  return (
    <div
      ref={containerRef}
      className="  z-[10000] relative  bg-creamy mx-auto flex gap-x-[10px] w-fit px-[6px] py-[5px] rounded-full"
    >
      {/* Animated Highlight */}
      <div
        ref={highlightRef}
        className="absolute bg-white rounded-full  pointer-events-none transition-all duration-300"
        style={{ top: 0, left: 0, width: 0, height: 0, opacity: 0 }}
      />

      {["Switch to grid", "Switch to list"].map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            optionRefs.current[i] = el;
          }}
          onClick={() => {
            console.log("object");
            setShowGrid(item === "Switch to grid" ? "grid" : "list");

            setSelectedOption(item);
          }}
          className={`${
            selectedOption === item && "bg-white"
          } w-auto  items-center flex  justify-center  transition-all duration-500 px-[10px] text-center  z-10 py-[10px] cursor-pointer rounded-full `}
        >
          <div>{i === 0 ? <Grid /> : <List />}</div>
          <div
            id={`text-wrapper-${i}`}
            className="overflow-hidden ml-1"
            style={{ display: "block", maxWidth: "fit-content" }}
          >
            <p
              id={`text-${i}`}
              className="text-primary whitespace-nowrap inline-block"
            >
              {selectedOption !== item && item}
            </p>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default GridMenu;
