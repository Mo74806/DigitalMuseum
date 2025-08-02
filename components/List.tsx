"use client";

import Image from "next/image";
import RightArrow from "./SVG/RightArrow";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMenu } from "@/context/useMenu";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const List = ({
  images,
  className,
}: {
  images: { id: string; title: string; img: string }[];
  className?: string;
}) => {
  const { selectedOption } = useMenu();
  const router = useRouter();
  const rowRef1 = useRef<HTMLDivElement>(null);
  //handel Navigate to details page
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    item: { id: string; img: string; title: string }
  ) => {
    const rows = rowRef1.current?.querySelectorAll(".single-row");
    const titles = rowRef1.current?.querySelectorAll(".title");
    const explores = rowRef1.current?.querySelectorAll(".explore");

    // Entrance animation
    if (rows && titles && explores) {
      rows.forEach((el) => el.getBoundingClientRect());
      titles.forEach((el) => el.getBoundingClientRect());
      explores.forEach((el) => el.getBoundingClientRect());
      gsap.fromTo(
        rows,

        {
          opacity: 1,
          right: 0,
          height: "100%",
          stagger: 0.2,
        },
        {
          opacity: 0,
          right: "-50%",
          height: "100%",
          stagger: 0.2,
          onStart: () => {
            setTimeout(() => {
              router.push(`/list/${item.id}`);
            }, 300);
          },
        }
      );
    }
  };
  useEffect(() => {
    const rows = rowRef1.current?.querySelectorAll(".single-row");
    const titles = rowRef1.current?.querySelectorAll(".title");
    const explores = rowRef1.current?.querySelectorAll(".explore");

    // Entrance animation
    if (rows && titles && explores) {
      rows.forEach((el) => el.getBoundingClientRect());
      titles.forEach((el) => el.getBoundingClientRect());
      explores.forEach((el) => el.getBoundingClientRect());
      gsap.fromTo(
        rows,
        {
          opacity: 0,
          right: "-50%",
          height: "100%",
          stagger: 0.2,
        },
        {
          opacity: 1,
          right: 0,
          height: "100%",
          stagger: 0.2,
        }
      );

      titles.forEach((title) => {
        const split = new SplitText(title as HTMLElement, { type: "chars" });
        gsap.set(split.chars, { opacity: 0 });
        gsap.to(split.chars, {
          opacity: 1,
          stagger: 0.09,
          ease: "power2.out",
        });
      });

      explores.forEach((el) => {
        gsap.set(el, { opacity: 0, x: -100 });
        gsap.to(el, {
          opacity: 1,
          x: 0,
          delay: 1.5,
          ease: "power1.inOut",
        });
      });
    }
  }, [images, selectedOption]);

  return (
    <>
      <div
        ref={rowRef1}
        className={`flex flex-col overflow-y-scroll pt-[130px] h-[90vh] w-[100wh] ${className}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="flex opacity-0  relative single-row py-[12px] md:items-center border-b border-[#6D6E7D] !w-[100%]"
          >
            <div className="md:!w-[133px] !w-[100px] h-auto">
              <Image
                src={item.img}
                alt={`image-${i}`}
                width={133}
                height={133}
                className="image rounded-[8px] md:w-[133px] w-[100px] md:h-[133px] h-[100px] object-cover"
              />
            </div>
            <div className="title text-[#EFEBE5] justify-center items-center ms-[16px] font-[400] mt-[16px] inline md:text-[2.56rem]">
              {item.title}
            </div>
            <div
              onClick={(e) => handleClick(e, item)}
              className="explore cursor-pointer flex md:mt-0 mt-[50px] items-center gap-x-[10px] ms-auto"
            >
              <span className="font-[500] md:text-[0.88rem] text-[0.7rem] text-[#EFEBE5]">
                Explore Story
              </span>
              <RightArrow />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default List;
