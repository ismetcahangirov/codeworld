"use client";

import React, { useRef, useState } from "react";
import Section from "../Section";
import TeachersSlideCard from "./TeachersSlideCard";
import Container from "../Container";
import Slider from "@/components/Slider";

const teachers = [
  {
    name: "James Bond",
    major: "Qrafik Dizayner",
    img: "https://i.pinimg.com/736x/f6/86/29/f6862910fe93aa569084b6950e79c8c8.jpg",
  },
  {
    name: "Katniss Everdeen",
    major: "Qrafik Dizayner",
    img: "https://i.pinimg.com/1200x/7f/68/ef/7f68efea8bcc0901a031e8fa57100dc1.jpg",
  },
  {
    name: "Jack Sparrow",
    major: "Qrafik Dizayner",
    img: "https://i.pinimg.com/736x/aa/5a/7e/aa5a7e97edb102cebe6f07a10826a4e3.jpg",
  },
  {
    name: "Leonardo DiCaprio",
    major: "Frontend Developer",
    img: "https://i.pinimg.com/1200x/99/cc/83/99cc834f75e5db68289dcb3f9ba75f68.jpg",
  },
  {
    name: "Bob Odenkirk",
    major: "Backend Developer",
    img: "https://i.pinimg.com/1200x/ba/d5/28/bad5287732f73e76921b30c4f2db78e3.jpg",
  },
  {
    name: "Rowan Atkinson",
    major: "Frontend Developer",
    img: "https://i.pinimg.com/736x/ab/d8/11/abd81108a3fab171a26006a118d2f26d.jpg",
  },
];

const TeacherSection = () => {
  return (
    <Section title="Müəllimlərimiz" className="!pt-0 sm:px-14">
      <Container>
        <Slider>
          {teachers.map((teacher, i) => (
            <div key={i} className="flex gap-6 w-full">
              <TeachersSlideCard {...teacher} />
            </div>
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default TeacherSection;
