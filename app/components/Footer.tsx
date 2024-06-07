"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Divider } from "./Divider";
import Link from "next/link";

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


        <Link href="https://discord.gg/sDp7s7JXH6" passHref>
          <div className="group w-10 h-10 rounded-full flex items-center justify-center p-2 bg-dgray hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
            <svg
              className="fill-white group-hover:fill-dgray transition-all duration-300 ease-in-out"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.074.035 13.751 13.751 0 00-.601 1.243 18.835 18.835 0 00-5.632 0 13.668 13.668 0 00-.602-1.243.07.07 0 00-.074-.035c-1.731.317-3.394.829-4.885 1.515a.063.063 0 00-.029.025C.533 9.39-.319 14.322.099 19.201a.076.076 0 00.027.053c2.052 1.507 4.035 2.422 5.992 3.029a.071.071 0 00.078-.027 13.575 13.575 0 001.116-1.805.07.07 0 00-.041-.099 11.785 11.785 0 01-1.696-.8.07.07 0 01-.007-.118c.114-.086.229-.178.337-.272a.07.07 0 01.073-.01c3.565 1.627 7.418 1.627 10.938 0a.07.07 0 01.075.009c.108.094.223.186.337.272a.07.07 0 01-.006.118 11.443 11.443 0 01-1.697.799.07.07 0 00-.04.1c.342.64.725 1.268 1.116 1.804a.07.07 0 00.078.028c1.957-.607 3.94-1.522 5.992-3.029a.077.077 0 00.027-.053c.5-5.119-.838-10.014-4.305-14.807a.061.061 0 00-.03-.025zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.95-2.418 2.157-2.418 1.207 0 2.174 1.085 2.156 2.418 0 1.334-.95 2.419-2.156 2.419zm7.958 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.95-2.418 2.156-2.418 1.207 0 2.174 1.085 2.156 2.418 0 1.334-.95 2.419-2.156 2.419z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>


          {/* <div className="group w-10 h-10 rounded-full flex items-center justify-center p-2 bg-dgray hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
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
          </div> */}

          {/* <div className="group w-10 h-10 rounded-full flex items-center justify-center p-2 bg-dgray hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
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
          </div> */}
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
