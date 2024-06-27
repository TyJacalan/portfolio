"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import GrowingLine from "@/components/GrowingLine";
import Technologies from "@/components/Technologies";

const Hero = () => {
  return (
    <section id="hero" className="container h-screen flex md:justify-center">
      <div className="relative h-[95%] w-full grid grid-cols-12 grid-rows-12">
        <GrowingLine variant="top" duration={2} />
        <div className="relative col-span-9 sm:col-span-10 row-span-6 h-full w-full flex items-end p-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 2,
              delay: 1.2,
            }}
          >
            <h1 className="font-thin text-7xl md:text-9xl">Ty Jacalan</h1>
            <h2 className="text-xl md:text-3xl text-muted">Programmer</h2>
          </motion.div>
          <GrowingLine variant="right" />
          <GrowingLine variant="left" />
        </div>
        <div className="relative col-span-3 sm:col-span-2 row-span-6 h-full w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 2,
              delay: 1.2,
            }}
            className="flex flex-col items-start justify-center sm:gap-2 md:gap-4 p-4 text-vertical"
          >
            <Link href="https://github.com/TyJacalan" target="_blank">
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/ty-j-2772281a4/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </motion.div>
          <GrowingLine variant="right" />
        </div>
        <div className="relative col-span-12 row-span-1 h-full w-full flex items-center">
          <Technologies />
          <GrowingLine variant="top" />
          <GrowingLine variant="left" />
          <GrowingLine variant="right" />
          <GrowingLine variant="bottom" duration={2} />
        </div>
        <div className="relative col-span-8 row-span-5 h-full w-full">
          <GrowingLine variant="left" duration={2} />
          <GrowingLine variant="right" />
        </div>
        <div className="relative col-span-4 row-span-5 h-full w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "tween",
              duration: 2,
              delay: 1.2,
            }}
            className="flex flex-col items-start justify-center sm:gap-2 md:gap-4 p-4 text-vertical"
          >
            <p>Cebu City</p>
            <p>Philippines</p>
          </motion.div>
          <GrowingLine variant="right" />
        </div>
        <GrowingLine variant="bottom" duration={2} />
      </div>
    </section>
  );
};

export default Hero;
