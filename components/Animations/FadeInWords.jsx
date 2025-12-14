"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { },
  show: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const word = {
  hidden: { y: 20 },
  show: {
    y: 0,
    transition: { duration: 0.1 },
  },
};

const FadeInWords = ({ children }) => {
  const words = children.split(" ");

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className="inline-block"
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className="inline-block mr-1"
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default FadeInWords;

