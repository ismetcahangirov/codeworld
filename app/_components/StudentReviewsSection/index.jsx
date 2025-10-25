import React from "react";
import Section from "../Section";
import Container from "../Container";
import Slider from "@/components/Slider";
import ReviewCard from "./ReviewCard";
import Image from "next/image";

const reviews = [
  {
    name: "Alice Johnson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Bob Smith",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Carol White",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "David Brown",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Eva Green",
    text: "Lorem ipsum dolor sit amet.",
  },
];

const StudentReviewsSection = () => {
  return (
    <Section title={"Tələbələrimizin rəyləri"} className={"!pt-0"}>
      <Container
        className={
          "flex justify-center md:justify-between  items-center w-full gap-9 flex-wrap"
        }
      >
        <div className="mx-auto md:m-0 w-[235px] h-[310px] md:w-[290px] md:h-[351px] overflow-hidden rounded-tr-[30%] rounded-bl-[30%] shadow-lg shadow-black">
          <Image
            className=" w-full h-full object-cover group-hover:scale-120 transition-all duration-200 ease-in-out"
            draggable={false}
            src={
              "https://i.pinimg.com/1200x/f2/d0/44/f2d044a8083a4a87129e19647b869d73.jpg"
            }
            alt={"student"}
            width={330}
            height={357}
          />
        </div>
        <div className="p-5 w-full  md:w-[450px] lg:w-[923px] h-full bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-lg">
          <Slider className={"items-center box-content"}>
            {reviews.map((review, i) => {
              return (
                <ReviewCard
                  key={i}
                  bgColor={i === 0 ? "bg-secondary/60" : "bg-dark/30"}
                  name={review.name}
                  text={review.text}
                />
              );
            })}
          </Slider>
        </div>
      </Container>
    </Section>
  );
};

export default StudentReviewsSection;
