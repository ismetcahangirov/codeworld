import React from "react";
import Container from "../../Container";
import HeaderTag from "../HeaderTag";

const UserRights = () => {
  return (
    <section className="px-7 pb-16">
      <Container>
        <HeaderTag>İstifadəçi Hüquqları</HeaderTag>
        <p className="italic text-sm md:text-base lg:text-xl font-open-sans">
          Hər bir tələbə və istifadəçi aşağıdakı hüquqlara malikdir:
        </p>
        <ul className="list-disc ml-5 italic text-sm md:text-base lg:text-xl font-open-sans">
          <li>Öz şəxsi məlumatlarına baxmaq və dəyişiklik etmək</li>
          <li>Hesabını silmək və ya deaktiv etmək</li>
          <li>Məlumatların istifadəsinə razılığını geri götürmək</li>
        </ul>
      </Container>
    </section>
  );
};

export default UserRights;
