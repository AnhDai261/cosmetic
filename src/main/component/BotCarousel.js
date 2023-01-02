import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { botcarousel } from "../data/data";
import axios from "axios";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function BotCarousel() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllItem`)
      .then((res) => {
        let data = res.data.data;
        setProduct(data);
      });
  }, []);
  console.log("check product: ", product);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={product.length}
          visibleSlides={product.length / 2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="text-4xl border-2 transition ease-in-out delay-150 bg-rose-500 hover:scale-110 hover:bg-orange-400 duration-300 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-rose-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 cursor-pointer"
              id="prev"
            >
              <FiChevronLeft className="text-white" />
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {product.map((item, index) => {
                    return (
                      <Slide key={index} index={item.index}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={item.image}
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              {item.Brand.name}
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                {item.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="text-4xl border-2 transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-rose-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              id="next"
            >
              <FiChevronRight className="text-white" />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={product.length}
          visibleSlides={product.length / 2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="text-4xl border-2 transition ease-in-out delay-150 bg-rose-500 hover:scale-110 hover:bg-orange-400 duration-300 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-rose-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 cursor-pointer"
              id="prev"
            >
              <FiChevronLeft className="text-white" />
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  {product.map((item, index) => {
                    return (
                      <Slide key={index} index={item.index}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={item.image}
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                              {item.Brand.name}
                            </h2>
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                {item.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    );
                  })}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="text-4xl border-2 transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-rose-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
              id="next"
            >
              <FiChevronRight className="text-white" />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={product.length}
          visibleSlides={product.length / 4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            {/* <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack> */}
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="text-4xl border-2 transition ease-in-out delay-150 bg-rose-500 hover:scale-110 hover:bg-orange-400 duration-300 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-rose-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 cursor-pointer"
                id="prev"
              >
                <FiChevronLeft className="text-white" />
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    {product.map((item, index) => {
                      return (
                        <Slide key={index} index={item.index}>
                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                            <img
                              src={item.image}
                              alt="black chair and white table"
                              className="object-cover object-center w-full"
                            />
                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                              <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                {item.Brand.name}
                              </h2>
                              <div className="flex h-full items-end pb-6">
                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                  {item.name}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </Slide>
                      );
                    })}
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="text-4xl border-2 transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-rose-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
                id="next"
              >
                <FiChevronRight className="text-white" />
              </ButtonNext>
            </div>
            {/* <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext> */}
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
