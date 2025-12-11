"use client";

import React from "react";
import { motion } from "framer-motion";

const createLetterVariant = (direction = "right", distance) => {
  let hidden = {};
  switch (direction) {
    case "right":
      hidden = { opacity: 0, x: distance };
      break;
    case "left":
      hidden = { opacity: 0, x: -distance };
      break;
    case "top":
      hidden = { opacity: 0, y: -distance };
      break;
    case "bottom":
      hidden = { opacity: 0, y: distance };
      break;
    default:
      hidden = { opacity: 0, x: 0 };
  }
  return {
    hidden,
    show: {
      opacity: 1,
      x: hidden.x ? 0 : undefined,
      y: hidden.y ? 0 : undefined,
      transition: { type: "tween", duration: 1, delay: 1.2 },
    },
  };
};

const FadeInLetters = ({ className = "", direction = "right", distance = 20, children }) => {
  const letterVariant = createLetterVariant(direction, distance);

  return (
    <motion.div initial="hidden" whileInView="show" className="flex">
      {React.Children.map(children, (child) =>
        typeof child === "string"
          ? child.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariant} className={className}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))
          : child
      )}
    </motion.div>
  );
};

export default FadeInLetters;

