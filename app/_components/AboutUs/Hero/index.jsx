import Image from "next/image";
import React from "react";
import Container from "../../Container";

const Hero = () => {
  return (
    <section className="px-7 pt-24  ">
      <Container className="h-[508px] md:h-[753px] lg:h-[600px] relative flex flex-col justify-between items-center overflow-hidden">
        <div className="lg:absolute top-9 right-0 w-full h-[240px] md:w-[668px] md:h-[360px] lg:w-[769px] lg:h-[406px] ">
          <Image
            className="w-full h-full object-contain"
            width={769}
            height={406}
            src={"/aboutUs/code-world-text.png"}
            alt="code-world"
          />
        </div>
        <div className="flex items-start lg:items-end lg:absolute left-0 bottom-0 w-full justify-center lg:justify-between">
          <div className="w-[207px] h-[134px] md:w-[376px] md:h-[244px] lg:w-[625px] lg:h-[406px] ">
            <Image
              className="w-full h-full object-cover"
              width={625}
              height={406}
              src={"/aboutUs/code-world.png"}
              alt="code-world"
            />
          </div>

          <div className="w-[194px] h-[53px] md:w-[422px] md:h-[116px] lg:w-[528px] lg:h-[145px] ">
            <Image
              className="w-full h-full object-contain"
              width={528}
              height={145}
              src={"/aboutUs/circles.png"}
              alt="circles"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
