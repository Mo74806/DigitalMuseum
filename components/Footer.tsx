import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#253143]/80  border-t px-[40px] flex md:flex-row  flex-col  py-[12px] border-[#6D6E7D]  items-center w-full fixed  bottom-0">
      <p className="font-[400] order-2 md:order-1 md:pt-0 pt-[12px] text-[12px] text-white">
        Copyright ©2025 Artifacta
      </p>
      <div className="ms-auto flex gap-x-6  order-1 md:order-2 h-fit">
        <Image
          src="./images/svg/x.svg"
          width="24"
          height="24"
          alt="Artifacta_Logo"
        />
        <Image
          src="./images/svg/youtube.svg"
          width="24"
          height="24"
          alt="Artifacta_Logo"
        />
        <button
          style={{ fontFamily: "var(--font-patua)" }}
          className={`bg-[#EFEBE5]  flex  px-[5px]  rounded-full xl:text-[0.94rem] text-[0.89rem]    font-[400] text-[#253143] !patua_font`}
        >
          {" "}
          <Image
            src="./images/svg/Frame 22.svg"
            width="48"
            height="48"
            alt="Artifacta_Logo"
          />
          <Image
            src="./images/svg/Frame 20.svg"
            width="48"
            height="48"
            alt="Artifacta_Logo"
          />
          <Image
            src="./images/svg/Frame 19.svg"
            width="48"
            height="48"
            alt="Artifacta_Logo"
          />
        </button>
      </div>
    </div>
  );
};

export default Footer;
