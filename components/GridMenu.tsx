"use client";

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

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

    const selectedEl = optionRefs.current[index];
    const highlightEl = highlightRef.current;

    // Animate highlight movement
    // if (highlightEl && selectedEl && containerRef.current) {
    //   const containerRect = containerRef.current.getBoundingClientRect();
    //   const rect = selectedEl.getBoundingClientRect();
    //   const rect1 = highlightEl.getBoundingClientRect();

    //   const x1 = rect1.left - containerRect.left;
    //   const y1 = rect1.top - containerRect.top;
    //   const x = rect.left - containerRect.left;
    //   const y = rect.top - containerRect.top;

    //   gsap.fromTo(
    //     highlightEl,
    //     {
    //       x: x1,
    //       y: y1,
    //       scale: 0.1,
    //       width: rect1.width,
    //       height: rect1.height,
    //       opacity: 0.8,
    //       ease: "bounce.inOut",
    //       duration: 0.5,
    //     },
    //     {
    //       x,
    //       y,
    //       width: rect.width,
    //       height: rect.height,
    //       scale: 1,
    //       duration: 0.25,
    //       ease: "power1.inOut",
    //     }
    //   );
    // }
    // console.log("object");
  }, [selectedOption]);

  return (
    <div
      ref={containerRef}
      className="  z-[10000] relative  bg-[#C7C6C5] mx-auto flex gap-x-[10px] w-fit px-[6px] py-[5px] rounded-full"
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
          <div>
            {i === 0 ? (
              <svg
                // className="border "
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33331 5.00016C3.33331 4.55814 3.50891 4.13421 3.82147 3.82165C4.13403 3.50909 4.55795 3.3335 4.99998 3.3335H6.66665C7.10867 3.3335 7.5326 3.50909 7.84516 3.82165C8.15772 4.13421 8.33331 4.55814 8.33331 5.00016V5.8335C8.33331 6.27552 8.15772 6.69945 7.84516 7.01201C7.5326 7.32457 7.10867 7.50016 6.66665 7.50016H4.99998C4.55795 7.50016 4.13403 7.32457 3.82147 7.01201C3.50891 6.69945 3.33331 6.27552 3.33331 5.8335V5.00016Z"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33331 12.5002C3.33331 12.0581 3.50891 11.6342 3.82147 11.3217C4.13403 11.0091 4.55795 10.8335 4.99998 10.8335H6.66665C7.10867 10.8335 7.5326 11.0091 7.84516 11.3217C8.15772 11.6342 8.33331 12.0581 8.33331 12.5002V15.0002C8.33331 15.4422 8.15772 15.8661 7.84516 16.1787C7.5326 16.4912 7.10867 16.6668 6.66665 16.6668H4.99998C4.55795 16.6668 4.13403 16.4912 3.82147 16.1787C3.50891 15.8661 3.33331 15.4422 3.33331 15.0002V12.5002Z"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6667 5.00016C11.6667 4.55814 11.8423 4.13421 12.1548 3.82165C12.4674 3.50909 12.8913 3.3335 13.3334 3.3335H15C15.442 3.3335 15.866 3.50909 16.1785 3.82165C16.4911 4.13421 16.6667 4.55814 16.6667 5.00016V7.50016C16.6667 7.94219 16.4911 8.36611 16.1785 8.67867C15.866 8.99123 15.442 9.16683 15 9.16683H13.3334C12.8913 9.16683 12.4674 8.99123 12.1548 8.67867C11.8423 8.36611 11.6667 7.94219 11.6667 7.50016V5.00016Z"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6667 14.1667C11.6667 13.7246 11.8423 13.3007 12.1548 12.9882C12.4674 12.6756 12.8913 12.5 13.3334 12.5H15C15.442 12.5 15.866 12.6756 16.1785 12.9882C16.4911 13.3007 16.6667 13.7246 16.6667 14.1667V15C16.6667 15.442 16.4911 15.866 16.1785 16.1785C15.866 16.4911 15.442 16.6667 15 16.6667H13.3334C12.8913 16.6667 12.4674 16.4911 12.1548 16.1785C11.8423 15.866 11.6667 15.442 11.6667 15V14.1667Z"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8333 4.1665H17.5"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8333 7.5H15"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8333 12.5H17.5"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8333 15.8335H15"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 4.16683C2.5 3.94582 2.5878 3.73385 2.74408 3.57757C2.90036 3.42129 3.11232 3.3335 3.33333 3.3335H6.66667C6.88768 3.3335 7.09964 3.42129 7.25592 3.57757C7.4122 3.73385 7.5 3.94582 7.5 4.16683V7.50016C7.5 7.72118 7.4122 7.93314 7.25592 8.08942C7.09964 8.2457 6.88768 8.3335 6.66667 8.3335H3.33333C3.11232 8.3335 2.90036 8.2457 2.74408 8.08942C2.5878 7.93314 2.5 7.72118 2.5 7.50016V4.16683Z"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 12.4998C2.5 12.2788 2.5878 12.0669 2.74408 11.9106C2.90036 11.7543 3.11232 11.6665 3.33333 11.6665H6.66667C6.88768 11.6665 7.09964 11.7543 7.25592 11.9106C7.4122 12.0669 7.5 12.2788 7.5 12.4998V15.8332C7.5 16.0542 7.4122 16.2661 7.25592 16.4224C7.09964 16.5787 6.88768 16.6665 6.66667 16.6665H3.33333C3.11232 16.6665 2.90036 16.5787 2.74408 16.4224C2.5878 16.2661 2.5 16.0542 2.5 15.8332V12.4998Z"
                  stroke="#253143"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div
            id={`text-wrapper-${i}`}
            className="overflow-hidden ml-1"
            style={{ display: "block", maxWidth: "fit-content" }}
          >
            <p
              id={`text-${i}`}
              className="text-[#253143] whitespace-nowrap inline-block"
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
