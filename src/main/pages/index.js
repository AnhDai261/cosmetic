import React from "react";
import Carousel from "../component/Carousel";
import { images } from "../data/data";

const Index = () => {
  return (
    <div>
      <div
        className="bg-fixed bg-contain overflow-auto  "
        style={{
          backgroundImage: `url(${images.background1})`,
        }}
      >
        <Carousel />
        {/* <div className="text-center bg-white">
          <h1>Title</h1>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
        </div> */}
        {/* <div className="text-center bg-white mt-40">
          <h1>Title</h1>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
          <p>Now plays</p>
        </div> */}
      </div>
    </div>
  );
};

export default Index;
