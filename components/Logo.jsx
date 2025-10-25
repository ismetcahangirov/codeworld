import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ width, height, fontSize, white = false }) => {
  return (
    <Link href={"/"} className="flex items-center gap-1">
      <Image
        className={`font-yatra w-5 h-5 lg:w-7 lg:h-7 ${width} ${height}`}
        src={white ? "./white_logo_icon.svg" : "/logo_icon.svg"}
        alt="codeworld_logo"
        width={50}
        height={50}
      />
      <span
        className={`font-yatra text-2xl lg:text-4xl ${fontSize} ${
          white ? "text-white" : "text-dark"
        }`}
      >
        codeworld
      </span>
    </Link>
  );
};

export default Logo;
