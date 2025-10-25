import Link from "next/link";
import React from "react";

const CoursesCard = ({ href, name, icon, content, desc }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-4 w-[290px] sm:w-[300px] h-[135px] lg:w-[372px] bg-accent flex flex-col justify-between items-center group box-content"
    >
      <div className="flex items-center justify-between w-full mb-9">
        <h6 className="text-2xl font-medium text-dark">{name}</h6>
        <img className="w-10 h-10" src={icon} alt={name} />
      </div>
      <div className="relative w-full h-max flex overflow-hidden">
        <img
          src="/line.png"
          alt="line"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:-translate-x-[200%] opacity-0 lg:opacity-100 group-hover:opacity-0"
        />

        <div className="opacity-100 lg:opacity-0 group-hover:opacity-100 w-full flex justify-between items-center transition-all duration-700 ease-in-out">
          <div className="w-full">
            <span className="text-sm lg:text-base font-bold text-dark">
              {content}
            </span>
            <p className="text-sm lg:text-base text-dark font-normal max-w-[250px]">
              {desc}
            </p>
          </div>
          <img src="/right-arrow.svg" alt="right-arrow" className="w-7 h-6" />
        </div>
      </div>
    </Link>
  );
};

export default CoursesCard;
