"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import Image from "next/image";

const Hero = () => {
  const target = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <>
      <motion.section
        id="home"
        ref={target}
        className="relative w-full h-[90vh] xl:h-[100vh] max-w-[1920px] flex flex-col gap-4 items-center justify-start text-center px-4 sm:px-6 md:px-12 mt-40"
      >
        <motion.div className="px-12 flex flex-col gap-4 items-center justify-center max-w-[920px]">
          <motion.div className="flex flex-col items-center" style={{ opacity, rotate, scale }}>
            <div className="flex gap-0 sm:gap-4 items-center justify-center flex-wrap">
              <h1>Generate,</h1>
              <h1 className="gradient_text">Create,</h1>
            </div>
            <h1>Authenticate</h1>
          </motion.div>

          <motion.p style={{ opacity }}>
            Transform your agency's content with AI-powered photo and video generators ready to create super realistic content.
          </motion.p>
        </motion.div>
        <div className="flex gap-4">
          <PrimaryButton href="/signup">Try Now</PrimaryButton>
          <SecondaryButton href="https://discord.gg/sDp7s7JXH6">Request a Demo</SecondaryButton>
        </div>
        <motion.div className="relative z-10 w-full flex flex-col justify-center items-center">
          <motion.div
            className="absolute mr-[-32px] top-[64px] flex items-center justify-center"
            style={{ scale: scaleImage, opacity: imageOpacity }}
          >
            <Image
              width={1280}
              height={960}
              alt="Hero Image"
              src="/appScreens/content-deepfakes.png"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
