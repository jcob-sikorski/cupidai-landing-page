"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import Link from "next/link";

const page = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "about", "services", "contact", "faqs"]; // Add your section IDs here
      const scrollPosition = window.scrollY; // Adjust this value if necessary

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const [activeSection, setActiveSection] = useState("home");

  // const handleSection = (
  //   event: React.MutableRefObject<HTMLDivElement | null>,
  //   section: string
  // ) => {
  //   setSection(event);
  //   setActiveSection(section);
  // };
  return (
    <div className="z-50 fixed top-0 left-0 right-0 w-[100vw] p-2 sm:px-4 sm:py-4 md:px-6 md:px-6 lg:px-12 flex items-center justify-center">
      <div className="w-full max-w-[1824px] pl-3 pr-2 py-2 sm:p-4 gap-8 flex items-center justify-between rounded-full border-[1px] border-white border-opacity-10 bg-dgray bg-opacity-40 backdrop-blur-md">
        <div className="flex w-[104px] md:w-fit h-[24px] md:h-[36px] items-center justify-center">
          <Image width={160} height={36} alt="" src="/logo.svg" />
        </div>

        <div className="hidden lg:flex items-center gap-8 w-fit">
          <Link href={"#home"}>
            <div className="cursor-pointer">
              <span
                className={`text-sm ${
                  activeSection === "home"
                    ? "text-text font-bold"
                    : "text-textd"
                } hover:text-text transition-all duration-300 ease-in-out`}
              >
                Home
              </span>
            </div>
          </Link>

          <Link href={"#about"}>
            <div className="cursor-pointer">
              <span
                className={`text-sm ${
                  activeSection === "about"
                    ? "text-text font-bold"
                    : "text-textd"
                } hover:text-text transition-all duration-300 ease-in-out`}
              >
                About
              </span>
            </div>
          </Link>

          <Link href={"#services"}>
            <div className="cursor-pointer">
              <span
                className={`text-sm ${
                  activeSection === "services"
                    ? "text-text font-bold"
                    : "text-textd"
                } hover:text-text transition-all duration-300 ease-in-out`}
              >
                Services
              </span>
            </div>
          </Link>

          <Link href={"#faqs"}>
            <div className="cursor-pointer">
              <span
                className={`text-sm ${
                  activeSection === "faqs"
                    ? "text-text font-bold"
                    : "text-textd"
                } hover:text-text transition-all duration-300 ease-in-out`}
              >
                FAQ
              </span>
            </div>
          </Link>
        </div>

        <div className="flex gap-2 items-center w-fit">
          <SecondaryButton href="/login">Log in</SecondaryButton>
          <PrimaryButton href="/signup">Sing up</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default page;
