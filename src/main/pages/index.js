import React from "react";
import Carousel from "../component/Carousel";
import { brandcards, images } from "../data/data";

const Index = () => {
  return (
    <div>
      {/* Carousel */}
      <Carousel />
      {/* Background Effect */}
      <div className="justify-center flex ">
        <div
          className="bg-fixed bg-contain overflow-auto w-full "
          style={{
            backgroundImage: `url(${images.background3})`,
          }}
        >
          <div className="my-40 float-right">
            <div
              className="bg-pink-700 text-center w-96 h-80 "
              style={{ textAlign: "-webkit-center" }}
            >
              <h1 className="uppercase text-white max-w-full py-10 h-2/4 w-3/5 text-3xl">
                makeup products
              </h1>
              <button className="uppercase bg-rose-300 py-3 px-10 max-w-full ">
                shop now
              </button>
            </div>
          </div>
        </div>
        <div
          className="bg-fixed bg-contain overflow-auto w-full "
          style={{
            backgroundImage: `url(${images.background1})`,
          }}
        >
          <div className="my-40 float-left">
            <div
              className="bg-rose-400 text-center w-96 h-80"
              style={{ textAlign: "-webkit-center" }}
            >
              <h1 className="uppercase text-black max-w-full py-10 h-2/4 w-3/5 text-3xl">
                skincare products
              </h1>
              <button className="uppercase text-white bg-pink-700 py-3 px-10 max-w-full ">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BrandCard  */}
      <div className="bg-rose-50 grid grid-cols-12 ">
        {brandcards.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white h-80 mx-10 my-6 text-center col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3"
            >
              <div className="py-10">
                <span
                  className="text-6xl"
                  style={{ textAlign: "-webkit-center" }}
                >
                  {item.icon}
                </span>
              </div>
              <div className="py-5 text-2xl md:text-lg">
                <h1 className="text-stone-600">{item.title}</h1>
              </div>
              <div className="py-5">
                <button className="bg-orange-300 text-2xl md:text-lg rounded py-3 px-10 text-white">
                  {item.buttonName}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content  */}
      <div>
        <img src={images.middlebanner} />
      </div>
      <div className="bg-rose-50 h-10"></div>
    </div>
  );
};

export default Index;
