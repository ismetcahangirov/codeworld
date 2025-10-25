import React from "react";
import Container from "../Container";

const majors = [
  "Qrafik Dizayn",
  "UX/UI design",
  "Frontend proqramlaşdırma",
  "Backend proqramlaşdırma",
  "Data Analitika",
];

const HeroSection = () => {
  return (
    <section className="relative z-0 h-[739px] md:h-[843px] lg:h-[835px] bg-cover bg-center bg-[url('/hero/hero.jpg')] inset-shadow-bottom">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      <Container className="flex flex-col px-8 py-24 sm:px-14 sm:pt-28 lg:pt-24 lg:px-20">
        <article className="max-w-[1260px]">
          <h1 className="text-white max-w-[1120px] leading-16 sm:leading-16 lg:leading-[90px] text-3xl sm:text-6xl lg:text-[84px] font-extrabold mb-11">
            Bizimlə təhsildə yeniliyə doğru addım at!
          </h1>
          <h4 className="text-white font-semibold text-3xl sm:text-4xl lg:text-4xl mb-3">
            Axtardığın ixtisaslar burda
          </h4>

          <div className="max-w-[930px] flex gap-5 flex-wrap mb-8">
            {majors.map((major) => (
              <span
                className="text-white font-open-sans text-base lg:text-xl font-normal"
                key={major}
              >
                {major}
              </span>
            ))}
          </div>
          <button className=" bg-secondary hover:bg-secondary/90 transition-all duration-150 ease-in px-16 sm:px-11 py-3 font-medium text-2xl text-white rounded-tr-3xl rounded-bl-3xl cursor-pointer ">
            Bizə qoşul
          </button>
        </article>
      </Container>
    </section>
  );
};

export default HeroSection;
