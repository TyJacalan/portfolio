"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FadeInFromYAxis = ({ direction = "top", children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: `${direction === 'top' ? '-50%' : '50%'}`,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: "tween",
        duration: 1,
        delay: 1.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromYAxis;
