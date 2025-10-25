import React from "react";
import Container from "../../Container";
import HeaderTag from "../HeaderTag";

const DataProtection = () => {
  return (
    <section className="px-7 pb-16">
      <Container>
        <HeaderTag>Məlumatların Qorunması</HeaderTag>
        <ul className="list-disc ml-5 italic text-sm md:text-base lg:text-xl font-open-sans">
          <li>Məlumatlar təhlükəsiz serverlərdə saxlanılır.</li>
          <li>
            Yalnız səlahiyyətli şəxslər bu məlumatlara giriş əldə edə bilər.
          </li>
          <li>Sistemlərimiz müntəzəm yenilənir və qorunur.</li>
          <li>Onlayn formalar SSL sertifikatı ilə qorunur.</li>
        </ul>
      </Container>
    </section>
  );
};

export default DataProtection;
