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
          scale: 1.1, // Increase size when hovered
          background: [
            "linear-gradient(238deg, #7F04E3 4.82%, #FF006B 116.43%)",
            "linear-gradient(90deg, #8B14E3 15.82%, #FF206B 126.43%)",
            "linear-gradient(175deg, #7F34E3 26.82%, #FF406B 136.43%)",
            "linear-gradient(15deg, #7F64E3 37.82%, #FF606B 146.43%)",
            "linear-gradient(238deg, #7F04E3 4.82%, #FF006B 116.43%)",
          ],
        }}
        transition={{
          duration: 0.4, // Adjusted duration for a smoother hover effect
          ease: "easeInOut",
        }}
        className={`text-white text-sm font-bold`}
      >
        {children}
      </motion.div>
    </Link>
  );
};


export const PrimaryBoxButton = ({ 
  children, 
  onClick, 
  href,
  enabled = true,
  form = true
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
          scale: 1.1, // Increase size when hovered
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
          duration: 0.2, // Adjusted duration for a smoother hover effect
          ease: "easeInOut",
        }}
        className={`text-text text-sm font-bold`}
      >
        {children}
      </motion.button>
    ) : (
      <Link href={href ? href : ""} passHref>
        <motion.a
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
            scale: 1.1, // Increase size when hovered
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
            duration: 0.2, // Adjusted duration for a smoother hover effect
            ease: "easeInOut",
          }}
          className={`text-text text-sm font-bold`}
        >
          {children}
        </motion.a>
      </Link>
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
          scale: 1.1, // Increase size when hovered
          background: "#171717",
        }}
        transition={{
          duration: 0.2, // Adjusted duration for a smoother hover effect
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
      <motion.div
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 24px",
          borderRadius: "8px",
          cursor: "pointer",
          background: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        whileHover={{
          scale: 1.1, // Increase size when hovered
          background: "rgba(255, 255, 255, 1)",
        }}
        transition={{
          duration: 0.2, // Adjusted duration for a smoother hover effect
          ease: "easeInOut",
        }}
        className="text-sm font-bold"
      >
        {children}
      </motion.div>
    </Link>
  );
};


export const TertiaryButton = ({ children, onClick, href }: Props) => {
  return (
    <Link href={href ? href : ""}>
      <motion.p
        onClick={onClick}
        style={{
          cursor: "pointer",
        }}
        whileHover={{
          scale: 1.1, // Increase size when hovered
          color: "white",
        }}
        transition={{
          duration: 0.2, // Adjusted duration for a smoother hover effect
          ease: "easeInOut",
        }}
        className="text-textd underline transition-all duration-300 ease-in-out"
      >
        {children}
      </motion.p>
    </Link>
  );
};


export const IconButton = ({ children, onClick, href, icon }: Props) => {
  return (
    <Link href={href ? href : ""}>
      <motion.div
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 24px",
          borderRadius: "8px",
          cursor: "pointer",
          background: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        whileHover={{
          scale: 1.1, // Increase size when hovered
          background: "rgba(255, 255, 255, 1)",
        }}
        transition={{
          duration: 0.2, // Adjusted duration for a smoother hover effect
          ease: "easeInOut",
        }}
        className="flex gap-4 items-center justify-center w-full text-sm font-bold transition-all duration-300 ease-in-out"
      >
        {icon && <Image width={20} height={20} src={icon} alt="" />}
        {children}
      </motion.div>
    </Link>
  );
};


export const CloseButton = ({ onClick, href }: Props) => {
  return (
    <Link href={href ? href : ""}>
      <motion.div
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px",
          borderRadius: "50%",
          cursor: "pointer",
          background: "#dgray",
        }}
        whileHover={{
          scale: 1.1, // Increase size when hovered
          background: "#gray",
        }}
        transition={{
          duration: 0.2, // Adjusted duration for a smoother hover effect
          ease: "easeInOut",
        }}
        className="transition-all duration-300 ease-in-out"
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
      </motion.div>
    </Link>
  );
};

