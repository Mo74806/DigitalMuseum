"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ImagesSwiper from "@/components/ImagesSwiper";
import { useRouter } from "next/navigation";
import { singleArtifacts } from "@/constants";
gsap.registerPlugin(SplitText);
const Details = ({ params }: { params: Promise<{ id: string }> }) => {
  const artifact = singleArtifacts;

  const router = useRouter();
  const { id } = React.use(params);
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
          duration: 1,
          borderWidth: "100%",
          ease: "power1.inOut",
        }
      )
      .fromTo(title.chars, { opacity: 0 }, { opacity: 1, stagger: 0.05 })
      .fromTo(
        "#creator",
        { opacity: 0, borderBottom: "none", borderWidth: "0px" },
        {
          opacity: 1,
          borderBottom: "1px solid #6D6E7D",
          duration: 0.5,
          borderWidth: "100%",
          ease: "power1.inOut",
        },
        "=-3"
      )
      .fromTo(
        "#creator > span",
        { top: -50, opacity: 0 },
        { top: 0, opacity: 1, stagger: 0.05 }
      )
      .fromTo(
        creator.words,
        { top: -50, opacity: 0 },
        { top: 0, opacity: 1, stagger: 0.05 }
        // "-=3"
      )
      .fromTo(
        "#qoute",
        { opacity: 0, borderBottom: "none", borderWidth: "0px" },
        {
          opacity: 1,
          borderBottom: "1px solid #6D6E7D",
          duration: 1,
          borderWidth: "100%",
          ease: "power1.inOut",
        },
        "=-1"
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
        }
        // "-=4"
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
  }, [artifact]);
  return (
    <div className="flex flex-col h-[100vh]  md:overflow-hidden overflow-y-auto">
      <div className="mt-[100px] h-[61px] flex w-[100wh] md:overflow-hidden overflow-y-auto border-t border-b border-creamy">
        <div
          onClick={() => {
            router.push("/list");
          }}
          className="flex  cursor-pointer !w-fit h-[100%] gap-x-[6px] px-[20px] items-center justify-center border-r border-creamy"
        >
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
        <div
          onClick={() => router.push(`/list/${parseInt(id) + 1}`)}
          className="flex  ms-auto bg-creamy text-primary cursor-pointer !w-fit h-[100%] gap-x-[6px] px-[20px] items-center justify-center border-l border-creamy"
        >
          <p className="text-[0.88rem] font-[500]">Next Story</p>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2778 9.5L9.5 5.72222M13.2778 9.5H5.72222M13.2778 9.5L9.5 13.2778M9.5 1C8.38376 1 7.27846 1.21986 6.24719 1.64702C5.21592 2.07419 4.27889 2.70029 3.48959 3.48959C2.70029 4.27889 2.07419 5.21592 1.64702 6.24719C1.21986 7.27846 1 8.38376 1 9.5C1 10.6162 1.21986 11.7215 1.64702 12.7528C2.07419 13.7841 2.70029 14.7211 3.48959 15.5104C4.27889 16.2997 5.21592 16.9258 6.24719 17.353C7.27846 17.7801 8.38376 18 9.5 18C11.7543 18 13.9163 17.1045 15.5104 15.5104C17.1045 13.9163 18 11.7543 18 9.5C18 7.24566 17.1045 5.08365 15.5104 3.48959C13.9163 1.89553 11.7543 1 9.5 1Z"
              stroke="#253143"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex lg:flex-row lg:gap-y-0 gap-y-3 flex-col lg:gap-x-[45px] text-[#EFEBE5] p-[40px] md:h-[calc(100vh-233px)] h-[calc(100vh-173px)] grid-cols-1">
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
          className=" lg:!w-[45%]  lg:overflow-y-scroll  overflow-y-auto    md:pb-0 pb-[100px] "
        >
          <h1
            id="title"
            className="pb-[20px] opacity-0  border-b border-[#6D6E7D]  lg:text-[3rem] text-[2rem] font-[400]"
          >
            {artifact.title}
          </h1>
          <div id="creator" className="py-[20px] border-b border-[#6D6E7D]">
            <span className="opacity-0 relative  text-[0.818rem] font-[400]">
              Contributed by
            </span>
            <p className="  relative text-[1.189rem] font-[700]">
              {artifact.creator}
            </p>
          </div>
          <div id="qoute" className="py-[20px]  border-b border-[#6D6E7D]">
            <p
              style={{ fontFamily: "var(--noto-sans) ", fontStyle: "italic" }}
              className="font-[400]  text-[1.5rem] text-creamy"
            >
              {artifact.quote}
            </p>
          </div>
          <div
            id="description"
            className="py-[20px]  relative flex flex-col gap-y-[20px] "
          >
            <p className="font-[500] text-[0.9rem]">
              {artifact.description[0]}
            </p>
            <p className="font-[500] text-[0.9rem]">
              {artifact.description[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
