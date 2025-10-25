import CoursesSection from "@/app/_components/CoursesSection";
import HeroSection from "@/app/_components/HeroSection";
import ScholarshipsSection from "@/app/_components/ScholarshipsSection";
import StudentReviewsSection from "@/app/_components/StudentReviewsSection";
import TeacherSection from "@/app/_components/TeachersSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <TeacherSection />
      <ScholarshipsSection />
      <StudentReviewsSection />
    </>
  );
};

export default HomePage;
