"use client";

import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { gridList1, gridList2, gridList3, list } from "@/constants";
import { Draggable, InertiaPlugin } from "gsap/all";
import Row from "./Row";
import List from "./List";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, Draggable, InertiaPlugin);

export default function GalleryGrid({
  id,
  showGrid = true,
  className,
}: {
  id: string;
  showGrid: boolean;
  className: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable[] | null>(null);

  useGSAP(() => {
    if (containerRef.current && contentRef.current) {
      const container = containerRef.current;
      const content = contentRef.current;
      gsap.set(content, { x: 0, y: 0 });

      if (showGrid)
        draggableRef.current = Draggable.create(content, {
          type: "x,y",
          dragClickables: true,
          bounds: {
            minX:
              window.innerWidth > 767
                ? -container.clientWidth + 800
                : -container.clientWidth + 500,
            maxX: 300,
            maxY:
              window.innerWidth > 767
                ? -window.innerHeight
                : -(window.innerHeight - 500),
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
    }
  }, [showGrid]);

  return (
    <section
      id={id}
      ref={containerRef}
      className={`absolute  mx-auto     z-[20]   ${
        showGrid ? "!w-fit overflow-hidden h-[100vh]" : "!w-[100%] "
      }    ${className}  `}
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
          <List images={list} />
        ) : (
          <>
            <Row
              className={` md:translate-x-[-200px] translate-x-[-150px] md:mb-[100px] mb-[50px]
           `}
              images={gridList1}
            />
            <Row
              className={`md:translate-x-[-50px] translate-x-[-250px]  md:my-[100px] my-[50px]`}
              images={gridList2}
            />
            <Row
              className={` md:translate-x-[-200px] translate-x-[-150px] md:mb-[100px] mb-[50px]
                `}
              images={gridList3}
            />
          </>
        )}
      </div>
    </section>
  );
}
