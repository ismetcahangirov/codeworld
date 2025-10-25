import Image from "next/image";
import React from "react";

const ScheduleCard = ({ title, img, time, desc }) => {
  return (
    <div
      className="w-[360px]   lg:w-[380px] h-[428px] md:h-[451px] lg:h-[514px] text-dark p-6 flex flex-col items-center gap-6"
      style={{
        background: `
          linear-gradient(0deg, rgba(33, 158, 188, 0.3), rgba(33, 158, 188, 0.3)),
          linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.38) 100%)
        `,
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
      }}
    >
      <div className="flex justify-center items-center gap-3 w-full">
        <Image
          className="w-10 h-10"
          src={"/time.svg"}
          width={40}
          height={40}
          alt="targer"
        />
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-nowrap">
          {title}
        </h4>
      </div>
      <Image
        className="w-[310px] h-[178px] lg:w-[343px] lg:h-[194px] object-cover"
        width={343}
        height={194}
        src={img}
        alt={title}
      />
      <div>
        <div className="w-max mx-auto text-sm md:text-base lg:text-xl">
          {time}
        </div>
        <p className="text-sm md:text-base lg:text-xl w-full text-center">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;
