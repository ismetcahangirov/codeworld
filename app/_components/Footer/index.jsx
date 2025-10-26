import React from "react";
import Container from "../Container";
import { courses } from "../CoursesSection";
import Logo from "@/components/Logo";
import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    name: "linkedIn",
    icon: "https://i.pinimg.com/736x/b0/28/c2/b028c2e59043116dfc0da6ec6fd26d70.jpg",
    href: "https://www.linkedin.com/in/code-world-918921233/",
  },
  {
    name: "instagram",
    icon: "https://i.pinimg.com/736x/3c/0b/52/3c0b5296e29c391d50a7580b3e949a34.jpg",
    href: "https://www.instagram.com/codeworld.az/",
  },
  {
    name: "facebook",
    icon: "https://i.pinimg.com/736x/b5/9d/15/b59d15f1d09ebd9882cad4a448688aac.jpg",
    href: "/",
  },
];

const Footer = () => {
  const majors = courses;
  return (
    <footer className="bg-dark h-max">
      <Container
        className={
          "flex flex-wrap justify-between items-center gap-y-16 px-7 py-9 "
        }
      >
        <div className="flex flex-col justify-between  gap-y-7">
          <Logo fontSize={"text-5xl"} white width={"!w-36px !h-36px"} />
          <div className="text-white flex gap-x-4 gap-y-2 flex-wrap w-full sm:w-[306px] h-max ">
            <h6 className="text-2xl font-medium w-full">İxtisaslar</h6>
            {majors.map((major, i) => (
              <Link
                target="_blank"
                key={i}
                className="text-base md:text-xl font-open-sans hover:text-sky active:bg-transparent transition-all duration-100 ease-in"
                href={major.href}
              >
                {major.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between w-[180px] h-[182px]">
          <div className="flex gap-7 items-center">
            {socials.map((social) => (
              <Link key={social.name} href={social.href} target="_blank">
                <Image
                  src={social.icon}
                  width={40}
                  height={40}
                  alt={social.name}
                  className="w-10 h-10"
                />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-y-2 text-white">
            <h6 className="text-2xl font-medium w-full">Digər</h6>
            <Link
              className="text-base md:text-xl font-open-sans hover:text-sky active:bg-transparent transition-all duration-100 ease-in"
              href="/privacy"
            >
              Məxfilik
            </Link>
            <Link
              className="text-base md:text-xl font-open-sans hover:text-sky active:bg-transparent transition-all duration-100 ease-in"
              href="/contact"
            >
              Bizimlə əlaqə
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
