import React from "react";
import Container from "../../Container";
import ScheduleCard from "./ScheduleCard";
import Image from "next/image";

const schedules = [
  {
    title: "Səhər Növbəsi:",
    img: "https://i.pinimg.com/736x/5c/b6/56/5cb6564e46ded3cdd634ae9575de0d4a.jpg",
    time: "09:00 – 13:00",
    desc: "Fərdi və qrup dərsləri üçün rahat və motivasiyaedici mühit.",
  },
  {
    title: "Axşam Növbəsi:",
    img: "https://i.pinimg.com/736x/09/0d/7c/090d7c9582a73557d912ab5f579e163b.jpg",
    time: "18:00 – 22:00",
    desc: "İşləyən tələbələr üçün çevik cədvəl və online qoşulma imkanı.",
  },
  {
    title: "Həftəsonu",
    img: "https://i.pinimg.com/1200x/08/b3/1a/08b31af97bc7eaceda8829e56d8b9151.jpg",
    time: "10:00 - 18:00",
    desc: "Şənbə və Bazar günləri – layihə əsaslı təlimlər və masterklasslar.",
  },
];

const Schedule = () => {
  return (
    <section className="px-7 pb-24">
      <div className="flex justify-center items-center gap-3 mb-14 w-full">
        <Image
          className="w-10 h-10"
          src={"/schedule.svg"}
          width={40}
          height={40}
          alt="schedule"
        />
        <h6 className="text-2xl font-semibold md:text-3xl lg:text-4xl text-dark">
          Dərs Saatlarımız
        </h6>
      </div>
      <Container
        className={"flex flex-wrap justify-center lg:justify-between gap-6"}
      >
        {schedules.map((schedule, i) => (
          <ScheduleCard key={i} {...schedule} />
        ))}
      </Container>
    </section>
  );
};

export default Schedule;
