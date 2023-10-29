import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./about.css";
import me from "./../../../public/igor-meltingorange.webp";
import { useRef } from "react";

export const ImageContainer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const moveY = useTransform(scrollYProgress, [0, 0.5, 1], [500, 250, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: scrollYProgress, y: moveY }}
      className="about-image-container"
    >
      <img className="meImg" src={me} alt="me-image" />
    </motion.div>
  );
};
