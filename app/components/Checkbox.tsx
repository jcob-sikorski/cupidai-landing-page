"use client";

import React from "react";

interface Props {
  onClick: () => void;
  active: boolean;
}

const Checkbox = ({ onClick, active }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`w-4 h-4 flex items-center justify-center rounded-[4px] cursor-pointer ${
        active
          ? "gradient_container"
          : "bg-gray border-[1px] border-white border-opacity-20 hover:bg-lgray"
      }`}
    >
      {active && (
        <>
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0.265137C8.72 0.265137 8.47 0.375137 8.29 0.555137L4 4.85514L1.71 2.55514C1.53 2.37514 1.28 2.26514 1 2.26514C0.45 2.26514 0 2.71514 0 3.26514C0 3.54514 0.11 3.79514 0.29 3.97514L3.29 6.97514C3.47 7.15514 3.72 7.26514 4 7.26514C4.28 7.26514 4.53 7.15514 4.71 6.97514L9.71 1.97514C9.89 1.79514 10 1.54514 10 1.26514C10 0.715137 9.55 0.265137 9 0.265137Z"
              fill="white"
            />
          </svg>
        </>
      )}
    </div>
  );
};

export default Checkbox;
