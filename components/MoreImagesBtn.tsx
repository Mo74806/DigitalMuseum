import React from "react";

const MoreImagesBtn = () => {
  return (
    <div className="  z-[10000] relative  bg-white hover:bg-[#696867] hover:scale-[120%] transition-all duration-300 mx-auto flex gap-x-[10px] w-fit  px-[15px] py-[10px] rounded-full">
      <div
        className={`  flex-row  w-auto md:gap-x-[10px]      items-center flex  justify-center  transition-all duration-500  text-center  z-10  cursor-pointer rounded-full `}
      >
        <div style={{ display: "block", maxWidth: "fit-content" }}>
          <p className=" md:inline-block hidden text-primary text-[14px] font-[500] whitespace-nowrap ">
            More Images
          </p>
        </div>{" "}
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 12.7778L13.2778 9M9.5 12.7778V5.22222M9.5 12.7778L5.72222 9M18 9C18 7.88376 17.7801 6.77846 17.353 5.74719C16.9258 4.71592 16.2997 3.77889 15.5104 2.98959C14.7211 2.20029 13.7841 1.57419 12.7528 1.14702C11.7215 0.719859 10.6162 0.5 9.5 0.5C8.38376 0.5 7.27846 0.719859 6.24719 1.14702C5.21592 1.57419 4.27889 2.20029 3.48959 2.98959C2.7003 3.77889 2.07419 4.71592 1.64702 5.74719C1.21986 6.77846 1 7.88376 1 9C1 11.2543 1.89553 13.4163 3.48959 15.0104C5.08365 16.6045 7.24566 17.5 9.5 17.5C11.7543 17.5 13.9163 16.6045 15.5104 15.0104C17.1045 13.4163 18 11.2543 18 9Z"
            stroke="#253143"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default MoreImagesBtn;
