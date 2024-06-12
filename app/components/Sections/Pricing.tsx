"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { PrimaryButton, PrimaryBoxButton, SecondaryButton, SecondaryBoxButton } from "../Buttons";

const Pricing = () => {
  const [timeFrame, setTimeFrame] = useState("Yearly");
  const handleTimeFrame = (time: string) => {
    if (time === "Yearly") {
      setTimeFrame("Yearly");
    } else {
      setTimeFrame("Monthly");
    }
  };

  return (
    <motion.section className="relative w-full flex flex-col items-center justify-center gap-16 mt-[128px] pb-12 pt-20 px-12">
      <div className="z-[-1] right-0 absolute">
        <svg
          width="2778"
          height="2778"
          viewBox="0 0 2778 2778"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_3040_481)">
            <circle cx="1389" cy="1389" r="389" fill="#2980D6" />
          </g>
          <defs>
            <filter
              id="filter0_f_3040_481"
              x="0"
              y="0"
              width="2778"
              height="2778"
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
                stdDeviation="500"
                result="effect1_foregroundBlur_3040_481"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-2 text-center max-w-[640px]">
        <h2>Pricing</h2>
        <p className="text-textd">Don’t settle for less, settle for the best</p>
      </div>

      {/* <div className="flex items-center justfiy-center bg-white bg-opacity-10 rounded-full w-fit p-1">
        <div
          onClick={() => handleTimeFrame("Yearly")}
          className={`flex items-center justify-center px-4 py-2 rounded-full ${
            timeFrame === "Yearly"
              ? "bg-white bg-opacity-10"
              : "bg-white bg-opacity-0 hover:bg-opacity-10"
          } cursor-pointer transition-all duration-300 ease-in-out`}
        >
          <h4>Yearly</h4>
        </div>

        <div
          onClick={() => handleTimeFrame("Monthly")}
          className={`flex items-center justify-center px-4 py-2 rounded-full ${
            timeFrame === "Monthly"
              ? "bg-white bg-opacity-10"
              : "bg-white bg-opacity-0 hover:bg-opacity-10"
          } cursor-pointer transition-all duration-300 ease-in-out`}
        >
          <h4>Monthly</h4>
        </div>
      </div> */}

      <div className="max-w-[320px] lg:max-w-[1280px] gap-4 lg:gap-0 w-full grid grid-cols-1 lg:grid-cols-3 items-center justify-center">
        <motion.div
          style={{
            background:
              "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)) padding-box, linear-gradient(to bottom, transparent, transparent) border-box",
          }}
          className="group flex flex-col gap-8 p-6 rounded-[24px] bg-white bg-opacity-5 border-[1px] border-white border-opacity-10"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3>Individual</h3>
              <p className="text-textd">
                Everything you need to supercharge your efficiency.
              </p>
              <div className="flex items-end">
                <h2>£24.99</h2>
                <span className="caption text-textd">/ month</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <svg
                className="w-full"
                width="403"
                height="1"
                viewBox="0 0 403 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="401.67"
                  height="1"
                  transform="translate(0.5)"
                  fill="url(#paint0_linear_72_8791)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_72_8791"
                    x1="0"
                    y1="0.5"
                    x2="401.67"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.5" stopColor="white" stopOpacity="0.2" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col gap-4">
              <span className="caption text-textd">What’s included</span>
              <div className="flex gap-2">
                <>
                  <svg
                    className="stroke-white group-hover:stroke-[#2BE295] transition-all duration-300 ease-in-out"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.875 8.625C15.875 8.625 12.2975 12.435 11.375 15.375L9.125 13.125M21.875 12C21.875 14.4864 20.8873 16.871 19.1291 18.6291C17.371 20.3873 14.9864 21.375 12.5 21.375C10.0136 21.375 7.62903 20.3873 5.87087 18.6291C4.11272 16.871 3.125 14.4864 3.125 12C3.125 9.5136 4.11272 7.12903 5.87087 5.37087C7.62903 3.61272 10.0136 2.625 12.5 2.625C14.9864 2.625 17.371 3.61272 19.1291 5.37087C20.8873 7.12903 21.875 9.5136 21.875 12Z"
                      stroke=""
                      stroke-opacity="0.6"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
                <span className="caption text-textd">
                  Realistic AI Content Creation
                </span>
              </div>
              <div className="flex gap-2">
                <>
                  <svg
                    className="stroke-white group-hover:stroke-[#2BE295] transition-all duration-300 ease-in-out"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.875 8.625C15.875 8.625 12.2975 12.435 11.375 15.375L9.125 13.125M21.875 12C21.875 14.4864 20.8873 16.871 19.1291 18.6291C17.371 20.3873 14.9864 21.375 12.5 21.375C10.0136 21.375 7.62903 20.3873 5.87087 18.6291C4.11272 16.871 3.125 14.4864 3.125 12C3.125 9.5136 4.11272 7.12903 5.87087 5.37087C7.62903 3.61272 10.0136 2.625 12.5 2.625C14.9864 2.625 17.371 3.61272 19.1291 5.37087C20.8873 7.12903 21.875 9.5136 21.875 12Z"
                      stroke=""
                      stroke-opacity="0.6"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
                <span className="caption text-textd">
                  Realistic Ai Content Deepfake
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <>
                  <svg
                    className="stroke-white group-hover:stroke-[#2BE295] transition-all duration-300 ease-in-out"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.875 8.625C15.875 8.625 12.2975 12.435 11.375 15.375L9.125 13.125M21.875 12C21.875 14.4864 20.8873 16.871 19.1291 18.6291C17.371 20.3873 14.9864 21.375 12.5 21.375C10.0136 21.375 7.62903 20.3873 5.87087 18.6291C4.11272 16.871 3.125 14.4864 3.125 12C3.125 9.5136 4.11272 7.12903 5.87087 5.37087C7.62903 3.61272 10.0136 2.625 12.5 2.625C14.9864 2.625 17.371 3.61272 19.1291 5.37087C20.8873 7.12903 21.875 9.5136 21.875 12Z"
                      stroke=""
                      stroke-opacity="0.6"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
                <span className="caption text-textd">Content Utilities</span>
                <div className="flex px-3 py-1 rounded-full items-center justify-center bg-white bg-opacity-10 text-[11px] text-text">
                  COMING SOON
                </div>
              </div>
            </div>
          </div>
          <SecondaryBoxButton href="/signup">Select Plan</SecondaryBoxButton>
        </motion.div>

        <motion.div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            background:
              "linear-gradient(#0F0F0F, #0F0F0F) padding-box, linear-gradient(to bottom, #7F04E3, #FF006B) border-box",
            border: "2px solid transparent",
            boxShadow: "10px 10px 37.7px #000000",
          }}
          initial={{
            scale: 1.05,
          }}
          className="group flex flex-col gap-8 p-6 rounded-[24px] "
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <motion.span className="text-[24px] font-bold gradient_text">
                Entrepreneur
              </motion.span>
              <span className="caption text-textd">
                Unlock a new level of your personal productivity.
              </span>
              <div className="flex items-end gap-2">
                <h2>£74.99</h2>
                <span className="caption text-textd">/ month</span>
                <div className="flex px-2 py-1 rounded-full bg-[#FF6363]">
                  <span className="text-sm text-dgray font-bold">-20%</span>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-4 items-center justify-center">
              {/* <div className="absolute flex text-center py-1 px-4 rounded-[12px] bg-lgray w-fit">
                <span className="caption">£408 billed annually</span>
              </div> */}
              <svg
                className="w-full"
                width="403"
                height="1"
                viewBox="0 0 403 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="401.67"
                  height="1"
                  transform="translate(0.5)"
                  fill="url(#paint0_linear_72_8791)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_72_8791"
                    x1="0"
                    y1="0.5"
                    x2="401.67"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.5" stopColor="white" stopOpacity="0.2" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col gap-4">
              <span className="caption text-textd">What’s included</span>
              <div className="flex gap-2">
                <>
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src="/icons/tikGreen.svg"
                  />
                </>
                <span className="caption text-textd">
                  Everything in Individual
                </span>
              </div>
              <div className="flex gap-2">
                <>
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src="/icons/tikGreen.svg"
                  />
                </>
                <span className="caption text-textd">Team Access</span>
                <div className="flex px-3 py-1 rounded-full items-center justify-center bg-white bg-opacity-10 text-[11px] text-text">
                  COMING SOON
                </div>
              </div>

              <div className="flex gap-2">
                <>
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src="/icons/tikGreen.svg"
                  />
                </>
                <span className="caption text-textd">Controlnet Features</span>
              </div>

              {/* <div className="flex gap-2">
                <>
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src="/icons/tikGreen.svg"
                  />
                </>
                <span className="caption text-textd">Custom Themes</span>
                <div className="flex px-3 py-1 rounded-full items-center justify-center bg-white bg-opacity-10 text-[11px] text-text">
                  COMING SOON
                </div>
              </div> */}

              <div className="flex gap-2">
                <>
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src="/icons/tikGreen.svg"
                  />
                </>
                <span className="caption text-textd">
                  IPA refinement Features
                </span>
                <div className="flex px-3 py-1 rounded-full items-center justify-center bg-white bg-opacity-10 text-[11px] text-text">
                  COMING SOON
                </div>
              </div>

              <div className="flex gap-2">
                <>
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src="/icons/special.svg"
                  />
                </>
                <span className="caption text-textd">Special Discounts</span>
                <div className="flex px-3 py-1 rounded-full items-center justify-center bg-white bg-opacity-10 text-[11px] text-text">
                  COMING SOON
                </div>
              </div>
            </div>
          </div>

          <PrimaryBoxButton enabled={true} form={false} href="/signup">Select Plan</PrimaryBoxButton>
        </motion.div>

        <motion.div
          style={{
            background:
              "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)) padding-box, linear-gradient(to bottom, transparent, transparent) border-box",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          className="group flex flex-col gap-8 p-6 rounded-[24px] bg-white bg-opacity-5 border-[1px] border-white border-opacity-10"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3>Business</h3>
              <span className="caption text-textd">
                Supercharge your team and maximize profits.
              </span>
              <div className="flex items-end gap-2">
                <h2>£374.99</h2>
                <div className="flex flex-col">
                  <span className="caption text-textd">/ month</span>
                  <span className="caption text-textd">/ user</span>
                </div>

                <div className="flex px-2 py-1 rounded-full bg-[#FF6363]">
                  <span className="text-sm text-dgray font-bold">-40%</span>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-4 items-center justify-center">
              {/* <div className="absolute flex text-center py-1 px-4 rounded-[12px] bg-lgray w-fit">
                <span className="caption">£1800 billed annually</span>
              </div> */}
              <svg
                className="w-full"
                width="403"
                height="1"
                viewBox="0 0 403 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="401.67"
                  height="1"
                  transform="translate(0.5)"
                  fill="url(#paint0_linear_72_8791)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_72_8791"
                    x1="0"
                    y1="0.5"
                    x2="401.67"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.5" stopColor="white" stopOpacity="0.2" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col gap-4">
              <span className="caption text-textd">What’s included</span>
              <div className="flex gap-2">
                <>
                  <svg
                    className="stroke-white group-hover:stroke-[#2BE295] transition-all duration-300 ease-in-out"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.875 8.625C15.875 8.625 12.2975 12.435 11.375 15.375L9.125 13.125M21.875 12C21.875 14.4864 20.8873 16.871 19.1291 18.6291C17.371 20.3873 14.9864 21.375 12.5 21.375C10.0136 21.375 7.62903 20.3873 5.87087 18.6291C4.11272 16.871 3.125 14.4864 3.125 12C3.125 9.5136 4.11272 7.12903 5.87087 5.37087C7.62903 3.61272 10.0136 2.625 12.5 2.625C14.9864 2.625 17.371 3.61272 19.1291 5.37087C20.8873 7.12903 21.875 9.5136 21.875 12Z"
                      stroke=""
                      stroke-opacity="0.6"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
                <span className="caption text-textd">
                  Everything in Entrepreneur
                </span>
              </div>
              <div className="flex gap-2">
                <>
                  <svg
                    className="stroke-white group-hover:stroke-[#2BE295] transition-all duration-300 ease-in-out"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.875 8.625C15.875 8.625 12.2975 12.435 11.375 15.375L9.125 13.125M21.875 12C21.875 14.4864 20.8873 16.871 19.1291 18.6291C17.371 20.3873 14.9864 21.375 12.5 21.375C10.0136 21.375 7.62903 20.3873 5.87087 18.6291C4.11272 16.871 3.125 14.4864 3.125 12C3.125 9.5136 4.11272 7.12903 5.87087 5.37087C7.62903 3.61272 10.0136 2.625 12.5 2.625C14.9864 2.625 17.371 3.61272 19.1291 5.37087C20.8873 7.12903 21.875 9.5136 21.875 12Z"
                      stroke=""
                      stroke-opacity="0.6"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
                <span className="caption text-textd">Team Max Capacity</span>
                <div className="flex px-3 py-1 rounded-full items-center justify-center bg-white bg-opacity-10 text-[11px] text-text">
                  COMING SOON
                </div>
              </div>

              <div className="flex gap-2">
                <>
                  <svg
                    className="stroke-white group-hover:stroke-[#2BE295] transition-all duration-300 ease-in-out"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.875 8.625C15.875 8.625 12.2975 12.435 11.375 15.375L9.125 13.125M21.875 12C21.875 14.4864 20.8873 16.871 19.1291 18.6291C17.371 20.3873 14.9864 21.375 12.5 21.375C10.0136 21.375 7.62903 20.3873 5.87087 18.6291C4.11272 16.871 3.125 14.4864 3.125 12C3.125 9.5136 4.11272 7.12903 5.87087 5.37087C7.62903 3.61272 10.0136 2.625 12.5 2.625C14.9864 2.625 17.371 3.61272 19.1291 5.37087C20.8873 7.12903 21.875 9.5136 21.875 12Z"
                      stroke=""
                      stroke-opacity="0.6"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
                <span className="caption text-textd">
                  AI Verification Access
                </span>
              </div>

              <div className="flex gap-2">
                <>
                  <svg
                    className="stroke-white group-hover:stroke-[#2BE295] transition-all duration-300 ease-in-out"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.875 8.625C15.875 8.625 12.2975 12.435 11.375 15.375L9.125 13.125M21.875 12C21.875 14.4864 20.8873 16.871 19.1291 18.6291C17.371 20.3873 14.9864 21.375 12.5 21.375C10.0136 21.375 7.62903 20.3873 5.87087 18.6291C4.11272 16.871 3.125 14.4864 3.125 12C3.125 9.5136 4.11272 7.12903 5.87087 5.37087C7.62903 3.61272 10.0136 2.625 12.5 2.625C14.9864 2.625 17.371 3.61272 19.1291 5.37087C20.8873 7.12903 21.875 9.5136 21.875 12Z"
                      stroke=""
                      stroke-opacity="0.6"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
                <span className="caption text-textd">
                  Unlimited Model Usage
                </span>
              </div>

              <div className="flex gap-2">
                <>
                  <svg
                    className="stroke-white group-hover:stroke-[#2BE295] transition-all duration-300 ease-in-out"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.875 8.625C15.875 8.625 12.2975 12.435 11.375 15.375L9.125 13.125M21.875 12C21.875 14.4864 20.8873 16.871 19.1291 18.6291C17.371 20.3873 14.9864 21.375 12.5 21.375C10.0136 21.375 7.62903 20.3873 5.87087 18.6291C4.11272 16.871 3.125 14.4864 3.125 12C3.125 9.5136 4.11272 7.12903 5.87087 5.37087C7.62903 3.61272 10.0136 2.625 12.5 2.625C14.9864 2.625 17.371 3.61272 19.1291 5.37087C20.8873 7.12903 21.875 9.5136 21.875 12Z"
                      stroke=""
                      stroke-opacity="0.6"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
                <span className="caption text-textd">AI Image Training</span>
                <div className="flex px-3 py-1 rounded-full items-center justify-center bg-white bg-opacity-10 text-[11px] text-text">
                  COMING SOON
                </div>
              </div>

              <div className="flex gap-2">
                <>
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src="/icons/specialRed.svg"
                  />
                </>
                <span className="caption text-textd">BETA Feature Access</span>
              </div>
            </div>
          </div>
          <SecondaryBoxButton href="/signup">Select Plan</SecondaryBoxButton>
        </motion.div>
      </div>

      <div className=" group flex items-center justfiy-center bg-white bg-opacity-10 hover:bg-opacity-100 cursor-pointer rounded-full w-fit py-2 px-4 gap-2 transition-all duration-300 ease-in-out">
        {/* <span className="text-sm text-textd group-hover:text-dgray transition-all duration-300 ease-in-out">
          Want enterprise features?
        </span> */}
        <div className="flex gap-4">
          <PrimaryButton href="/signup">Try Now</PrimaryButton>
          <SecondaryButton href="https://discord.gg/sDp7s7JXH6">Request a Demo</SecondaryButton>
        </div>
        {/* <span className="text-sm font-bold group-hover:text-dgray transition-all duration-300 ease-in-out">
          Tell us more
        </span> */}
        {/* <>
          <svg
            className="stroke-white group-hover:stroke-dgray transition-all duration-300 ease-in-out"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6055 4.75L14.1055 8M14.1055 8L10.6055 11.25M14.1055 8H3.60547"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </> */}
      </div>
    </motion.section>
  );
};

export default Pricing;
