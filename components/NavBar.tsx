import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #253143 0%, rgba(37, 49, 67, 0) 100%)",
      }}
      className="fixed w-full  z-[10000] cursor-pointer h- flex justify-center top-0 py-[33px] "
    >
      <Image
        src="./images/svg/Artifacta.svg"
        width="100"
        height="100"
        alt="Artifacta_Logo"
      />
    </div>
  );
};

export default NavBar;
