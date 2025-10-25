import React from "react";
import Container from "../../Container";
import SocialMediaCard from "./SocialMediaCard";

const socialMedias = [
  {
    title: "Bizi Instagramda izlə",
    desc: "dərslərdən, tədbirlərdən, təqaüd və təcrübə proqramlarından anlıq xəbərlər alın!",
    linkText: "Code World on  Instagram",
    href: "https://www.instagram.com/codeworld.az/",
    imgs: [
      "https://i.pinimg.com/736x/b0/54/a8/b054a8d395ccce6b2813b8e3725e2010.jpg",
      "https://i.pinimg.com/736x/c4/e6/5c/c4e65c9004bb851c647357400e024c8d.jpg",
    ],
    caption: "Hər gün bir az daha ilham üçün bizi izləyin 📷",
  },
  {
    title: "Bizimlə LinkedIn-də əlaqədə olun",
    desc: "karyera imkanları, seminarlar və texnoloji yeniliklər sizi gözləyir!",
    linkText: "Code World on  Linkedin",
    href: "https://www.linkedin.com/in/code-world-918921233/",
    imgs: [
      "https://i.pinimg.com/736x/72/f4/0c/72f40c0a830c4514d9604f64c42d3f4b.jpg",
      "https://i.pinimg.com/736x/78/94/58/789458f6e1cc4e5347c5f9de60799939.jpg",
    ],
    caption: "Yeni iş və təhsil fürsətləri üçün bizi LinkedIn-də izləyin 🚀",
  },
  {
    title: "Facebook səhifəmizi bəyənin və izləyin",
    desc: "xəbərlər, elanlar və təlim proqramları ilk sizə gəlsin!",
    linkText: "Code World on  Facebook",
    href: "",
    imgs: [
      "https://i.pinimg.com/736x/11/14/11/111411c21ad1ee49be0863b75e1f3bd7.jpg",
      "https://i.pinimg.com/736x/5d/18/49/5d18498ff0a065d1af7023be7919f489.jpg",
    ],
    caption: "Tədris icmamıza Facebook-da qoşulun 💬",
  },
];

const SocialMedia = () => {
  return (
    <section className="pb-24 px-7">
      <Container
        className={"flex flex-col justify-center items-center  gap-24"}
      >
        {socialMedias.map((item) => (
          <SocialMediaCard key={item.title} {...item} />
        ))}
      </Container>
    </section>
  );
};

export default SocialMedia;
