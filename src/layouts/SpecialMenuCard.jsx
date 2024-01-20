import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const SpecialMenuCard = ({ img, title, price }) => {
  return (
    <div className=" w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-tertiary cursor-pointer">
      <img className=" rounded-xl" src={img} alt="img" />
      <div className=" space-y-4 py-5">
        <h3 className="font-semibold text-2xl text-primary text-center">
          {title}
        </h3>
        <div className=" flex flex-row justify-center text-secondary">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-2xl text-secondary">{price}</h3>
          <button className="bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenuCard;
