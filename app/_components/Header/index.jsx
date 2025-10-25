"use client";

import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className={`sticky z-50 top-0 w-full py-3 px-5 ${
        pathname === "/privacy" ? "bg-dark/40" : "bg-secondary/20"
      }`}
    >
      <Navbar />
    </header>
  );
};

export default Header;
