import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { carousel } from "../data/data";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(carousel.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(carousel.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === carousel.length - 1) {
      setActiveSlide(1);
    } else if (index < carousel.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(carousel.length - 1);
    }
  };

  return (
    <div className="">
      {carousel.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? "flex justify-between items-center"
                : "hidden"
            }
          >
            <button
              className="text-6xl border-2 transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300"
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft className="text-white" />
            </button>
            <div className=" w-full h-[500px]">
              <img
                src={item}
                alt="landscape"
                className=" bg-no-repeat bg-cover w-full h-full px-6 "
              />
            </div>
            <button
              className="text-6xl border-2 transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300"
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight className="text-white" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
