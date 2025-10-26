import Image from "next/image";
import React from "react";

const OurTeamCard = ({ img, name, major, text }) => {
  return (
    <div className="group w-48 md:w-72 flex flex-col items-center justify-center gap-3 flex-shrink-0">
      <div
        className="w-48 h-48 md:w-72 md:h-72 overflow-hidden rounded-full shadow-accent 
                      group-hover:shadow-lg  transition-shadow duration-500 ease-in"
      >
        <div className="w-full h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in
                       group-hover:scale-110"
            width={288}
            height={288}
            src={img}
            alt={name + "-" + major}
            draggable={false}
          />
        </div>
      </div>

      <div
        className="text-dark text-center hidden sm:block sm:opacity-0 sm:group-hover:opacity-100  
                      transition-opacity duration-300 ease-in"
      >
        <h6 className="text-xl md:text-2xl font-semibold drop-shadow-xs drop-shadow-dark whitespace-nowrap">
          {name}
        </h6>
        <span className="text-sm md:text-base font-open-sans drop-shadow-xs drop-shadow-dark whitespace-nowrap">
          {major}
        </span>
        <p className="text-[12px] md:text-sm mt-1">{text}</p>
      </div>
    </div>
  );
};

export default OurTeamCard;
