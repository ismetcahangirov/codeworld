import React from "react";
import Container from "../Container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-24 px-7">
      <Container
        className={
          "flex justify-center md:justify-between items-center gap-3.5"
        }
      >
        <Image
          className="w-[332px] h-[242px] hidden md:block object-contain"
          width={458}
          height={242}
          src={"/aboutUs/code-world-text.png"}
          alt="code-world"
        />
        <Image
          className="w-[370px] h-[326px] lg:w-[732px] object-cover"
          width={732}
          height={326}
          src={"/map.jpg"}
          alt="map"
        />
      </Container>
    </section>
  );
};

export default Hero;
