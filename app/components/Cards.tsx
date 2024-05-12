"use client";

import React from "react";

interface Child {
  children: React.ReactNode;
  width?: string;
}

export const Card = ({ children, width }: Child) => {
  return (
    <div
      className={`w-${width} flex flex-col gap-6 3xl:gap-8 justify-between p-4 lg:p-6 3xl:p-8 rounded-[24px] bg-dgray`}
    >
      {children}
    </div>
  );
};

export const ChildCard = ({ children }: Child) => {
  return (
    <div className="flex flex-col gap-4 3xl:gap-6 justify-between p-4 lg:p-5 3xl:p-8 rounded-[16px] bg-gray">
      {children}
    </div>
  );
};
