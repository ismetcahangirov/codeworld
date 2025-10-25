import React from "react";

const ReviewCard = ({ name, text, bgColor }) => {
  return (
    <div
      className={`${bgColor} w-full md:w-[210px] h-full p-4 text-dark space-y-5 flex-shrink-0`}
    >
      <h5 className="font-semibold text-left text-3xl ">{name}</h5>
      <p className="text-sm font-normal font-open-sans text-left w-full ">
        {text}
      </p>
    </div>
  );
};

export default ReviewCard;
