import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
}

const ImageContainer = ({ src }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const getDivWidth = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        setHeight(width);
      }
    };

    getDivWidth();

    window.addEventListener("resize", getDivWidth);

    return () => {
      window.removeEventListener("resize", getDivWidth);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "relative",
        width: "100%",
        height: height,
        borderRadius: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid rgba(255 255 255 0)",
        transition: "all 0.3 ease-in-out",
      }}
      ref={ref}
      className="group"
    >
      <Image layout="fill" objectFit="cover" alt="" src={src} />
    </motion.div>
  );
};

export default ImageContainer;
