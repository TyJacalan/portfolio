"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{
      type: "tween",
      duration: 2,
      delay: 1.2,
    }}
    >
    {children}
    </motion.div>
  )
}

export default FadeIn;
