import Image from "next/image";
import React from "react";
import Container from "../../Container";

const OurHistory = () => {
  return (
    <section className="pb-24 px-7">
      <div className="flex justify-center items-center gap-3 mb-14 w-full">
        <Image
          className="w-10 h-10"
          src={"/time.svg"}
          width={40}
          height={40}
          alt="targer"
        />
        <h4 className="text-2xl md:text-4xl font-semibold  text-dark">
          Tarixçəmiz - Bizim Yolumuz
        </h4>
      </div>
      <Container className={"h-max flex justify-center items-center"}>
        <Image
          src={"/aboutUs/history/history-lg.png"}
          width={1280}
          height={480}
          alt="history"
          className="hidden lg:inline object-contain"
        />
        <Image
          src={"/aboutUs/history/history-md.png"}
          width={547}
          height={1328}
          alt="history"
          className="hidden md:inline lg:hidden object-contain"
        />
        <Image
          src={"/aboutUs/history/history.png"}
          width={547}
          height={1328}
          alt="history"
          className="inline md:hidden object-contain"
        />
      </Container>
    </section>
  );
};

export default OurHistory;
