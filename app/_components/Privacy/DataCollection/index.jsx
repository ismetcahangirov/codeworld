import React from "react";
import Container from "../../Container";
import HeaderTag from "../HeaderTag";

const DataCollection = () => {
  return (
    <section className="px-7 pb-16">
      <Container>
        <HeaderTag>Məlumatların Toplanması və İstifadəsi</HeaderTag>
        <ul className="list-disc ml-5 italic text-sm md:text-base lg:text-xl font-open-sans">
          <li>
            Biz yalnız tədris prosesi üçün zəruri olan məlumatları toplayırıq:
            <ul className="list-disc ml-5 ">
              <li>Ad, soyad</li>
              <li>Əlaqə məlumatları (telefon, email)</li>
              <li>Dərs iştirakçılığı və qiymətləndirmə nəticələri</li>
            </ul>
          </li>
          <li>
            Bu məlumatlar yalnız tədris keyfiyyətinin yüksəldilməsi və tələbə
            ilə əlaqənin saxlanılması üçün istifadə olunur.
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default DataCollection;
