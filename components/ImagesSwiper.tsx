"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";

import MoreImagesBtn from "@/components/MoreImagesBtn";
const ImagesSwiper = ({ images }: { images: string[] }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-[#C7C6C50D]  mx-auto rounded-[16px]  lg:h-full h-[40vh] overflow-hidden">
      <div
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute bottom-[40px] right-[40px]"
      >
        <MoreImagesBtn />
      </div>
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={800}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="lg:w-full w-[100%] lg:!h-full !h-[40vh] mx-auto  "
      >
        {images.map((src, i) => (
          <SwiperSlide onClick={() => swiperRef.current?.slideNext()} key={i}>
            <div className="relative w-full h-full cursor-pointer">
              <Image
                src={src}
                alt={`image${i + 1}`}
                fill
                className="object-scale-down mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesSwiper;
