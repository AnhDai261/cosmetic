import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { images } from "../data/data";
import Cart from "./Cart";
import SupportHeader from "./SupportHeader";

const Header = () => {
  const [state, setState] = useState(null);
  const [open, setOpen] = useState(false);

  const [cartNumber, setCartNumber] = useState(0);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("currentUser"));
    if (items) {
      setState(items);
    }
  }, []);
  const toggleCart = () => {
    // axios
    //   .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllItem`)
    //   .then((res) => {
    //     let data = res.data.data;
    //     setProduct(data);
    //     setUpdate(null);
    //   });

    setOpen(!open);
  };

  let getData = JSON.parse(localStorage.getItem("product"));
  useEffect(() => {
    if (getData) {
      setCartNumber(getData.length);
    }
  }, [getData]);

  const logoutUser = async () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: null,
        fullName: null,
      })
    );
    const items = JSON.parse(localStorage.getItem("currentUser"));
    if (items) {
      setState(items);
    }
  };

  const handleOpenCart = () => {
    setOpen(true);
  };

  return (
    <div>
      {open ? (
        <>
          <Cart open={open} toggleCart={() => toggleCart()} />
        </>
      ) : null}
      <header className="fixed top-0 left-0 z-20 w-full shadow dark:bg-gray-800 dark:border-gray-600">
        <nav class="bg-rose-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="py-4 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link
              to="/"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <img src={images.logo} className="h-10 w-14 " alt="Logo" />
              <span className="self-center whitespace-nowrap uppercase">
                Cosmetic
              </span>
            </Link>
            <div class="flex items-center lg:order-2">
              <Link
                onClick={() => handleOpenCart()}
                class="lg:p-2 hover:text-rose-500 rounded-lg relative"
              >
                <FiShoppingBag className="text-xl lg:text-3xl" />
                {cartNumber === 0 ? null : (
                  <div className="inline-flex absolute top-0 right-0 justify-center items-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                    {cartNumber}
                  </div>
                )}
              </Link>
              {/* SignIn SignUP  */}
              {state && state.email !== null ? (
                <>
                  <p>
                    Xin chào{" "}
                    <span className="text-rose-500 font-medium">
                      {" "}
                      {`${state.fullName}`}
                    </span>{" "}
                  </p>
                  <h2
                    className="cursor-pointer bg-rose-400 text-base text-white rounded-2xl ml-4 py-2 px-6 hover:bg-rose-600"
                    onClick={() => logoutUser()}
                  >
                    Đăng xuất
                  </h2>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    class="text-gray-800 dark:text-white hover:bg-rose-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    class="text-white bg-rose-500 hover:bg-rose-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-rose-500 dark:hover:bg-rose-600 focus:outline-none dark:focus:ring-rose-600"
                  >
                    Sign Up?
                  </Link>
                </>
              )}

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    defaultChecked="false"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-rose-100 hover:bg-rose-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-400 lg:p-0 dark:text-rose-200 lg:dark:hover:text-rose-200 dark:hover:bg-rose-700 dark:hover:text-rose-50 lg:dark:hover:bg-transparent dark:border-rose-600"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-rose-100 hover:bg-rose-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-400 lg:p-0 dark:text-rose-200 lg:dark:hover:text-rose-200 dark:hover:bg-rose-700 dark:hover:text-rose-50 lg:dark:hover:bg-transparent dark:border-rose-600"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-rose-100 hover:bg-rose-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-400 lg:p-0 dark:text-rose-200 lg:dark:hover:text-rose-200 dark:hover:bg-rose-700 dark:hover:text-rose-50 lg:dark:hover:bg-transparent dark:border-rose-600"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-rose-100 hover:bg-rose-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-400 lg:p-0 dark:text-rose-200 lg:dark:hover:text-rose-200 dark:hover:bg-rose-700 dark:hover:text-rose-50 lg:dark:hover:bg-transparent dark:border-rose-600"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <header>
        <nav class="bg-rose-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div class="py-4 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="text-xl font-bold flex items-center">
              <img src={images.logo} className="h-10 w-14 " alt="Logo" />
              <span className="self-center whitespace-nowrap uppercase">
                Cosmetic
              </span>
            </Link>
            <div class="flex items-center lg:order-2">
              <Link
                to="/cart"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-rose-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-rose-500 dark:hover:text-rose lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                <FiShoppingBag className="text-3xl" />
              </Link>
              <Link
                to="/signin"
                class="text-gray-800 dark:text-white hover:bg-rose-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Sign Up
              </Link>
              <Link
                to="/signup"
                class="text-white bg-rose-400 hover:bg-rose-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-rose-400 dark:hover:bg-rose-600 focus:outline-none dark:focus:ring-rose-600"
              >
                Sign In
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    class="block py-2 pr-4 pl-3 text-gray-700 rounded bg-rose-700 lg:bg-transparent lg:text-rose-700 lg:p-0 dark:text-rose-50"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-rose-100 hover:bg-rose-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-400 lg:p-0 dark:text-rose-200 lg:dark:hover:text-rose-200 dark:hover:bg-rose-700 dark:hover:text-rose-50 lg:dark:hover:bg-transparent dark:border-rose-600"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-rose-100 hover:bg-rose-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-400 lg:p-0 dark:text-rose-200 lg:dark:hover:text-rose-200 dark:hover:bg-rose-700 dark:hover:text-rose-50 lg:dark:hover:bg-transparent dark:border-rose-600"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-rose-100 hover:bg-rose-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-rose-400 lg:p-0 dark:text-rose-200 lg:dark:hover:text-rose-200 dark:hover:bg-rose-700 dark:hover:text-rose-50 lg:dark:hover:bg-transparent dark:border-rose-600"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <SupportHeader />
    </div>
  );
};

export default Header;
