"use client";

import React, { useEffect, useState } from "react";
import { Divider } from "./Divider";

interface Props {
  title: string;
  children: React.ReactNode;
  active?: boolean;
}

const Accordion = ({ children, title, active }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (active) {
      setOpen(true);
    }
  }, []);

  const handleAccordion = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`flex flex-col gap-4 w-full p-4 rounded-[16px] transition duration-300`}
    >
      <div className="flex items-center justify-between w-full gap-4">
        <h5 className="text-white">{title}</h5>
        <div
          onClick={handleAccordion}
          className={`group w-6 h-6 flex items-center justify-center cursor-pointer rounded-[8px] bg-gray hover:bg-lgray transition duration-300 ${
            open ? "rotate-[180deg]" : "rotate-[0deg]"
          }`}
        >
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292893 0.600999C0.683417 0.210474 1.31658 0.210474 1.70711 0.600999L7 5.89389L12.2929 0.600999C12.6834 0.210474 13.3166 0.210474 13.7071 0.600999C14.0976 0.991523 14.0976 1.62469 13.7071 2.01521L7.70711 8.01521C7.31658 8.40574 6.68342 8.40574 6.29289 8.01521L0.292893 2.01521C-0.0976311 1.62469 -0.0976311 0.991523 0.292893 0.600999Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {open && (
        <>
          <Divider />
          <span className="text-sm text-textd font-bold">{children}</span>
        </>
      )}
    </div>
  );
};

export default Accordion;
