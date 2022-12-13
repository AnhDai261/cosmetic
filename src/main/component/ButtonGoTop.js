import React from "react";
import { FiChevronUp } from "react-icons/fi";

const ButtonGoTop = () => {
  return (
    <div className="fixed opacity-50 bottom-4 right-2">
      <button className="bg-rose-400 p-2 rounded-full">
        <a href="#">
          <FiChevronUp className="text-white text-2xl" />
        </a>
      </button>
    </div>
  );
};

export default ButtonGoTop;
