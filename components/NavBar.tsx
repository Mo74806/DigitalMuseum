"use client";
import Image from "next/image";

import React, { memo, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import MorphSoundBtn from "./SVG/MorphSoundBtn";
const NavBar = () => {
  const router = useRouter();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  useGSAP(() => {
    gsap.to("#nav", {
      delay:
        window.location.pathname === "/"
          ? window.innerWidth > 767
            ? 5
            : 3
          : 0,
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
        onClick={() => setIsAudioPlaying((prev) => !prev)}
        className="hover:bg-[#81807f] hover:scale-120 transition-all duration-300  absolute z-[10000] !p-0  text-center items-center justify-center  w-[50px]  h-[50px] md:left-[37px] md:top-[25px] top-[20px] left-[17px]  bg-creamy   flex  rounded-full"
      >
        <MorphSoundBtn muted={!isAudioPlaying} />
      </div>

      <Image
        onClick={() => router.push(`/`)}
        src={"/svg/Artifacta.svg"}
        width="100"
        height="100"
        alt="Artifacta_Logo"
      />
    </div>
  );
};

export default memo(NavBar);
