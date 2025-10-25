import React from "react";
import Container from "../../Container";

const Hero = () => {
  return (
    <section className="px-7 py-10">
      <Container className="text-dark">
        <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-semibold md:font-bold mb-8">
          Məxfilik Siyasəti
        </h2>

        <p className="w-full text-sm md:text-base lg:text-xl font-open-sans whitespace-pre-line">
          {`Sənin məlumatın — bizim məsuliyyətimizdir.
Bizim Academy-də biz tələbələrimizin şəxsi məlumatlarının təhlükəsizliyinə ciddi yanaşırıq.
Sənin bizə etibar etdiyin hər bir məlumat qorunur, paylaşılmır və yalnız tədris məqsədləri üçün istifadə olunur.`}
        </p>
      </Container>
    </section>
  );
};

export default Hero;
