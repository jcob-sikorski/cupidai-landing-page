"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { PrimaryBoxButton } from "../Buttons";

const Cta = () => {
  return (
    <motion.section className="z-20 relative w-full flex flex-col items-center justify-center gap-12 mt-[256px] py-20 px-12 max-w-[800px]">
      <div className="flex flex-col gap-4 items-center justify-center text-center mb-[256px]">
        <div className="z-[-1] absolute">
          <Image
            width={1080}
            height={1080}
            alt=""
            src="/bg/footerPattern.svg"
          />
        </div>
        <h1>Be part of the future of CUPID AI</h1>
        <>
          <svg
            width="313"
            height="14"
            viewBox="0 0 313 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11C54.8269 4.96301 192.385 -3.48877 312 11"
              stroke="url(#paint0_linear_72_8932)"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_72_8932"
                x1="-48.8773"
                y1="11.6811"
                x2="80.3431"
                y2="-168.196"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#090EDB" />
                <stop offset="1" stopColor="#E73DC4" />
              </linearGradient>
            </defs>
          </svg>
        </>
        <p>
          Unleash the power of AI within cupid. Upgrade your productivity with
          cupid, the image genetation app.
        </p>
        <PrimaryBoxButton href="/signup" enabled={true} form={false}>Try now</PrimaryBoxButton>
      </div>
    </motion.section>
  );
};

export default Cta;
