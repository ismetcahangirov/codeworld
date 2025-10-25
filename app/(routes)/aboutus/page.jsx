import Hero from "@/app/_components/AboutUs/Hero";
import OurHistory from "@/app/_components/AboutUs/OurHistory";
import OurMission from "@/app/_components/AboutUs/OurMission";
import OurTeam from "@/app/_components/AboutUs/OurTeam";
import Schedule from "@/app/_components/AboutUs/Schedule";
import Species from "@/app/_components/AboutUs/Species";
import WhoWeAre from "@/app/_components/AboutUs/WhoWeAre";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurMission />
      <OurTeam />
      <OurHistory />
      <Schedule />
      <Species />
    </>
  );
};

export default AboutUsPage;
