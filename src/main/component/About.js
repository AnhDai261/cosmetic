import React from "react";
import { images } from "../data/data";

const About = () => {
  return (
    <>
      {/* Background Effect 1 */}
      <div>
        <div className="justify-center flex ">
          <div
            className="bg-fixed bg-contain overflow-auto w-full "
            style={{
              backgroundImage: `url(${images.background5})`,
            }}
          >
            <div className="my-40 text-center uppercase">
              <h1 className="text-8xl text-pink-600 font-extrabold">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Liam
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effect 2 */}
      <div>
        <div
          className="bg-fixed justify-center bg-contain overflow-auto w-full"
          style={{
            backgroundImage: `url(${images.background4})`,
          }}
        >
          <div className="flex justify-between">
            {/* title  */}
            <div className="my-40 text-center uppercase w-1/2">
              <h1 className="text-8xl text-pink-600 font-extrabold">
                our story
              </h1>
            </div>

            {/* story  */}
            <div className="bg-rose-50 text-center w-1/2 ">
              <div className=" pt-12">
                <div className="w-full block">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                    Our Story
                  </h1>
                  <p className="font-normal text-base leading-6 text-gray-600 ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum.In the first
                    place we have granted to God, and by this our present
                    charter confirmed for us and our heirs forever that the
                    English Church shall be free, and shall have her rights
                    entire, and her liberties inviolate; and we will that it be
                    thus observed; which is apparent from
                  </p>
                </div>
                <div className="w-full ">
                  <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img
                        className="md:block hidden"
                        src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                        alt="Alexa featured Img"
                      />
                      <img
                        className="md:hidden block"
                        src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                        alt="Alexa featured Img"
                      />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                        Alexa
                      </p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img
                        className="md:block hidden"
                        src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                        alt="Olivia featured Img"
                      />
                      <img
                        className="md:hidden block"
                        src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                        alt="Olivia featured Img"
                      />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                        Olivia
                      </p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img
                        className="md:block hidden"
                        src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                        alt="Liam featued Img"
                      />
                      <img
                        className="md:hidden block"
                        src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                        alt="Liam featued Img"
                      />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                        Liam
                      </p>
                    </div>
                    <div className="p-4 pb-6 flex justify-center flex-col items-center">
                      <img
                        className="md:block hidden"
                        src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                        alt="Elijah featured img"
                      />
                      <img
                        className="md:hidden block"
                        src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                        alt="Elijah featured img"
                      />
                      <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                        Elijah
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
