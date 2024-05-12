"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Divider } from "./Divider";

const Footer = () => {
  return (
    <motion.section className="relative w-full items-center flex flex-col py-12 px-12 gap-4">
      <div className="flex items-center justify-center sm:justify-between gap-4 flex-wrap w-full max-w-[1920px]">
        <div className="flex items-center justify-center">
          <Image width={160} height={36} alt="" src="/logo.svg" />
        </div>

        <div className="flex gap-12">
          <div className="opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out">
            <h4>features</h4>
          </div>

          <div className="opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out">
            <h4>Services</h4>
          </div>

          <div className="opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out">
            <h4>pricing</h4>
          </div>

          <div className="opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 ease-in-out">
            <h4>how to use</h4>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[1920px]">
        <Divider />
      </div>

      <div className="flex items-center justify-center sm:justify-between gap-4 flex-wrap w-full max-w-[1920px]">
        <p className="text-center">©CUPID AI 2023. All rights reserved</p>
        <div className="flex gap-6">
          <div className="group w-10 h-10 rounded-full flex items-center justify-center p-2 bg-dgray hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <>
              <svg
                className="fill-white group-hover:fill-dgray transition-all duration-300 ease-in-out"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_72_8981)">
                  <path
                    d="M17.5714 3.69587C16.9286 3.96373 16.2857 4.17801 15.5357 4.23158C16.2857 3.80301 16.8214 3.10658 17.0893 2.30301C16.3929 2.73158 15.6429 2.99944 14.8393 3.16016C14.1964 2.46373 13.2857 2.03516 12.3214 2.03516C10.3929 2.03516 8.78572 3.58873 8.78572 5.57087C8.78572 5.83873 8.83929 6.10659 8.89286 6.37444C5.94643 6.21373 3.375 4.82087 1.60714 2.67801C1.28571 3.21373 1.125 3.80301 1.125 4.44587C1.125 5.67801 1.76786 6.74944 2.67857 7.3923C2.08929 7.3923 1.55357 7.23158 1.07143 6.96373V7.0173C1.07143 8.73158 2.30357 10.1244 3.91071 10.4459C3.58929 10.4994 3.32143 10.553 3 10.553C2.78571 10.553 2.57143 10.553 2.35714 10.4994C2.78571 11.8923 4.125 12.9102 5.625 12.9637C4.44643 13.928 2.89286 14.4637 1.23214 14.4637C0.964286 14.4637 0.642857 14.4637 0.375 14.4102C1.98214 15.3744 3.85714 15.9637 5.83929 15.9637C12.3214 15.9637 15.8571 10.6066 15.8571 5.94587C15.8571 5.78516 15.8571 5.62444 15.8571 5.5173C16.5 4.98158 17.0893 4.3923 17.5714 3.69587Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_72_8981">
                    <rect
                      width="17.1429"
                      height="17.1429"
                      fill="white"
                      transform="translate(0.427734 0.427734)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </>
          </div>

          <div className="group w-10 h-10 rounded-full flex items-center justify-center p-2 bg-dgray hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <>
              <svg
                className="fill-white group-hover:fill-dgray transition-all duration-300 ease-in-out"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_72_8985)">
                  <path
                    d="M8.99749 11.7118C10.4965 11.7118 11.7118 10.4965 11.7118 8.99749C11.7118 7.49843 10.4965 6.2832 8.99749 6.2832C7.49843 6.2832 6.2832 7.49843 6.2832 8.99749C6.2832 10.4965 7.49843 11.7118 8.99749 11.7118Z"
                    fill=""
                  />
                  <path
                    d="M12.3905 0.855469H5.60479C2.98618 0.855469 0.855469 2.98686 0.855469 5.60615V12.3919C0.855469 15.0105 2.98686 17.1412 5.60615 17.1412H12.3919C15.0105 17.1412 17.1412 15.0098 17.1412 12.3905V5.60479C17.1412 2.98618 15.0098 0.855469 12.3905 0.855469ZM8.99833 13.0698C6.75293 13.0698 4.9269 11.2437 4.9269 8.99833C4.9269 6.75293 6.75293 4.9269 8.99833 4.9269C11.2437 4.9269 13.0698 6.75293 13.0698 8.99833C13.0698 11.2437 11.2437 13.0698 8.99833 13.0698ZM13.7483 4.9269C13.3738 4.9269 13.0698 4.6229 13.0698 4.24833C13.0698 3.87375 13.3738 3.56975 13.7483 3.56975C14.1229 3.56975 14.4269 3.87375 14.4269 4.24833C14.4269 4.6229 14.1229 4.9269 13.7483 4.9269Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_72_8985">
                    <rect
                      width="17.1429"
                      height="17.1429"
                      fill=""
                      transform="translate(0.427734 0.427734)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </>
          </div>

          <div className="group w-10 h-10 rounded-full flex items-center justify-center p-2 bg-dgray hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <>
              <svg
                className="fill-white group-hover:fill-dgray transition-all duration-300 ease-in-out"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_72_8995)">
                  <path
                    d="M17.5357 2.23341C17.5219 2.17014 17.4916 2.11167 17.4478 2.06395C17.4041 2.01623 17.3484 1.98098 17.2866 1.9618C17.0615 1.9174 16.8286 1.93405 16.6121 2.01001C16.6121 2.01001 1.5923 7.40841 0.734626 8.00626C0.549269 8.13484 0.487661 8.2093 0.457126 8.29769C0.308733 8.72305 0.770519 8.91055 0.770519 8.91055L4.64159 10.1722C4.70698 10.1835 4.7741 10.1794 4.83766 10.1604C5.71838 9.6043 13.6978 4.56537 14.1591 4.39609C14.2314 4.37412 14.285 4.39609 14.2732 4.44966C14.0846 5.09573 7.19373 11.2195 7.1557 11.257C7.13721 11.2721 7.12268 11.2916 7.11335 11.3136C7.10402 11.3356 7.10016 11.3596 7.10213 11.3834L6.74213 15.1607C6.74213 15.1607 6.59105 16.3393 7.76748 15.1607C8.60159 14.3255 9.40195 13.6345 9.8032 13.2986C11.1344 14.2173 12.5669 15.2336 13.1846 15.7629C13.2883 15.8635 13.4111 15.9423 13.5459 15.9944C13.6806 16.0465 13.8245 16.0709 13.9689 16.0661C14.5582 16.0436 14.7189 15.3991 14.7189 15.3991C14.7189 15.3991 17.4553 4.38751 17.5475 2.91162C17.5561 2.76698 17.5684 2.6743 17.5694 2.57519C17.5743 2.46024 17.563 2.34518 17.5357 2.23341Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_72_8995">
                    <rect
                      width="17.1429"
                      height="17.1429"
                      fill=""
                      transform="translate(0.427734 0.427734)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </>
          </div>

          <div className="group w-10 h-10 rounded-full flex items-center justify-center p-2 bg-dgray hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <>
              <svg
                className="fill-white group-hover:fill-dgray transition-all duration-300 ease-in-out"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_72_8999)">
                  <path
                    d="M7.10334 17.0363V10.072H4.71289V6.8577H7.10334V4.61305C7.10334 2.16793 8.65128 0.964844 10.8325 0.964844C11.8773 0.964844 12.7753 1.04263 13.037 1.0774V3.63269L11.5242 3.63338C10.3379 3.63338 10.07 4.19708 10.07 5.02426V6.8577H13.2843L12.2129 10.072H10.07V17.0363H7.10334Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_72_8999">
                    <rect
                      width="17.1429"
                      height="17.1429"
                      fill=""
                      transform="translate(0.427734 0.427734)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </>
          </div>
        </div>
      </div>

      <motion.div className=" overflow-hidden z-[-1] w-full absolute bottom-0 flex items-end justify-center">
        <div className="flex items-center justify-center h-[998px]">
          <Image layout="fill" objectFit="cover" alt="" src="/bg/glow.png" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
