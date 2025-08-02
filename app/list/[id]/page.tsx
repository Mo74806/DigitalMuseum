"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import MoreImagesBtn from "@/components/MoreImagesBtn";
import ImagesSwiper from "@/components/ImagesSwiper";
gsap.registerPlugin(SplitText);
const Details = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo("#img-section", { left: "-50%" }, { left: 0 });
    const title = new SplitText("#title", { type: "chars" });
    const description = new SplitText("#description", { type: "lines" });
    const qoute = new SplitText("#qoute", { type: "chars" });
    const creator = new SplitText("#creator > p ", { type: "words" });
    const tl2 = gsap.timeline();
    tl2
      .fromTo(
        "#title",
        { opacity: 0, borderBottom: "none", borderWidth: "0px" },
        {
          opacity: 1,
          borderBottom: "1px solid #6D6E7D",
          duration: 2,
          borderWidth: "100%",
          ease: "power1.inOut",
        }
      )
      .fromTo(
        title.chars,
        { opacity: 0 },
        { opacity: 1, stagger: 0.05 },
        "=-1.5"
      )
      .fromTo(
        "#creator",
        { opacity: 0, borderBottom: "none", borderWidth: "0px" },
        {
          opacity: 1,
          borderBottom: "1px solid #6D6E7D",
          duration: 2,
          borderWidth: "100%",
          ease: "power1.inOut",
        }
      )
      .fromTo(
        "#creator > span",
        { top: -50, opacity: 0 },
        { top: 0, opacity: 1, stagger: 0.05 },
        "=-1.5"
      )
      .fromTo(
        creator.words,
        { top: -50, opacity: 0 },
        { top: 0, opacity: 1, stagger: 0.05 },
        "=-1.5"
      )
      .fromTo(
        "#qoute",
        { opacity: 0, borderBottom: "none", borderWidth: "0px" },
        {
          opacity: 1,
          borderBottom: "1px solid #6D6E7D",
          duration: 2,
          borderWidth: "100%",
          ease: "power1.inOut",
        }
      )
      .fromTo(
        qoute.chars,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          top: 0,
          opacity: 1,
          // delay: 2,
          stagger: 0.03,
          ease: "power1.inOut",
        },
        "=-1.5"
      )
      .fromTo(
        description.lines,
        { height: "0px", opacity: 0, top: "-100px" },
        {
          height: "fit",
          top: 0,
          opacity: 1,
          // delay: 4,
          stagger: 0.05,
          ease: "power1.inOut",
        }
      );
    tl.play();
    tl2.play();
  }, []);
  return (
    <div className="flex flex-col h-[100vh]  overflow-hidden">
      <div className="mt-[100px] h-[61px] w-[100wh] border-t border-b border-[#C7C6C5]">
        <div className="flex !w-fit h-[100%] gap-x-[6px] px-[20px] items-center justify-center border-r border-[#C7C6C5]">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.72222 9.5L9.5 13.2778M5.72222 9.5L13.2778 9.5M5.72222 9.5L9.5 5.72222M9.5 18C10.6162 18 11.7215 17.7801 12.7528 17.353C13.7841 16.9258 14.7211 16.2997 15.5104 15.5104C16.2997 14.7211 16.9258 13.7841 17.353 12.7528C17.7801 11.7215 18 10.6162 18 9.5C18 8.38376 17.7801 7.27846 17.353 6.24719C16.9258 5.21592 16.2997 4.27889 15.5104 3.48959C14.7211 2.7003 13.7841 2.07419 12.7528 1.64702C11.7215 1.21986 10.6162 1 9.5 1C7.24566 1 5.08365 1.89554 3.48959 3.48959C1.89553 5.08365 0.999999 7.24566 0.999999 9.5C1 11.7543 1.89553 13.9164 3.48959 15.5104C5.08365 17.1045 7.24566 18 9.5 18Z"
              stroke="#EFEBE5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[0.88rem] font-[500] text-[#EFEBE5]">
            All Objects
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row lg:gap-y-0 gap-y-3 flex-col lg:gap-x-[45px] text-[#EFEBE5] p-[40px] h-[calc(100vh-233px)]  grid-cols-1">
        <div
          id="img-section"
          className="bg-[#C7C6C50D] relative rounded-[16px] lg:!w-[55%] lg:!h-full !h-[40vh] "
        >
          {/* Vertical Swiper */}
          <ImagesSwiper
            images={[
              "/images/image-2.jpg",
              "/images/image-3.jpg",
              "/images/image-4.jpg",
            ]}
          />
        </div>
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className=" rounded-[16px] lg:!w-[45%] !h-full  overflow-y-auto"
        >
          <h1
            id="title"
            className="pb-[20px] opacity-0  border-b border-[#6D6E7D]  lg:text-[3rem] text-[2rem] font-[400]"
          >
            Mshatta Façade
          </h1>
          <div id="creator" className="py-[20px] border-b border-[#6D6E7D]">
            <span className="opacity-0 relative  text-[0.818rem] font-[400]">
              Contributed by
            </span>
            <p className="  relative text-[1.189rem] font-[700]">
              Mansoor Alemy
            </p>
          </div>
          <div id="qoute" className="py-[20px]  border-b border-[#6D6E7D]">
            <p
              style={{ fontFamily: "var(--noto-sans) ", fontStyle: "italic" }}
              className="font-[400]  text-[1.5rem] text-[#C7C6C5]"
            >
              {`"These scenes of creatures drinking water from one fountain
              together; for me, it shows peace."`}
            </p>
          </div>
          {/* <svg
            className="mt-[20px]"
            width="100%"
            height="60"
            viewBox="0 0 714 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="714" height="60" rx="30" fill="white" />
            <rect x="16" y="10" width="40" height="40" rx="20" fill="#253143" />
            <path
              d="M40.5 29.134C41.1667 29.5189 41.1667 30.4811 40.5 30.866L31.5 36.0622C30.8333 36.4471 30 35.966 30 35.1962L30 24.8038C30 24.034 30.8333 23.5529 31.5 23.9378L40.5 29.134Z"
              fill="#EFEBE5"
            />
            <path
              d="M74 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M86.9756 20.5V39.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M99.9512 24.5V35.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M112.927 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M125.902 28.5V31.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M138.878 24.5V35.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M151.854 23.5V36.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M164.829 40.5V19.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M177.805 25.5V34.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M190.78 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M203.756 28.5V31.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M216.732 25.5V34.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M229.707 28.5V31.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M242.683 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M255.659 37.5V22.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M268.634 41.5V18.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M281.61 21.5V38.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M294.585 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M307.561 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M320.537 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M333.512 22.5V37.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M346.488 17.5V42.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M359.464 23.5V36.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M372.439 26.5V33.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M385.415 39.5V20.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M398.39 36.5V23.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M411.366 32.5V27.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M424.342 21.5V38.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M437.317 43.5V16.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M450.293 36.5V23.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M463.268 19.5V40.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M476.244 16.5V43.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M489.22 39.5V20.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M502.195 15.5V44.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M515.171 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M528.147 24.5V35.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              opacity="0.5"
              d="M541.122 23.5V36.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              opacity="0.5"
              d="M554.098 28.5V31.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              opacity="0.5"
              d="M567.073 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              opacity="0.5"
              d="M580.049 24.5V35.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              opacity="0.5"
              d="M593.025 20.5V39.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              opacity="0.5"
              d="M606 27.5V32.5"
              stroke="#253143"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M629.33 35H627.211V29.631C627.211 29.4143 627.211 29.124 627.211 28.76C627.22 28.3873 627.233 28.0623 627.25 27.785C627.181 27.837 627.09 27.9323 626.977 28.071C626.873 28.2097 626.765 28.3267 626.652 28.422L625.677 29.28L624.611 28.097L627.51 25.718H629.33V35ZM631.682 28.851C631.682 28.4523 631.795 28.175 632.02 28.019C632.246 27.8543 632.519 27.772 632.839 27.772C633.143 27.772 633.407 27.8543 633.632 28.019C633.858 28.175 633.97 28.4523 633.97 28.851C633.97 29.2323 633.858 29.5097 633.632 29.683C633.407 29.8477 633.143 29.93 632.839 29.93C632.519 29.93 632.246 29.8477 632.02 29.683C631.795 29.5097 631.682 29.2323 631.682 28.851ZM631.682 34.09C631.682 33.6913 631.795 33.414 632.02 33.258C632.246 33.0933 632.519 33.011 632.839 33.011C633.143 33.011 633.407 33.0933 633.632 33.258C633.858 33.414 633.97 33.6913 633.97 34.09C633.97 34.4713 633.858 34.7487 633.632 34.922C633.407 35.0867 633.143 35.169 632.839 35.169C632.519 35.169 632.246 35.0867 632.02 34.922C631.795 34.7487 631.682 34.4713 631.682 34.09ZM641.205 30.359C641.205 31.3557 641.106 32.2093 640.906 32.92C640.707 33.6307 640.378 34.1767 639.918 34.558C639.468 34.9393 638.861 35.13 638.098 35.13C637.024 35.13 636.239 34.7097 635.745 33.869C635.251 33.0283 635.004 31.8583 635.004 30.359C635.004 29.3623 635.104 28.5087 635.303 27.798C635.503 27.0787 635.828 26.5283 636.278 26.147C636.738 25.7657 637.344 25.575 638.098 25.575C639.164 25.575 639.949 25.9953 640.451 26.836C640.954 27.6767 641.205 28.851 641.205 30.359ZM637.097 30.359C637.097 31.4163 637.162 32.2137 637.292 32.751C637.431 33.2797 637.7 33.544 638.098 33.544C638.488 33.544 638.753 33.2797 638.891 32.751C639.039 32.2223 639.112 31.425 639.112 30.359C639.112 29.3017 639.039 28.5043 638.891 27.967C638.753 27.4297 638.488 27.161 638.098 27.161C637.7 27.161 637.431 27.4297 637.292 27.967C637.162 28.5043 637.097 29.3017 637.097 30.359ZM647.977 27.798C647.977 28.4393 647.791 28.9507 647.418 29.332C647.046 29.7133 646.595 29.9733 646.066 30.112V30.151C646.76 30.2463 647.293 30.476 647.665 30.84C648.038 31.204 648.224 31.6893 648.224 32.296C648.224 32.8333 648.099 33.3187 647.847 33.752C647.596 34.1767 647.206 34.5147 646.677 34.766C646.149 35.0087 645.473 35.13 644.649 35.13C644.129 35.13 643.666 35.0867 643.258 35C642.851 34.9133 642.461 34.7877 642.088 34.623V32.959C642.47 33.1583 642.86 33.31 643.258 33.414C643.666 33.518 644.038 33.57 644.376 33.57C644.992 33.57 645.416 33.4487 645.65 33.206C645.893 32.9633 646.014 32.621 646.014 32.179C646.014 31.9277 645.958 31.711 645.845 31.529C645.733 31.347 645.533 31.2127 645.247 31.126C644.961 31.0307 644.558 30.983 644.038 30.983H643.44V29.475H644.051C644.545 29.475 644.927 29.423 645.195 29.319C645.464 29.2063 645.65 29.059 645.754 28.877C645.867 28.6863 645.923 28.4697 645.923 28.227C645.923 27.8977 645.832 27.642 645.65 27.46C645.468 27.2693 645.191 27.174 644.818 27.174C644.411 27.174 644.047 27.252 643.726 27.408C643.414 27.564 643.176 27.7113 643.011 27.85L642.101 26.498C642.457 26.238 642.864 26.0213 643.323 25.848C643.791 25.6747 644.372 25.588 645.065 25.588C645.958 25.588 646.664 25.783 647.184 26.173C647.713 26.5543 647.977 27.096 647.977 27.798Z"
              fill="#253143"
            />
            <path d="M657 17.5L657 42.5" stroke="#C7C6C5" />
            <path
              d="M671.331 27.798C671.331 28.4393 671.145 28.9507 670.772 29.332C670.399 29.7133 669.949 29.9733 669.42 30.112V30.151C670.113 30.2463 670.646 30.476 671.019 30.84C671.392 31.204 671.578 31.6893 671.578 32.296C671.578 32.8333 671.452 33.3187 671.201 33.752C670.95 34.1767 670.56 34.5147 670.031 34.766C669.502 35.0087 668.826 35.13 668.003 35.13C667.483 35.13 667.019 35.0867 666.612 35C666.205 34.9133 665.815 34.7877 665.442 34.623V32.959C665.823 33.1583 666.213 33.31 666.612 33.414C667.019 33.518 667.392 33.57 667.73 33.57C668.345 33.57 668.77 33.4487 669.004 33.206C669.247 32.9633 669.368 32.621 669.368 32.179C669.368 31.9277 669.312 31.711 669.199 31.529C669.086 31.347 668.887 31.2127 668.601 31.126C668.315 31.0307 667.912 30.983 667.392 30.983H666.794V29.475H667.405C667.899 29.475 668.28 29.423 668.549 29.319C668.818 29.2063 669.004 29.059 669.108 28.877C669.221 28.6863 669.277 28.4697 669.277 28.227C669.277 27.8977 669.186 27.642 669.004 27.46C668.822 27.2693 668.545 27.174 668.172 27.174C667.765 27.174 667.401 27.252 667.08 27.408C666.768 27.564 666.53 27.7113 666.365 27.85L665.455 26.498C665.81 26.238 666.218 26.0213 666.677 25.848C667.145 25.6747 667.726 25.588 668.419 25.588C669.312 25.588 670.018 25.783 670.538 26.173C671.067 26.5543 671.331 27.096 671.331 27.798ZM672.682 28.851C672.682 28.4523 672.795 28.175 673.02 28.019C673.246 27.8543 673.519 27.772 673.839 27.772C674.143 27.772 674.407 27.8543 674.632 28.019C674.858 28.175 674.97 28.4523 674.97 28.851C674.97 29.2323 674.858 29.5097 674.632 29.683C674.407 29.8477 674.143 29.93 673.839 29.93C673.519 29.93 673.246 29.8477 673.02 29.683C672.795 29.5097 672.682 29.2323 672.682 28.851ZM672.682 34.09C672.682 33.6913 672.795 33.414 673.02 33.258C673.246 33.0933 673.519 33.011 673.839 33.011C674.143 33.011 674.407 33.0933 674.632 33.258C674.858 33.414 674.97 33.6913 674.97 34.09C674.97 34.4713 674.858 34.7487 674.632 34.922C674.407 35.0867 674.143 35.169 673.839 35.169C673.519 35.169 673.246 35.0867 673.02 34.922C672.795 34.7487 672.682 34.4713 672.682 34.09ZM682.205 30.359C682.205 31.3557 682.106 32.2093 681.906 32.92C681.707 33.6307 681.378 34.1767 680.918 34.558C680.468 34.9393 679.861 35.13 679.098 35.13C678.024 35.13 677.239 34.7097 676.745 33.869C676.251 33.0283 676.004 31.8583 676.004 30.359C676.004 29.3623 676.104 28.5087 676.303 27.798C676.503 27.0787 676.828 26.5283 677.278 26.147C677.738 25.7657 678.344 25.575 679.098 25.575C680.164 25.575 680.949 25.9953 681.451 26.836C681.954 27.6767 682.205 28.851 682.205 30.359ZM678.097 30.359C678.097 31.4163 678.162 32.2137 678.292 32.751C678.431 33.2797 678.7 33.544 679.098 33.544C679.488 33.544 679.753 33.2797 679.891 32.751C680.039 32.2223 680.112 31.425 680.112 30.359C680.112 29.3017 680.039 28.5043 679.891 27.967C679.753 27.4297 679.488 27.161 679.098 27.161C678.7 27.161 678.431 27.4297 678.292 27.967C678.162 28.5043 678.097 29.3017 678.097 30.359ZM689.276 30.359C689.276 31.3557 689.177 32.2093 688.977 32.92C688.778 33.6307 688.449 34.1767 687.989 34.558C687.539 34.9393 686.932 35.13 686.169 35.13C685.095 35.13 684.31 34.7097 683.816 33.869C683.322 33.0283 683.075 31.8583 683.075 30.359C683.075 29.3623 683.175 28.5087 683.374 27.798C683.574 27.0787 683.899 26.5283 684.349 26.147C684.809 25.7657 685.415 25.575 686.169 25.575C687.235 25.575 688.02 25.9953 688.522 26.836C689.025 27.6767 689.276 28.851 689.276 30.359ZM685.168 30.359C685.168 31.4163 685.233 32.2137 685.363 32.751C685.502 33.2797 685.771 33.544 686.169 33.544C686.559 33.544 686.824 33.2797 686.962 32.751C687.11 32.2223 687.183 31.425 687.183 30.359C687.183 29.3017 687.11 28.5043 686.962 27.967C686.824 27.4297 686.559 27.161 686.169 27.161C685.771 27.161 685.502 27.4297 685.363 27.967C685.233 28.5043 685.168 29.3017 685.168 30.359Z"
              fill="#253143"
            />
          </svg> */}

          <div
            id="description"
            className="py-[20px]  relative flex flex-col gap-y-[20px] "
          >
            <p className="font-[500] text-[0.9rem]">
              The Mshatta Facade is a richly decorated stone wall from an
              8th-century Desert Castle of Jordan. It is now housed at the
              Museum of Islamic Art in Berlin. One side of the limestone relief
              carvings, show a scene of animals and mythical creatures
              harmoniously sharing water from a fountain.
            </p>
            <p className="font-[500] text-[0.9rem]">
              Mansoor, originally from Afghanistan and now living in Germany,
              unexpectedly found that these images stirred his memories of life
              in Kabul, where many cultures lived side by side, challenging the
              common perception of his homeland. For Mansoor, this piece of
              early Islamic art symbolises the potential for unity through
              cultural exchange across cultures and societies. Listen to his
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              eos, tempora natus adipisci accusantium harum sit quaerat, officia
              veritatis quod dicta, sint eum voluptas voluptate! Incidunt
              dignissimos minima blanditiis autem. story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
