import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { images } from "../data/skin";

function SignInAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/loginAdmin`, {
          email,
          password,
        })
        .then((res) => {
          console.log("check data submit", res);

          if (res.data.errCode === 0) {
            toast.success(res.data.errMessage);

            localStorage.setItem(
              "currentAdmin",
              JSON.stringify({
                email: res.data.data.email,
                fullName: res.data.data.fullName,
              })
            );

            navigate("/dashboard");
          } else {
            setLoading(false);
            toast.error(res.data.errMessage);
          }
        });
    }, 2000);
  };

  return (
    <div className="h-full bg-gradient-to-tl from-pink-500 to-rose-400 w-full lg:pb-56 pb-32 px-4">
      <div className="flex flex-col items-center justify-center">
        <Link>
          <img className="w-32 " src={images.logo} />
          <h1 className="uppercase text-3xl text-white font-medium">
            Cosmetic
          </h1>
        </Link>

        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-4">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className=" text-2xl py-7 text-center font-extrabold leading-6 text-gray-800"
          >
            Login For Manager
          </p>
          {/* <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <Link to="/signup">
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                {" "}
                Sign up here
              </span>
            </Link>
          </p> */}

          {/* <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div> */}
          <div>
            <lable className="text-sm font-medium leading-none text-gray-800">
              Email
            </lable>
            <input
              aria-label="enter email adress"
              role="input"
              onChange={(e) => handleEmail(e)}
              type="email"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <lable className="text-sm font-medium leading-none text-gray-800">
              Password
            </lable>
            <div className="relative flex items-center justify-center">
              <input
                aria-label="enter Password"
                role="input"
                onChange={(e) => handlePass(e)}
                type="password"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                    fill="#71717A"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              role="button"
              aria-label="create my account"
              onClick={(e) => handleSignIn(e)}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {/*                                                   */}
              <span className="absolute inset-y-0 flex left-0 items-center pl-3  ">
                {Loading === true ? (
                  <>
                    {" "}
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 group-hover:text-indigo-400mr-2  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </>
                ) : (
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                )}
              </span>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInAdmin;
