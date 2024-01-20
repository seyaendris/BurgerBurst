import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      title: "Tango Burger",
      price: "$29",
    },
    {
      id: 2,
      title: "Punch Burger",
      price: "$25",
    },
    {
      id: 3,
      title: "Crunch Burger",
      price: "$20",
    },
    {
      id: 4,
      title: "Carnival Burger",
      price: "$42",
    },
    {
      id: 5,
      title: "Twist Burger",
      price: "$40",
    },
    {
      id: 6,
      title: "Burst Burger",
      price: "$45",
    },
  ];

  return (
    <div className="bg-tertiary">
      <div className="min-h-screen container flex flex-col justify-center py-4">
        {/* heading  */}
        <h1 className=" font-semibold text-4xl text-center text-secondary mt-5">
          Explore Menu
        </h1>

        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 pt-8">
          {menuData.map((item) => {
            return (
              <MenuCard key={item.id} title={item.title} price={item.price} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
