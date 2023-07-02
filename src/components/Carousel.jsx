import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1576424859482-370925390bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1676919128678-823d48a0f486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1625683536107-84a43f07d2e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const lenght = sliderData.length;
  console.log(lenght);

  const preSlide = () => {
    setSlide(slide === 0 ? lenght - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === lenght - 1 ? 0 : slide + 1);
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center ">
      <BsArrowLeftSquareFill
        onClick={preSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-[4%]"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-[4%]"
      />
      {sliderData.map((item, index) => (
        <div
          key={index}
          className={`${index === slide ? "opacity-100" : "opacity-0"}  `}
        >
          {index === slide && (
            <img className="w-full rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
