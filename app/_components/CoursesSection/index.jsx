import React from "react";
import Section from "../Section";
import Container from "../Container";
import Link from "next/link";
import CoursesCard from "./CoursesCard";

export const courses = [
  {
    name: "Qrafik Dizayn",
    icon: "/courses_icons/graphic-design.svg",
    content: "Adobe Photoshop/ Illustrator",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    href: "/graphic-design",
  },
  {
    name: "UX/UI Dizayn",
    icon: "/courses_icons/ui-ux.svg",
    content: "Adobe Photoshop/ Illustrator",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    href: "/ux-ui-design",
  },
  {
    name: "Frontend",
    icon: "/courses_icons/frontend.svg",
    content: "Adobe Photoshop/ Illustrator",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    href: "/frontend",
  },
  {
    name: "Backend",
    icon: "/courses_icons/backend.svg",
    content: "Adobe Photoshop/ Illustrator",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    href: "/backend",
  },
  {
    name: "Data Analitika",
    icon: "/courses_icons/data.svg",
    content: "Adobe Photoshop/ Illustrator",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    href: "/data-analytics",
  },
  {
    name: "QA",
    icon: "/courses_icons/qa.svg",
    content: "Adobe Photoshop/ Illustrator",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing ",
    href: "/qa",
  },
];

const CoursesSection = () => {
  return (
    <Section title={"Kurslarımız"}>
      <Container
        className={
          "flex justify-center md:justify-between items-center flex-wrap gap-6"
        }
      >
        {courses.map((course) => {
          return (
            <CoursesCard
              key={course.name}
              href={course.href}
              name={course.name}
              icon={course.icon}
              content={course.content}
              desc={course.desc}
            />
          );
        })}
      </Container>
    </Section>
  );
};

export default CoursesSection;
