import React from "react";

const ContactCard = ({ name, text }) => {
  const isNameField = name.toLowerCase().trim() === "telefon:";

  return (
    <div className="w-full h-[120px] sm:w-[231px] lg:w-[366px] py-2.5 px-5 flex flex-col justify-between bg-accent rounded-tr-[30px] rounded-bl-[30px] text-dark">
      <h5 className="font-semibold text-3xl lg:text-4xl">{name}</h5>
      <p
        className={`font-open-sans max-w-[101px] lg:max-w-full text-base lg:text-xl ${
          isNameField ? "break-words" : "whitespace-nowrap"
        }`}
        style={{ wordSpacing: isNameField ? "1.5rem" : "0" }} // spacing yalnız name üçün
      >
        {text}
      </p>
    </div>
  );
};

export default ContactCard;
