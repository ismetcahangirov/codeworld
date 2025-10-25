import React from "react";

const Section = ({ children, title, className }) => {
  return (
    <section className={`px-7 py-14 sm:py-24 lg:py-28 ${className}`}>
      <div className="max-w-[1280px] mx-auto flex justify-center md:justify-start items-center gap-4 mb-5">
        <h4 className="text-dark text-2xl font-semibold sm:text-4xl ">
          {title}
        </h4>
        <img src="/right-arrow.svg" alt="right-arrow" className="w-7 h-6" />
      </div>
      {children}
    </section>
  );
};

export default Section;
