"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Footer = () => {
  useGSAP(() => {
    gsap.to("#footer", {
      delay:
        window.location.pathname === "/"
          ? window.innerWidth > 767
            ? 5
            : 3
          : 0,
      bottom: 0,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div
      id="footer"
      className="bg-primary/80 z-[10000]  border-t px-[40px] flex md:flex-row  flex-col  py-[12px] border-[#6D6E7D]  items-center w-full fixed  bottom-[-105px]"
    >
      <p className="font-[400] order-2 md:order-1 md:pt-0 pt-[12px] text-[12px] text-white">
        Copyright ©2025 Artifacta
      </p>
      <div className="ms-auto max-auto  text-center  justify-center md:w-auto w-full flex gap-x-6  order-1 md:order-2 h-fit">
        <Image src="/svg/x.svg" width="24" height="24" alt="x" />
        <Image src="/svg/youtube.svg" height="24" width="24" alt="youtube" />
        <div
          style={{ fontFamily: "var(--font-patua)" }}
          className={`bg-[#EFEBE5]  flex  px-[5px]  rounded-full xl:text-[0.94rem] text-[0.89rem]    font-[400] text-primary !patua_font`}
        >
          <Image src="/svg/Frame 22.svg" width="48" height="48" alt="theme" />
          <Image
            src="/svg/Frame 20.svg"
            width="48"
            height="48"
            alt="large-font"
          />
          <Image
            src="/svg/Frame 19.svg"
            width="48"
            height="48"
            alt="small-font"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
