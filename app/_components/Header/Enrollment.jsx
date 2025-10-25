import Link from "next/link";
import React from "react";

const Enrollment = ({ open }) => {
  return (
    <Link
      href={"/enrollment"}
      className={`text-base font-medium lg:text-2xl py-2 px-4 lg:py-3 lg:px-5 flex justify-center items-center text-dark bg-accent rounded-2xl hover:bg-yellow-300 ${
        open ? "w-full" : ""
      }`}
    >
      Qeydiyyat
    </Link>
  );
};

export default Enrollment;
