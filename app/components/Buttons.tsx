"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: string;
  enabled?: boolean;
  form?: boolean;
}

export const PrimaryButton = ({ children, onClick, href }: Props) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = () => {
    setMouseEnter(!mouseEnter);
  };
  return (
    <Link href={href ? href : ""}>
      <motion.div
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 24px",
          borderRadius: "32px",
          cursor: "pointer",
          background:
            "linear-gradient(238.05deg, #7F04E3 4.82%, #FF006B 116.43%)",
        }}
        whileHover={{
          background: [
            null,
            "linear-gradient(238deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(90deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(175deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(15deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(238deg, #7F04E3 4.82%, #FF006B 116.43%)",
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.01, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
        className={`text-text text-sm font-bold`}
      >
        {children}
      </motion.div>
    </Link>
  );
};

export const PrimaryBoxButton = ({ 
  children, 
  onClick, 
  enabled,
  form=true
}: Props) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleMouseEnter = () => {
    setMouseEnter(!mouseEnter);
  };

  // Define opacity based on enabled prop
  const opacity = enabled ? 1 : 0.5;

  const handleClick = () => {
    if (enabled && onClick) {
      onClick();
    }
  };

  return (
    form ? (
      <motion.button
        type="submit"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 24px",
          borderRadius: "8px",
          cursor: enabled ? "pointer" : "default", // Adjust cursor based on enabled prop
          background:
            "linear-gradient(238.05deg, #7F04E3 4.82%, #FF006B 116.43%)",
          opacity: opacity, // Set opacity based on enabled prop
        }}
        whileHover={{
          background: [
            null,
            "linear-gradient(238deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(90deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(175deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(15deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(238deg, #7F04E3 4.82%, #FF006B 116.43%)",
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.01, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
        className={`text-text text-sm font-bold`}
      >
        {children}
      </motion.button>
    ) : (
      <motion.div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 24px",
          borderRadius: "8px",
          cursor: enabled ? "pointer" : "default", // Adjust cursor based on enabled prop
          background:
            "linear-gradient(238.05deg, #7F04E3 4.82%, #FF006B 116.43%)",
          opacity: opacity, // Set opacity based on enabled prop
        }}
        whileHover={{
          background: [
            null,
            "linear-gradient(238deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(90deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(175deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(15deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(238deg, #7F04E3 4.82%, #FF006B 116.43%)",
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.01, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
        className={`text-text text-sm font-bold`}
      >
        {children}
      </motion.div>
    )
  );
};

export const SecondaryButton = ({ children, onClick, href }: Props) => {
  return (
    <Link href={href ? href : ""}>
      <motion.div
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 24px",
          borderRadius: "32px",
          cursor: "pointer",
          background: "#0F0F0F",
        }}
        whileHover={{
          background: "#171717",
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="text-text text-sm font-bold"
      >
        {children}
      </motion.div>
    </Link>
  );
};

export const SecondaryBoxButton = ({ children, onClick, href }: Props) => {
  return (
    <Link href={href ? href : ""}>
      <div
        onClick={onClick}
        className="flex items-center justify-center w-full text-sm font-bold px-8 py-2 rounded-[8px] border-[1px] bg-white bg-opacity-0 border-white border-opacity-20 cursor-pointer hover:bg-opacity-100 hover:text-dgray transition-all duration-300 ease-in-out"
      >
        {children}
      </div>
    </Link>
  );
};

export const TertiaryButton = ({ children, onClick, href }: Props) => {
  return (
    <Link href={href ? href : ""}>
      <p
        onClick={onClick}
        className="text-textd underline cursor-pointer hover:text-white transition-all duration-300 ease-in-out"
      >
        {children}
      </p>
    </Link>
  );
};

export const IconButton = ({ children, onClick, href, icon }: Props) => {
  return (
    <Link href={href ? href : ""}>
      <div
        onClick={onClick}
        className="flex gap-4 items-center justify-center w-full text-sm font-bold px-8 py-2 rounded-[8px] border-[1px] bg-white bg-opacity-0 border-white border-opacity-20 cursor-pointer hover:bg-opacity-100 hover:text-dgray transition-all duration-300 ease-in-out"
      >
        {icon && <Image width={20} height={20} src={icon} alt="" />}
        {children}
      </div>
    </Link>
  );
};

export const CloseButton = ({ onClick, href }: Props) => {
  return (
    <Link href={href ? href : ""}>
      <div
        onClick={onClick}
        className="flex items-center justify-center p-3 3xl:p-4 rounded-full bg-dgray hover:bg-gray cursor-pointer transition-all duration-300 ease-in-out"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.94734 0.358893C1.55682 -0.0316316 0.923652 -0.0316316 0.533128 0.358893C0.142603 0.749417 0.142603 1.38258 0.533128 1.77311L4.0687 5.30867L0.533279 8.84409C0.142754 9.23462 0.142754 9.86778 0.533279 10.2583C0.923803 10.6488 1.55697 10.6488 1.94749 10.2583L5.48291 6.72289L9.01841 10.2584C9.40893 10.6489 10.0421 10.6489 10.4326 10.2584C10.8231 9.86786 10.8231 9.2347 10.4326 8.84417L6.89712 5.30867L10.4328 1.77302C10.8233 1.3825 10.8233 0.749335 10.4328 0.358811C10.0422 -0.0317132 9.40908 -0.0317129 9.01856 0.358811L5.48291 3.89446L1.94734 0.358893Z"
            fill="white"
          />
        </svg>
      </div>
    </Link>
  );
};
