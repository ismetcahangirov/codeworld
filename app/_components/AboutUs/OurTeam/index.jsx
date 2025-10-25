import React from "react";
import Container from "../../Container";
import Slider from "@/components/Slider";
import OurTeamCard from "./OurTeamCard";

const teamMembers = [
  {
    name: "Aytən Əliyeva",
    img: "https://i.pinimg.com/736x/0a/92/2c/0a922c74df052bcca0dc53148dfd3679.jpg",
    major: "Frontend Developer və Təlimçi",
    text: "“İnkişafın başlanğıcı öyrənməyə olan sevgidən keçir.”",
  },
  {
    name: "Elvin Məmmədov",
    img: "https://i.pinimg.com/736x/7e/8a/d4/7e8ad4ec06ece7731aa173b959645737.jpg",
    major: "UI/UX Dizayner",
    text: "“Yaxşı dizayn sadəcə görünüş deyil, hiss yaşadır.”",
  },
  {
    name: "Nigar Hüseynova",
    img: "https://i.pinimg.com/736x/b1/f4/5f/b1f45fb24cfa1fe6b85bc5a289eaef07.jpg",
    major: "Backend Developer",
    text: "“Müəyyənlik axtarma, sistem qur və onu inkişaf etdir.”",
  },
  {
    name: "Murad Cəfərli",
    img: "https://i.pinimg.com/736x/cb/e2/1b/cbe21bf3504d9211db6f12de54209e39.jpg",
    major: "Fullstack Developer",
    text: "“Kod yazmaq sənət deyil, düşüncə tərzidir.”",
  },
  {
    name: "Zeynəb Rzayeva",
    img: "https://i.pinimg.com/1200x/18/68/c7/1868c7c6c7ba3de2a477490491a17d9b.jpg",
    major: "Digital Marketinq Mütəxəssisi",
    text: "“Brend olmaq üçün ilk addım — fərqlənməkdir.”",
  },
];

const OurTeam = () => {
  return (
    <section className="pt-24 pb-10 px-7">
      <Container
        className={
          "flex flex-row items-center flex-wrap lg:flex-nowrap lg:flex-row-reverse justify-between gap-16 "
        }
      >
        <article className="text-dark lg:max-w-96">
          <h6 className="text-2xl font-medium md:font-semibold md:text-3xl lg:text-4xl w-full mb-3">
            Komandamızla Tanış Olun
          </h6>
          <p className="text-sm md:text-base lg:text-xl font-open-sans w-full">
            Bizim komandamız texnologiyanı sevən, tədrisə ruhunu qatan
            mütəxəssislərdən ibarətdir. Hər bir təlimçi öz sahəsində
            ixtisaslaşmış və illərlə təcrübəyə malikdir.
          </p>
        </article>
        <Slider className={"items-center w-full"}>
          {teamMembers.map((item) => (
            <OurTeamCard key={item.name} {...item} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default OurTeam;
