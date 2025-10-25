"use client";

import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Enrollment from "./Enrollment";
import Image from "next/image";
import { X } from "lucide-react";

const links = [
  {
    name: "Haqqımızda",
    href: "/aboutus",
  },
  {
    name: "İxtisaslar",
    href: "/majors",
  },
  {
    name: "Təqaüdlər",
    href: "/scholarships",
  },
  {
    name: "Əlaqə",
    href: "/contact",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <nav className="relative flex items-center justify-between md:hidden">
        <Logo />
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer hover:bg-secondary/20 p-2 active:bg-transparent transition-all duration-100 ease-in rounded"
        >
          {openMenu ? (
            <X className="w-[30px] h-[19px]" />
          ) : (
            <Image
              src={"/menu_icon.png"}
              alt="menu_icon"
              width={50}
              height={50}
              className="w-[30px] h-[19px]"
            />
          )}
        </div>

        <div
          className={`${
            openMenu
              ? "absolute w-full left-0  top-full mt-4 p-3 bg-gray-200 flex flex-col justify-center items-center gap-1 rounded"
              : "hidden"
          }`}
        >
          {links.map((link) => (
            <Link
              onClick={() => setOpenMenu(false)}
              key={link.name}
              href={link.href}
              className={`capitalize text-base w-full py-2 px-4 lg:py-3  flex justify-center items-center  text-dark hover:text-white bg-transparent hover:bg-secondary/50 active:bg-transparent active:text-dark rounded-tr-3xl rounded-bl-3xl font-medium transition-all duration-150 ease-in ${
                pathname === link.href ? "bg-secondary" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Enrollment open={openMenu} />
        </div>
      </nav>

      <nav className="hidden max-w-[1440px] mx-auto md:flex justify-between items-center">
        <Logo />
        <div className="flex justify-center gap-1">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`capitalize text-base lg:text-xl xl:text-2xl py-2 px-4 lg:py-3 lg:px-5 flex justify-center items-center text-dark hover:text-white bg-transparent hover:bg-secondary/50 active:bg-transparent active:text-dark rounded-tr-3xl rounded-bl-3xl font-medium transition-all duration-150 ease-in ${
                pathname == link.href ? "!bg-secondary !text-white" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Enrollment />
      </nav>
    </>
  );
};

export default Navbar;
