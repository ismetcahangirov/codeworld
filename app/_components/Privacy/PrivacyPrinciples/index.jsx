import React from "react";
import Container from "../../Container";
import HeaderTag from "../HeaderTag";

export const principles = [
  {
    title: "🔐 Təhlükəsizlik:",
    text: "Bütün şəxsi məlumatlar qorunan serverlərdə saxlanılır və müasir şifrələmə texnologiyaları ilə müdafiə olunur.",
  },
  {
    title: "🤝 Etibar:",
    text: "Heç bir şəxsi məlumat üçüncü tərəflərlə paylaşılmır. Biz tələbə və müəllimlərimizin məxfiliyini tam təmin edirik.",
  },
  {
    title: "💬 Şəffaflıq:",
    text: "Məlumatların necə toplanması, saxlanması və istifadə edilməsi haqqında bütün məlumatlar açıq şəkildə təqdim olunur.",
  },
  {
    title: "🧠 Cavabdehlik:",
    text: "Hər bir əməkdaşımız məxfilik qaydalarına əməl etmək üçün təlimatlandırılmışdır.",
  },
];

const PrivacyPrinciples = () => {
  return (
    <section className="px-7 pb-16 text-dark">
      <Container>
        <HeaderTag>Bizim Məxfilik Prinsiplərimiz</HeaderTag>
        <ul className="list-disc ml-5 italic text-sm md:text-base lg:text-xl font-open-sans">
          {principles.map((item, i) => (
            <li key={i}>
              <p className="font-semibold mb-1">{item.title}</p>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PrivacyPrinciples;
