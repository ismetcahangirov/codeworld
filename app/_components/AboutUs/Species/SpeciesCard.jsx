import Image from "next/image";
import React from "react";

const SpeciesCard = ({ title, icon, desc, figure, clipPath, i }) => {
  return (
    <div
      className={`relative h-[125px] lg:h-[135px] w-full md:w-[360px] lg-[387] flex flex-col justify-between ${
        i < 3 ? "items-end" : "items-start"
      }`}
    >
      <div
        style={{ clipPath: clipPath }}
        className={`${figure} ${
          i < 3 ? "left-0 bottom-0" : "right-0 top-0"
        } absolute`}
      ></div>
      <div className="flex gap-1.5">
        <Image
          className="w-[30px] h-[30px]"
          width={30}
          height={30}
          src={icon}
          alt={title}
        />
        <h4
          className={`${
            i < 3 ? "text-right" : "text-left"
          } text-2xl font-medium md:text-3xl md:font-semibold lg:text-4xl `}
        >
          {title}
        </h4>
      </div>
      <p
        className={`${
          i < 3 ? "text-right pr-14" : "text-left pl-14"
        } text-sm font-open-sans md:text-base  lg:text-xl `}
      >
        {desc}
      </p>
    </div>
  );
};

export default SpeciesCard;
