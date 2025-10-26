import React from "react";
import Container from "../../Container";
import Image from "next/image";
import OurMissionCard from "./OurMissionCard";

const missions = [
  {
    id: 0,
    img: "https://i.pinimg.com/736x/bd/6e/dc/bd6edc89ac36fc232512143c9a686223.jpg",
    desc: "Təhsili hər kəs üçün əlçatan etmək Real layihələr üzərində praktiki öyrənmə təmin etmək Gəncləri rəqəmsal dövrün tələblərinə uyğun hazırlamaq Qlobal düşünən yerli mütəxəssislər formalaşdırmaq",
  },
  {
    id: 1,
    img: "https://i.pinimg.com/736x/17/72/84/177284b07fded8ad7bce419fc514039e.jpg",
    desc: "Təhsili hər kəs üçün əlçatan etmək Real layihələr üzərində praktiki öyrənmə təmin etmək Gəncləri rəqəmsal dövrün tələblərinə uyğun hazırlamaq Qlobal düşünən yerli mütəxəssislər formalaşdırmaq",
  },
];

const OurMission = () => {
  return (
    <section className="px-7">
      <div className="flex justify-center items-center gap-3 mb-14">
        <Image
          className="w-10 h-10"
          src={"/target.svg"}
          width={40}
          height={40}
          alt="targer"
        />
        <h4 className="text-2xl md:text-4xl font-semibold max-w-[176px] sm:max-w-full text-dark">
          Missiyamız və Məqsədlərimiz
        </h4>
      </div>
      <Container
        className={
          "flex justify-center lg:justify-between items-center flex-wrap sm:gap-14 gap-y-25"
        }
      >
        {missions.map((mission) => (
          <OurMissionCard key={mission.id} {...mission} />
        ))}
      </Container>
    </section>
  );
};

export default OurMission;
