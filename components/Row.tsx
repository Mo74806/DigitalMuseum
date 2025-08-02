"use client";
import { useMenu } from "@/context/useMenu";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
gsap.registerPlugin(SplitText);
const Row = ({
  images,
  className,
}: {
  images: { id: string; title: string; img: string }[];
  className?: string;
}) => {
  const { selectedOption } = useMenu();
  const rowRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  // Initial animation for appearance
  useEffect(() => {
    const rows = rowRef.current?.querySelectorAll(".single-row");
    const titles = rowRef.current?.querySelectorAll(".title");

    if (rows && rows.length && titles) {
      rows.forEach((el) => el.getBoundingClientRect());
      titles.forEach((el) => el.getBoundingClientRect());

      gsap.fromTo(
        rows,
        { opacity: 0, scale: 0.1 },
        { opacity: 1, scale: 1, stagger: 0.2 }
      );

      titles.forEach((title) => {
        const split = new SplitText(title as HTMLElement, { type: "chars" });
        gsap.set(split.chars, { opacity: 0 });
        gsap.to(split.chars, {
          opacity: 1,
          delay: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        });
      });
    }
  }, [images, selectedOption]);

  //handle Navigate to details page
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    item: { id: string; img: string; title: string }
  ) => {
    const imageEl = e.currentTarget.querySelector(".image") as HTMLImageElement;
    if (!imageEl) return;
    const rows = rowRef.current?.querySelectorAll(".single-row");
    const titles = rowRef.current?.querySelectorAll(".title");

    if (rows && rows.length && titles) {
      rows.forEach((el) => el.getBoundingClientRect());
      titles.forEach((el) => el.getBoundingClientRect());

      gsap.fromTo(
        rows,
        { opacity: 1, scale: 1 },
        {
          opacity: 0,
          scale: 0.1,
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

  return (
    <div
      ref={rowRef}
      className={`group row-data h-full relative flex w-full gap-x-[60px] md:gap-x-[100px] ${className}`}
    >
      {images.map((item, i) => (
        <div
          onClick={(e) => handleClick(e, item)}
          key={item.id}
          className="single-row opacity-0 relative cursor-pointer"
        >
          <div className="md:w-[300px]  w-[200px] h-auto relative">
            <Image
              src={item.img}
              alt={item.title}
              width={300}
              height={180}
              className="image rounded-[8px]"
            />
          </div>
          <div className="text-[#EFEBE5] title font-[400] mt-[16px] text-[1.4rem]">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Row;
