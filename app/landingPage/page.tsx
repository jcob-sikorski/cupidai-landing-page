import React from "react";
import Image from "next/image";
import Hero from "../components/Sections/Hero";
import Companies from "../components/Sections/Companies";
import About from "../components/Sections/About";
import Services from "../components/Sections/Services";
import Pricing from "../components/Sections/Pricing";
import Faqs from "../components/Sections/Faqs";
import Cta from "../components/Sections/Cta";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import NavBar from "@/app/components/NavBar/page";

const page = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      <Hero />
      {/* <motion.div className=" overflow-hidden z-[-1] w-full absolute bottom-0 flex items-end justify-center">
        <div className="flex items-center justify-center">
          <svg
            width="3840"
            height="996"
            viewBox="0 0 3840 996"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3008_422)">
              <g filter="url(#filter0_f_3008_422)">
                <motion.ellipse
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: [null, 300, -50, 150, 0],
                    y: [null, 100, -50, 350, 0],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  opacity="0.3"
                  cx="2496.67"
                  cy="686.599"
                  rx="522.328"
                  ry="400.599"
                  fill="#3840FF"
                />
                <ellipse
                  cx="1343.33"
                  cy="853.599"
                  rx="522.328"
                  ry="400.599"
                  fill="#A661FF"
                />
                <motion.ellipse
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: [null, 300, -50, 150, 0],
                    y: [null, -100, -50, -350, 0],
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  cx="1242.22"
                  cy="797.391"
                  rx="406.576"
                  ry="311.637"
                  fill="black"
                />
                <motion.ellipse
                  initial={{
                    x: 0,
                  }}
                  animate={{
                    x: [null, 300, -50, 150, 0],
                    y: [null, 100, -50, 350, 0],
                  }}
                  transition={{
                    duration: 13,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  cx="1794.93"
                  cy="790.842"
                  rx="406.576"
                  ry="311.637"
                  fill="#EAAFFF"
                />
                <ellipse
                  cx="1443.33"
                  cy="1087.2"
                  rx="370.404"
                  ry="283.803"
                  fill="#FFD873"
                />
                <ellipse
                  cx="1690.76"
                  cy="970.402"
                  rx="370.404"
                  ry="283.803"
                  fill="#FFD873"
                />
                <ellipse
                  cx="2448.2"
                  cy="822.497"
                  rx="450.707"
                  ry="345.475"
                  fill="#8960FF"
                  fillOpacity="0.94"
                />
                <ellipse
                  cx="2536"
                  cy="892"
                  rx="299"
                  ry="260"
                  fill="#AF7EFF"
                  fillOpacity="0.94"
                />
                <ellipse
                  cx="1287.07"
                  cy="822.497"
                  rx="134.561"
                  ry="69.3134"
                  fill="#0029FF"
                />
                <ellipse
                  cx="1317"
                  cy="789.5"
                  rx="164"
                  ry="102.5"
                  fill="#711AFF"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_3008_422"
                x="537.409"
                y="2.4093"
                width="2765.18"
                height="1652.18"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="141.795"
                  result="effect1_foregroundBlur_3008_422"
                />
              </filter>
              <clipPath id="clip0_3008_422">
                <rect width="3840" height="996" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </motion.div> */}

      <motion.div className=" overflow-hidden z-[-1] w-full h-full absolute bottom-0 flex items-end justify-center">
        <div className="flex items-center justify-center">
          <Image layout="fill" objectFit="cover" alt="" src="/bg/glow.png" />
          {/* <div className="h-full w-full ovreflow-hidden absolute bottom-0 flex items-end justify-center">
            <motion.svg
              style={{
                position: "absolute",
                left: -980,
              }}
              initial={{
                x: 0,
              }}
              animate={{
                x: [null, 300, -50, 150, 0],
                y: [null, 100, -50, 350, 0],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              width="1326"
              height="1137"
              viewBox="0 0 1326 1137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_3008_426)">
                <ellipse
                  cx="662.576"
                  cy="568.391"
                  rx="406.576"
                  ry="311.637"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_3008_426"
                  x="0"
                  y="0.753906"
                  width="1325.15"
                  height="1135.28"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="128"
                    result="effect1_foregroundBlur_3008_426"
                  />
                </filter>
              </defs>
            </motion.svg>

            <motion.svg
              style={{
                position: "absolute",
                bottom: -256,
                zIndex: -1,
              }}
              initial={{
                x: 0,
              }}
              animate={{
                x: [null, 300, -50, 150, 0],
                y: [null, 100, -50, 350, 0],
              }}
              transition={{
                duration: 13,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              width="1326"
              height="1136"
              viewBox="0 0 1326 1136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_3008_427)">
                <ellipse
                  cx="663.287"
                  cy="567.842"
                  rx="406.576"
                  ry="311.637"
                  fill="#EAAFFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_3008_427"
                  x="0.710938"
                  y="0.205078"
                  width="1325.15"
                  height="1135.28"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="128"
                    result="effect1_foregroundBlur_3008_427"
                  />
                </filter>
              </defs>
            </motion.svg>

            <motion.svg
              style={{
                position: "absolute",
                right: -720,
                bottom: -256,
                zIndex: -1,
              }}
              initial={{
                x: 0,
              }}
              animate={{
                x: [null, 300, -50, 150, 0],
                y: [null, 100, -50, 350, 0],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              width="1558"
              height="1314"
              viewBox="0 0 1558 1314"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3" filter="url(#filter0_f_3008_424)">
                <ellipse
                  cx="779.031"
                  cy="656.599"
                  rx="522.328"
                  ry="400.599"
                  fill="#3840FF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_3008_424"
                  x="0.703125"
                  y="0"
                  width="1556.66"
                  height="1313.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="128"
                    result="effect1_foregroundBlur_3008_424"
                  />
                </filter>
              </defs>
            </motion.svg>
          </div> */}
        </div>
      </motion.div>
      <Companies />
      <About />
      <Services />
      <Pricing />
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
};

export default page;
