import Image from "next/image";
import React from "react";

const ScholarshipCard = ({ title, desc }) => {
  return (
    <div className="relative h-[403px] md:h-[423px] lg:h-[456px] w-[256px] md:w-[281px] lg:w-[303px] px-5 py-14 flex flex-col justify-between items-center bg-sky">
      <div className="absolute left-0 bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute left-0 top-0 w-full h-8 bg-gradient-to-t from-transparent to-white"></div>
      <div className="w-full flex gap-7">
        <Image
          className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          src={"/courses_icons/ui-ux.svg"}
          width={100}
          height={100}
          alt={"ui/ux"}
        />
        <Image
          className="w-7 h-6"
          src={"/right-arrow.svg"}
          width={30}
          height={23}
          alt="right-arrow"
        />
      </div>
      <div className="space-y-1.5 text-dark">
        <h5 className="w-full text-left font-semibold text-3xl">{title}</h5>
        <p className="w-full text-left font-open-sans font-normal text-sm md:text-base">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ScholarshipCard;
