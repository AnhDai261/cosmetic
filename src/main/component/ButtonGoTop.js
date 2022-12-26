import React from "react";
import { FiChevronUp } from "react-icons/fi";

const ButtonGoTop = () => {
  const crollToTop = () => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  };
  return (
    <div className="fixed opacity-50 bottom-4 right-2">
      <button
        className="animate-bounce right-4 bottom-0 p-2 lg:p-3 scroll-auto fixed rounded-full bg-rose-400"
        onClick={() => crollToTop()}
      >
        <FiChevronUp className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default ButtonGoTop;
