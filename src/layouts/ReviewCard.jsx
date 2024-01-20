import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const ReviewCard = ({ id, name, desc }) => {
  return (
    <div
      className=" w-full md:w-2/4 text-center mx-auto space-y-3 bg-tertiary p-5 rounded-lg mb-3 cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      key={id}
    >
      <RiDoubleQuotesL size={65} className=" mx-auto text-primary" />
      <p>{desc}</p>
      <h2 className=" font-semibold text-2xl">{name}</h2>
    </div>
  );
};

export default ReviewCard;
