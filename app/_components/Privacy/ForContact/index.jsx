import React from "react";
import Container from "../../Container";
import HeaderTag from "../HeaderTag";

const ForContact = () => {
  return (
    <section className="px-7 pb-16">
      <Container>
        <HeaderTag>Əlaqə üçün</HeaderTag>
        <p className="italic text-sm md:text-base lg:text-xl font-open-sans">
          Əgər məxfilik siyasətimizlə bağlı sualın varsa, bizimlə əlaqə saxlaya
          bilərsən:
        </p>
        <ul className="ml-5 italic text-sm md:text-base lg:text-xl font-open-sans">
          <li> 📞 Telefon: +994 50 555 55 55</li>
          <li>Email: privacy@techbridge.az</li>
          <li>Ünvan: Bakı, Nizami küç. 45</li>
        </ul>
        <p className="whitespace-pre-line italic text-sm md:text-base lg:text-xl font-open-sans mt-12">
          {`Bizim üçün məxfilik sadəcə hüquqi öhdəlik deyil — etibarın təməlidir.
           Hər bir tələbəmizin və istifadəçimizin məlumatı bizim üçün qiymətlidir.`}
        </p>
      </Container>
    </section>
  );
};

export default ForContact;
