import React from "react";
import Section from "../Section";
import Container from "../Container";
import Slider from "@/components/Slider";
import ScholarshipCard from "./ScholarshipCard";
import Image from "next/image";

const scolarships = [
  {
    title: "Akademik Təqaüd",
    desc: "Yüksək nəticə göstərən və tədrisdə fəallığı ilə seçilən tələbələrə təqdim olunur.",
  },
  {
    title: "Sosial Dəstək Təqaüdü",
    desc: "Maddi imkanı məhdud olan, lakin öyrənmək həvəsi güclü olan tələbələr üçün nəzərdə tutulub.",
  },
  {
    title: "Erkən Qeydiyyat Endirimi",
    desc: "Semestr başlamazdan əvvəl qeydiyyatdan keçən tələbələr üçün xüsusi endirimlər tətbiq olunur.",
  },
  {
    title: "Qızlar üçün IT Dəstəyi Proqramı",
    desc: "Texnologiya və dizayn sahəsində təhsil alan xanım tələbələr üçün qismən təqaüd imkanı yaradır.",
  },
];

const ScholarshipsSection = () => {
  return (
    <Section title={"Təqaüdlər"} className={"!pt-0"}>
      <Container>
        <Image
          className="block mx-auto mb-1 w-[345] md:w-[683px]"
          src={"/long-line.png"}
          width={683}
          height={20}
          alt="line"
        />
        <Slider>
          <div className="flex gap-6 items-center justify-between">
            {scolarships.map((item, i) => (
              <ScholarshipCard key={i} {...item} />
            ))}
          </div>
        </Slider>
        <Image
          className="block mx-auto my-1 w-[345] md:w-[683px]"
          src={"/long-line.png"}
          width={683}
          height={20}
          alt="line"
        />
        <div className="w-full flex justify-end mt-1.5">
          <button className=" bg-secondary hover:bg-secondary/90 transition-all duration-150 ease-in px-11 sm:px-11 py-3.5 font-medium text-xl text-white rounded-tr-3xl rounded-bl-3xl cursor-pointer ">
            İndi müraciət et
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default ScholarshipsSection;
