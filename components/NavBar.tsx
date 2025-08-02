"use client";
import Image from "next/image";
import clsx from "clsx";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
// import logo from "./images/svg/Group 4.svg";

const NavBar = () => {
  const router = useRouter();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  useGSAP(() => {
    gsap.to("#nav", {
      delay: 5,
      top: 0,
      ease: "power1.inOut",
      height: "",
    });
  }, []);
  useEffect(() => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current?.play();
      } else {
        audioElementRef.current?.pause();
      }
    }
  }, [isAudioPlaying]);
  return (
    <div
      id="nav"
      style={{
        background:
          "linear-gradient(180deg, #253143 0%, rgba(37, 49, 67, 0) 100%)",
      }}
      className="fixed w-full  z-[10000] cursor-pointer flex justify-center top-[-100px] py-[33px] "
    >
      <audio
        ref={audioElementRef}
        className="hidden"
        src="/audio/loop.mp3"
        loop
      />
      <div
        onClick={() => {
          setIsAudioPlaying((prev) => !prev);
          setIsIndicatorActive((prev) => !prev);
        }}
        className="  absolute z-[10000] p-0 text-center items-center justify-center  w-[50px]  h-[50px] md:left-[37px] md:top-[25px] top-[20px] left-[17px]  bg-[#C7C6C5]   flex  rounded-full"
      >
        {/* <div
          className={`     items-center flex  justify-center  transition-all duration-500  text-center  z-10  cursor-pointer rounded-full `}
        > */}
        <Image
          src={"/images/svg/Group 4.svg"}
          width={24}
          height={24}
          alt="music-btn"
          className="md:w-[24px]  md:h-[24px] w-[16px] h-[16px]"
        />

        {/* </div> */}
      </div>

      <Image
        onClick={() => {
          router.push(`/`);
        }}
        src="./images/svg/Artifacta.svg"
        width="100"
        height="100"
        alt="Artifacta_Logo"
      />
    </div>
  );
};

export default NavBar;
