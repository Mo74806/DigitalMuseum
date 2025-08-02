"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useWindowWidth } from "@react-hook/window-size";
import LandingSvg from "@/components/SVG/LandingSvg";
import HeroText from "@/components/SVG/HeroText";

// Register plugin
gsap.registerPlugin(ScrollToPlugin);
const IMAGES = [
  "/images/hero/img1.jpg",
  "/images/hero/img2.jpg",
  "/images/hero/img3.jpg",
  "/images/hero/img4.jpg",
];

const HeroSection = () => {
  const width = useWindowWidth();
  const [loading, setLoading] = useState(true);
  const pageRef = useRef(null);
  const page1Ref = useRef(null);
  const subTextRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        IMAGES.map(
          (src) =>
            new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve();
              img.onerror = () => reject();
            })
        )
      );
      setLoading(false);
    };
    preloadImages();
  }, []);

  useEffect(() => {
    //handle starting animation
    const tl = gsap.timeline();
    if (!loading) {
      tl.fromTo(
        "#animated-text",
        {
          ease: "power1.inOut",
          scale: width > 767 ? 5 : 3,
        },
        {
          ease: "power1.inOut",
          scale: 1,
          duration: width > 767 ? 6 : 3,
        }
      ).fromTo(
        "#whole_svg",
        {
          ease: "power1.inOut",
          top: width > 767 ? "-100%" : "-200%",
          scale: width > 767 ? 10 : 1,
          rotate: "180",
        },
        {
          ease: "power1.inOut",
          opacity: "1",
          top: width > 767 ? 0 : "25%",
          scale: 1,
          duration: width > 767 ? 3 : 2,
          rotate: "0",
        },
        "-=1"
      );
      const subText = new SplitText("#sub_text", { type: "words" });
      tl.fromTo(
        subText.words,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "power1.inOut",
        }
      ).fromTo(
        "#landing-btn",
        { opacity: 0, bottom: -300 },
        {
          duration: 1,
          opacity: 1,
          bottom: 0,
          ease: "power1.inOut",
        },
        "-=1.5"
      );
    }
  }, [loading]);

  const handleNavigateToListPage = () => {
    if (page1Ref.current) {
      const tl = gsap.timeline();
      tl.to("#whole_svg", {
        opacity: 1,
        ease: "expo.inOut",
        top: "-100%",
        scale: width > 767 ? 10 : 1,
        rotate: "180",
      }).fromTo(
        page1Ref.current,
        { top: "0%", ease: "power2.inOut" },
        {
          top: "-100%",
          onStart: () => {
            router.push("/list");
          },
        }
      );
      tl.play();
    }
  };

  return (
    <main
      ref={pageRef}
      id="main-screen"
      className="main  h-[100vh] overflow-hidden relative"
    >
      {loading && <div> </div>}

      <div
        ref={page1Ref}
        id="landing"
        className="relative flex w-full h-[100vh] bg-primary overflow-hidden  md:items-center items-start justify-center"
      >
        <div className=" flex z-2   flex-col w-full  md:pt-[100px] pt-[150px] items-center justify-center">
          {/* main heading */}
          <HeroText id="animated-text" />
          {/* sub heading */}
          {!loading && (
            <p
              id="sub_text"
              ref={subTextRef}
              className=" break-words  whitespace-normal xl:w-[25%] lg:w-[35%] pt-[30px] w-[90%] mb-[30px] text-[#EFEBE5] font-[400] xl:text-[1rem] lg:text-[0.8rem] md:text-[0.7rem] text-center"
            >
              Exploring identity through objects in a world shaped by migration.
            </p>
          )}
          {/* CTA button */}
          <Button
            containerClass="opacity-0"
            onClick={() => handleNavigateToListPage()}
            id="landing-btn"
            title="Enter Exhibition"
          />
        </div>

        {/* circle svg mask */}
        <LandingSvg id="whole_svg" />
      </div>
    </main>
  );
};

export default HeroSection;
