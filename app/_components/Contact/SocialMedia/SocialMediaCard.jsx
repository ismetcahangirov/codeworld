import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialMediaCard = ({ title, desc, imgs, linkText, href, caption }) => {
  return (
    <div className="text-dark w-full flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-24">
      <div className="w-full">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h3>
        <p className="text-sm md:text-base lg:text-xl font-open-sans mt-5 mb-8">
          {desc}
        </p>

        <Link
          href={href}
          target="_blank"
          className="text-secondary flex items-center gap-5"
        >
          <h6 className="text-2xl md:text-3xl lg:text-4xl font-semibold underline">
            {linkText}
          </h6>
          <Image
            className="w-[37px] h-[26px]"
            src={"/right-arrow-secondary.svg"}
            width={37}
            height={26}
            alt="right-arrow"
          />
        </Link>
      </div>
      <div>
        <div className="w-[333px] h-[196px] md:w-[398px] md:h-[262px] relative flex-shrink-0">
          <Image
            className="w-[203px] h-[160px] md:w-[256px] md:h-[212px] rounded-[30px] absolute left-0 z-20 bottom-0 object-cover"
            width={256}
            height={212}
            alt={title}
            src={imgs[0]}
          />
          <Image
            className="w-[166px] h-[166px] md:w-[198px] md:h-[212px] rounded-[30px] absolute right-0 top-0 z-10 object-cover"
            width={198}
            height={212}
            alt={title}
            src={imgs[1]}
          />
        </div>
        <p className="text-sm md:text-base lg:text-xl font-open-sans text-center mt-7">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default SocialMediaCard;
