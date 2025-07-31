"use client";

import Image from "next/image";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);
import { useRef, useEffect } from "react";
// import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import { Draggable, InertiaPlugin } from "gsap/all";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function GalleryGrid({
  id,
  showGrid,
}: {
  id: string;
  showGrid: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable[] | null>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    gsap.set(content, { x: 0, y: 0 });

    if (showGrid)
      draggableRef.current = Draggable.create(content, {
        type: "x,y",
        bounds: {
          minX:
            window.innerWidth > 767
              ? -container.clientWidth + 800
              : -container.clientWidth + 500,
          maxX: 200,
          maxY:
            window.innerWidth > 767
              ? -window.innerHeight
              : -(window.innerHeight - 300),
          minY: 200,
        },
        inertia: true,
        edgeResistance: 0.85,
        allowContextMenu: true,
      });

    return () => {
      if (draggableRef.current?.[0]) {
        draggableRef.current[0].kill();
        draggableRef.current = null;
      }
    };
  }, [showGrid]);

  return (
    <section
      id={id}
      ref={containerRef}
      className={`absolute      z-[20]   ${
        showGrid ? "!w-fit overflow-hidden h-[100vh]" : "!w-[100%] "
      }       mx-auto`}
    >
      <div
        ref={contentRef}
        className={`     relative       md:px-[50px] px-[20px] ${
          showGrid
            ? "top-[-400px]  pt-[450px] md:!translate-x-[-250px]xx !translate-x-[-400px]xx"
            : " !w-full "
        } `}
      >
        {!showGrid ? (
          <List
            className={`
              
          `}
            images={[
              "/images/hero/img4.jpg",
              "/images/hero/img2.jpg",
              "/images/hero/img3.jpg",
              "/images/hero/img3.jpg",
              "/images/hero/img4.jpg",
              "/images/hero/img4.jpg",
              "/images/hero/img4.jpg",
              "/images/hero/img4.jpg",
              "/images/hero/img4.jpg",
              "/images/hero/img4.jpg",
              "/images/hero/img4.jpg",
              "/images/hero/img4.jpg",
            ]}
          />
        ) : (
          <>
            <Row
              className={` md:translate-x-[-200px] translate-x-[-150px] !mb-[154px]
           `}
              images={[
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
              ]}
            />
            <Row
              className={`md:translate-x-[-50px] translate-x-[-100px]  my-[154px]`}
              images={[
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
              ]}
            />
            <Row
              className={` md:translate-x-[-200px] translate-x-[-150px] !mb-[154px]
           `}
              images={[
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
                "/images/hero/img4.jpg",
              ]}
            />
          </>
        )}
      </div>
    </section>
  );
}

const Row = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
  grid?: boolean;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rows = rowRef.current?.querySelectorAll(".single-row");
    const titles = rowRef.current?.querySelectorAll(".title");

    if (rows && rows.length > 0 && titles) {
      rows.forEach((el) => el.getBoundingClientRect());
      titles.forEach((el) => el.getBoundingClientRect());
      gsap.to(rows, {
        opacity: 1,
        right: 0,
        height: "100%",
        scale: 1,
        stagger: 0.2,
      });
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
  }, [images]);
  return (
    <div
      ref={rowRef}
      className={` group  row-data h-full relative flex    w-full gap-x-[60px] md:gap-x-[120px]  ${className} `}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`single-row scale-10    opacity-0  y-[100px]  relative mb-0 !w-[100%]    
            
            `}
        >
          <div
            className={` ${"md:!w-[400px] !w-[200px]"}  
              h-auto  `}
          >
            <Image
              src={src}
              alt={`image-${i}`}
              width={400}
              height={280}
              className={`image rounded-[8px]    `}
            />
          </div>
          <div
            className={`text-[#EFEBE5] title  justify-center items-center   font-[400] mt-[16px] inline  text-[1.4rem]`}
          >
            Wooden Chest
          </div>
        </div>
      ))}
    </div>
  );
};
const List = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const rowRef1 = useRef<HTMLDivElement>(null);
  const cursorImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = rowRef1.current?.querySelectorAll(".single-row");
    const titles = rowRef1.current?.querySelectorAll(".title");
    const explores = rowRef1.current?.querySelectorAll(".explore");

    // Entrance animation
    if (rows && titles && explores) {
      rows.forEach((el) => el.getBoundingClientRect());
      titles.forEach((el) => el.getBoundingClientRect());
      explores.forEach((el) => el.getBoundingClientRect());

      gsap.to(rows, {
        opacity: 1,
        right: 0,
        height: "100%",
        stagger: 0.2,
      });

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

    // Cursor follow logic
    const cursorImage = cursorImageRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorImage) {
        gsap.to(cursorImage, {
          x: e.clientX + 20,
          y: e.clientY + 20,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const handleMouseEnter = (imgSrc: string) => {
      if (cursorImage) {
        const imgEl = cursorImage.querySelector("img") as HTMLImageElement;
        imgEl.src = imgSrc;
        cursorImage.style.display = "block";
        document.addEventListener("mousemove", handleMouseMove);
      }
    };

    const handleMouseLeave = () => {
      if (cursorImage) {
        cursorImage.style.display = "none";
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };

    // Attach hover listeners
    if (rows) {
      rows.forEach((row, i) => {
        row.addEventListener("mouseenter", () => handleMouseEnter(images[i]));
        row.addEventListener("mouseleave", handleMouseLeave);
      });
    }

    // Cleanup
    return () => {
      rows?.forEach((row) => {
        row.removeEventListener("mouseenter", () => {});
        row.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [images]);

  return (
    <>
      <div
        ref={rowRef1}
        className={`flex flex-col overflow-y-scroll pt-[130px] h-[90vh] w-[100wh] ${className}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex right-[-50%]  opacity-0 relative single-row py-[12px] md:items-center border-b border-[#6D6E7D] !w-[100%]"
          >
            <div className="md:!w-[133px] !w-[100px] h-auto">
              <Image
                src={src}
                alt={`image-${i}`}
                width={133}
                height={133}
                className="image rounded-[8px] md:w-[133px] w-[100px] md:h-[133px] h-[100px] object-cover"
              />
            </div>
            <div className="title text-[#EFEBE5] justify-center items-center ms-[16px] font-[400] mt-[16px] inline md:text-[2.56rem]">
              Wooden Chest
            </div>
            <div className="explore flex md:mt-0 mt-[50px] items-center gap-x-[10px] ms-auto">
              <span className="font-[500] md:text-[0.88rem] text-[0.7rem] text-[#EFEBE5]">
                Explore Story
              </span>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2778 9.5L9.5 5.72222M13.2778 9.5H5.72222M13.2778 9.5L9.5 13.2778M9.5 1C8.38376 1 7.27846 1.21986 6.24719 1.64702C5.21592 2.07419 4.27889 2.70029 3.48959 3.48959C2.70029 4.27889 2.07419 5.21592 1.64702 6.24719C1.21986 7.27846 1 8.38376 1 9.5C1 10.6162 1.21986 11.7215 1.64702 12.7528C2.07419 13.7841 2.70029 14.7211 3.48959 15.5104C4.27889 16.2997 5.21592 16.9258 6.24719 17.353C7.27846 17.7801 8.38376 18 9.5 18C11.7543 18 13.9163 17.1045 15.5104 15.5104C17.1045 13.9163 18 11.7543 18 9.5C18 7.24566 17.1045 5.08365 15.5104 3.48959C13.9163 1.89553 11.7543 1 9.5 1Z"
                  stroke="#EFEBE5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cursor Image */}
      {/* <div
        ref={cursorImageRef}
        className="pointer-events-none fixed top-0 left-0 z-50"
        style={{
          width: "150px",
          height: "150px",
          display: "none",
        }}
      >
        <Image
          src={images[0]}
          alt="cursor"
          // width={300}
          // height={300}
          fill
          className="rounded-[8px] object-cover  !h-[300px] "
        />
      </div> */}
    </>
  );
};
