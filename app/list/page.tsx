"use client";
import React, { useEffect, useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Menu from "@/components/Menu";
import GridMenu from "@/components/GridMenu";
import GrabMenu from "@/components/GrabMenu";
import ListPageSvg from "@/components/SVG/ListPageSvg";
const ListPage = () => {
  const [showGrid, setShowGrid] = useState("grid");
  useEffect(() => {
    gsap.fromTo(
      "#bg-svg > g",
      { scale: "1.2", duration: 2, rotate: "-50" },
      {
        scale: 1,
        rotate: 0,
        duration: 2,
        ease: "power1.inOut",
      }
    );
  }, [showGrid]);
  useGSAP(() => {
    //starting animation
    const tl = gsap.timeline();
    tl.from("#list-page", {
      top: "0%",
      duration: 1,
      ease: "power1.inOut",
    })
      .from(
        "#main-menu",
        {
          y: 800,
          duration: 1,
          ease: "power1.inOut",
        },
        "-=1"
      )
      .fromTo(
        "#grid",
        {
          y: "100%",
        },
        {
          display: "inline",
          y: "0%",
          ease: "power1.inOut",
          duration: 2,
        },
        "-=1.5"
      );
  }, []);

  return (
    <div
      id="list-page"
      className=" top-[-50%] bg-primarya relative    justify-center  overflow-hidden   !w-[100wh]  !h-[100vh]"
    >
      {/* artifacta gallery */}
      <GalleryGrid
        id="grid"
        className=""
        showGrid={showGrid === "grid" ? true : false}
      />
      {/* category filter menu */}
      <Menu id="main-menu" />
      {showGrid === "grid" ? (
        // grab sign
        <div className="absolute md:bottom-[20%] bottom-[30%]    h-auto flex mx-auto !w-[100%] ">
          <GrabMenu />
        </div>
      ) : null}
      {/* gallery deisplay options [grid / list] */}
      <div className="absolute md:bottom-[10%]  bottom-[20%]   h-auto flex mx-auto !w-[100%] ">
        <GridMenu setShowGrid={setShowGrid} />
      </div>
      {/* background svg */}
      <ListPageSvg id="bg-svg" />
    </div>
  );
};

export default ListPage;
