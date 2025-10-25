import Image from "next/image";
import React from "react";

const TeachersSlideCard = ({ name = "", img, major = "" }) => {
  return (
    <div className="flex flex-col justify-between items-center w-max h-[366px] md:h-[435px] group">
      <div className="w-[270px] h-[300px] md:w-[330px] md:h-[357px] overflow-hidden rounded-tr-[30%] rounded-bl-[30%]">
        <Image
          className=" w-full h-full object-cover group-hover:scale-120 transition-all duration-200 ease-in-out"
          draggable={false}
          src={img}
          alt={name}
          width={330}
          height={357}
        />
      </div>

      <div className="flex flex-col items-center text-dark">
        <span className="text-xl md:text-2xl  font-normal md:font-medium font-open-sans md:font-poppins">
          {name}
        </span>
        <span className="text-sm md:text-base font-normal font-open-sans">
          {major}
        </span>
      </div>
    </div>
  );
};

export default TeachersSlideCard;
