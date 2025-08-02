"use client";
import clsx from "clsx";
import { ReactElement } from "react";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  onClick,
}: {
  id: string;
  title: string;
  rightIcon?: ReactElement;
  leftIcon?: ReactElement;
  containerClass?: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      id={id}
      className={clsx(
        "group relative z-10  cursor-pointer overflow-hidden  bg-[#EFEBE5]   md:w-auto w-[80%] md:px-[40px] px-[20px] md:py-[16px] py-[10px] rounded-full  ",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden ">
        <div
          style={{ fontFamily: "var(--font-patua)" }}
          className="translate-y-0 xl:text-[0.94rem] text-[0.89rem] font-extrabold text-[#253143]  skew-y-0 transition duration-500 group-hover:translate-y-[-160%]  group-hover:skew-y-12"
        >
          {title}
        </div>
        <div
          style={{ fontFamily: "var(--font-patua)" }}
          className="absolute translate-y-[164%] xl:text-[0.94rem] text-[0.89rem] font-extrabold text-[#253143] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
        >
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Button;
