import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  const data = [
    {
      id: 1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam illo inventore tempore ut natus id aliquid voluptas quasi culpa, voluptates, nisi dolores voluptatem nam. Voluptatibus aperiam vitae consectetur maiores! Eos?",
      name: "Alex Thompson",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam delectus, perferendis officiis at fuga voluptate voluptatem soluta alias sit atque.",
      name: "Emily Rodriguez",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, blanditiis!",
      name: "Jordan Patel",
    },
    {
      id: 4,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam illo inventore tempore ut natus id aliquid voluptas quasi culpa, voluptates, nisi dolores voluptatem nam. Voluptatibus aperiam vitae consectetur maiores! Eos?",
      name: "Morgan Harper",
    },
    {
      id: 5,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam delectus, perferendis officiis at fuga voluptate voluptatem soluta alias sit atque.",
      name: "Jordan Morales",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="dark:bg-gray-900 dark:text-secondary">
      {/* heading  */}
      <h1 className="font-semibold text-4xl text-center text-secondary pt-24">
        Our Review
      </h1>

      {/* review card section  */}
      <div className=" py-10 mx-4 md:mx-0">
        <Slider {...settings}>
          {data.map((item) => (
            <ReviewCard key={item.id} name={item.name} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
