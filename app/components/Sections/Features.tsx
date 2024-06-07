"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

interface Props {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  imgSrc: string;
}

export const Features = ({ 
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  imgSrc
}: Props) => {
  const target = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  });

  // const x = useTransform(scrollYProgress, [0, 0.5], [1080, 0]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  return (
    <motion.section
      ref={target}
      className="w-full flex flex-col gap-12 items-center p-4 sm:px-6 md:px-12 max-w-[1920px]"
    >
      <div className="w-full">
        <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-1/3">
          <h2>{text1}</h2>
          <p className="text-textd">
            {text2}
          </p>
        </div>
      </div>

      <div className="w-full max-h-[920px] flex flex-col gap-6 p-8 rounded-[24px] border-[1px] border-white border-opacity-10 bg-gray overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group flex flex-col gap-4">
            <div className="flex gap-2 ">
              <svg
                className="stroke-[#57606A] group-hover:stroke-white transition-all duration-300 ease-in-out"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0034 2.03516H7.96763C6.06746 2.03517 5.11737 2.03517 4.39159 2.40496C3.75319 2.73025 3.23415 3.24929 2.90886 3.8877C2.53906 4.61347 2.53906 5.56356 2.53906 7.46374V11.5351C2.53906 13.4353 2.53906 14.3853 2.90886 15.1111C3.23415 15.7495 3.75319 16.2686 4.3916 16.5938C5.11737 16.9636 6.06746 16.9636 7.96764 16.9636H10.0034M10.0034 2.03516H12.0391C13.9392 2.03516 14.8893 2.03516 15.6151 2.40496C16.2535 2.73025 16.7726 3.24929 17.0978 3.8877C17.4676 4.61347 17.4676 5.56356 17.4676 7.46373V11.5351C17.4676 13.4352 17.4676 14.3853 17.0978 15.1111C16.7726 15.7495 16.2535 16.2686 15.6151 16.5938C14.8893 16.9636 13.9393 16.9636 12.0391 16.9636H10.0034M10.0034 2.03516V16.9636"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0034 11.3672H2.53906"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.4642 7.63477H10"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-[#57606A] group-hover:text-white transition-all duration-300 delay-100 ease-in-out">
               {text3}
              </h4>
            </div>
            <span className="caption text-[#57606A] group-hover:text-[#99A2AF] transition-all duration-300 delay-150 ease-in-out">
             {text4}
            </span>
          </div>

          <div className="group flex flex-col gap-4">
            <div className="flex gap-2 ">
              <svg
                className="stroke-[#57606A] group-hover:stroke-white transition-all duration-300 ease-in-out"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0034 2.03516H7.96763C6.06746 2.03517 5.11737 2.03517 4.39159 2.40496C3.75319 2.73025 3.23415 3.24929 2.90886 3.8877C2.53906 4.61347 2.53906 5.56356 2.53906 7.46374V11.5351C2.53906 13.4353 2.53906 14.3853 2.90886 15.1111C3.23415 15.7495 3.75319 16.2686 4.3916 16.5938C5.11737 16.9636 6.06746 16.9636 7.96764 16.9636H10.0034M10.0034 2.03516H12.0391C13.9392 2.03516 14.8893 2.03516 15.6151 2.40496C16.2535 2.73025 16.7726 3.24929 17.0978 3.8877C17.4676 4.61347 17.4676 5.56356 17.4676 7.46373V11.5351C17.4676 13.4352 17.4676 14.3853 17.0978 15.1111C16.7726 15.7495 16.2535 16.2686 15.6151 16.5938C14.8893 16.9636 13.9393 16.9636 12.0391 16.9636H10.0034M10.0034 2.03516V16.9636"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0034 11.3672H2.53906"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.4642 7.63477H10"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-[#57606A] group-hover:text-white transition-all duration-300 delay-100 ease-in-out">
               {text5}
              </h4>
            </div>
            <span className="caption text-[#57606A] group-hover:text-[#99A2AF] transition-all duration-300 delay-150 ease-in-out">
             {text6}
            </span>
          </div>

          <div className="group flex flex-col gap-4">
            <div className="flex gap-2 ">
              <svg
                className="stroke-[#57606A] group-hover:stroke-white transition-all duration-300 ease-in-out"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0034 2.03516H7.96763C6.06746 2.03517 5.11737 2.03517 4.39159 2.40496C3.75319 2.73025 3.23415 3.24929 2.90886 3.8877C2.53906 4.61347 2.53906 5.56356 2.53906 7.46374V11.5351C2.53906 13.4353 2.53906 14.3853 2.90886 15.1111C3.23415 15.7495 3.75319 16.2686 4.3916 16.5938C5.11737 16.9636 6.06746 16.9636 7.96764 16.9636H10.0034M10.0034 2.03516H12.0391C13.9392 2.03516 14.8893 2.03516 15.6151 2.40496C16.2535 2.73025 16.7726 3.24929 17.0978 3.8877C17.4676 4.61347 17.4676 5.56356 17.4676 7.46373V11.5351C17.4676 13.4352 17.4676 14.3853 17.0978 15.1111C16.7726 15.7495 16.2535 16.2686 15.6151 16.5938C14.8893 16.9636 13.9393 16.9636 12.0391 16.9636H10.0034M10.0034 2.03516V16.9636"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0034 11.3672H2.53906"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.4642 7.63477H10"
                  stroke=""
                  strokeWidth="1.49286"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h4 className="text-[#57606A] group-hover:text-white transition-all duration-300 delay-100 ease-in-out">
               {text7}
              </h4>
            </div>
            <span className="caption text-[#57606A] group-hover:text-[#99A2AF] transition-all duration-300 delay-150 ease-in-out">
             {text8}
            </span>
          </div>
        </div>
        <motion.div>
          <Image
            width={1920}
            height={1915}
            alt=""
            src={imgSrc}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
