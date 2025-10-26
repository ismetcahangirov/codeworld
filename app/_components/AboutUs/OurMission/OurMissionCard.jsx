import Image from "next/image";
import React from "react";

const OurMissionCard = ({ desc, img }) => {
  return (
    <div className="relative flex gap-6 h-[254px] md:h-[285px] lg:h-[411px] w-[339px] md:w-[452px] lg:w-[570px]">
      <p className="max-w-[270px] text-sm md:text-base lg:text-xl font-open-sans">
        {desc}
      </p>
      <div className="w-[135px] h-[186px] md:w-[194] md:h-[254px] lg:w-[254px] lg:h-[379px] rounded-[100%] overflow-hidden flex-shrink-0">
        <Image
          className="w-full h-full object-cover"
          src={img}
          width={254}
          height={379}
          alt="our-mission"
        />
      </div>
      <Image
        className="absolute left-[30px]  bottom-0 w-[235px] h-[79px] md:w-[328] md:h-[110] lg:w-[382] lg:h-[135]"
        src={"/aboutUs/missionRectangle.png"}
        width={382}
        height={135}
        alt="rectangle"
      />
    </div>
  );
};

export default OurMissionCard;
