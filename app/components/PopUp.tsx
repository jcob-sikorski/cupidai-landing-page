"use client";

import React, { useState } from "react";
import { PrimaryBoxButton } from "./Buttons";
import { Card } from "./Cards";

interface PopupProps {
  title: string;
  desc: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, desc }) => {
  return (
    <div className="z-10 fixed top-0 left-0 w-[100vw] h-[100vh] flex overflow-y-scroll items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="flex w-[480px] max-w-[480px]">
        <Card>
          <div className="flex flex-col">
            <span className="text-[32px] font-bold leading-[36px]">
              {title}
            </span>
            <p className="text-textd">{desc}</p>
          </div>

          <PrimaryBoxButton href="/login">Login</PrimaryBoxButton>
        </Card>
      </div>
    </div>
  );
};

export default Popup;
