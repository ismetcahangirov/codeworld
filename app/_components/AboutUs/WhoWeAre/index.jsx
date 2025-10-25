import Image from "next/image";
import React from "react";
import Container from "../../Container";

const WhoWeAre = () => {
  return (
    <section className="py-24 lg:py-28 px-7">
      <Container className="flex flex-col gap-12 justify-center md:justify-between md:flex-row">
        <article>
          <div className="flex items-center gap-x-3 mb-3">
            <div>
              <Image
                className="w-4 md:w-7 h-6 lg:h-9"
                src={"/pin.svg"}
                width={27}
                height={37}
                alt="pin"
              />
            </div>
            <h4 className="text-dark font-semibold text-3xl lg:text-4xl ">
              Biz Kimik?
            </h4>
          </div>
          <p className="font-open-sans text-sm lg:text-xl max-w-[600px]">
            Academy — gənclərin və mütəxəssislərin gələcəyə doğru addım
            atdıqları bir təhsil mərkəzidir. Burada biz yalnız dərs keçmirik,
            biz bilik, yaradıcılıq və inam mühitini formalaşdırırıq. Təhsil
            mərkəzimiz proqramlaşdırma, dizayn və şəbəkə kimi müasir texnoloji
            istiqamətlərdə praktiki bacarıqlar qazandırmaq məqsədi ilə
            yaradılmışdır. Biz inanırıq ki, hər bir tələbə doğru istiqamət,
            düzgün təlim və motivasiya ilə öz potensialını kəşf edə bilər.
          </p>
        </article>
        <div
          style={{ boxShadow: "-10px -10px 17px #D1B200" }}
          className="w-full  sm:w-[315px] h-[242px] lg:w-[391px]  lg:h-[301px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden"
        >
          <Image
            className="w-full h-full object-cover"
            width={391}
            height={301}
            src={"/aboutUs/teacher.jpg"}
            alt="teacher"
          />
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
