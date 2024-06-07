"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "../ImageContainer";
import { PrimaryBoxButton } from "../Buttons";

interface Props {
  text: string;
}

export const CustomerStories = ({ 
  text
}: Props) => {
  const target = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.5], [1080, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.section
      ref={target}
      className="w-full flex flex-col gap-12 items-center p-4 sm:px-6 md:px-12 max-w-[1920px] bg-black text-white"
    >
      <div className="flex flex-col gap-6 items-center justify-center max-w-[800px] text-center py-12">
        <motion.div className="w-16 h-16 rounded-full overflow-hidden">
          <ImageContainer src="/user/user.png" />
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.h3
            className="text-2xl font-semibold"
            style={{ x, opacity }}
          >
            {text}
          </motion.h3>
          <motion.p className="text-lg font-medium" style={{ opacity }}>
            Davio White
          </motion.p>
          <motion.span className="text-sm text-gray-400" style={{ opacity }}>
            Chief of Staff, Pallet
          </motion.span>
        </div>
        <motion.div style={{ opacity }}>
          <PrimaryBoxButton href="/signup" enabled={true} form={false}>
            Try now
          </PrimaryBoxButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CustomerStories;
