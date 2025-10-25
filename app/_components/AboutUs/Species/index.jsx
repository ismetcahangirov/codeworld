import React from "react";
import SpeciesCard from "./SpeciesCard";
import Container from "../../Container";

const species = [
  {
    title: "Dəyərlərimiz",
    icon: "/diamond.svg",
    desc: "Bizim dəyərlərimiz hər dərsin və hər uğurun arxasında duran əsas sütunlardır:",
    figure:
      "w-[125px] h-[135px] lg:w-[134px] lg:h-[144px] rounded-[28px] bg-[#B721BC4D]",
  },
  {
    title: "Innovasiya",
    icon: "/light.svg",
    desc: "Dəyişən texnoloji dünyaya uyğun yeniliklər tətbiq edirik.",
    figure:
      "w-[131px] h-[69px] lg:w-[141px] lg:h-[74px] rounded-[28px] bg-[#A259054D]",
  },
  {
    title: "Davamlı İnkişaf",
    icon: "/flower.svg",
    desc: "Hər gün öyrənməyə, yenilənməyə və mükəmməlləşməyə davam edirik.",
    figure:
      "w-[131px] h-[108px] lg:w-[141px] lg:h-[117px] rounded-[28px] bg-[#219EBC66]",
    clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)",
  },
  {
    title: "Peşəkarlıq",
    icon: "/worker.svg",
    desc: "Hər bir dərsdə keyfiyyət, dəqiqlik və məsuliyyət prinsiplərinə sadiqik.",
    figure:
      "w-[199px] h-[134px] lg:w-[214px] lg:h-[144px] rounded-[30px] bg-[#D1B2004D]",
    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
  },
  {
    title: "Əməkdaşlıq",
    icon: "/hands.svg",
    desc: "Tədris və inkişaf prosesində komanda ruhuna inanırıq.",
    figure:
      "w-[116px] h-[116px] lg:w-[125px] lg:h-[125px] rounded-full bg-[#D100004D]",
  },
  {
    title: "Motivasiya",
    icon: "/heart.svg",
    desc: "Tələbələrimizi yalnız öyrənməyə deyil, həm də özlərinə inanmağa təşviq edirik.",
    figure:
      "w-[55px] h-[128px] lg:w-[59px] lg:h-[138px] rounded-full bg-[#31B5454D]",
  },
];

const Species = () => {
  return (
    <section className="px-7 pb-24">
      <Container className="flex flex-wrap justify-between items-center gap-16">
        {species.map((item, i) => (
          <SpeciesCard key={i} i={i} {...item} />
        ))}
      </Container>
    </section>
  );
};

export default Species;
