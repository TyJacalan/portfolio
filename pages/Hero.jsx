"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import DailyTechnologies from "@/components/DailyTechnologies";
import GrowingLine from "@/components/GrowingLine";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";

import FadeIn from "@/components/Animations/FadeIn";
import FadeInLetters from "@/components/Animations/FadeInLetters";

const Hero = () => {

  const textClassName = "absolute top-5 w-full flex justify-center bg-primary";

  return (
    <section
      id="hero"
      className="container h-screen flex items-center md:justify-center px-2"
    >
      <div className="relative h-[95%] w-full grid grid-cols-12 grid-rows-12">
        <GrowingLine variant="top" />
        <div className="relative col-span-6 sm:col-span-8 row-span-6 h-full w-full flex items-end p-4 gap-4">
          <FadeInLetters
            className="font-thin text-7xl md:text-9xl"
            direction="top"
            distance={400}
          >
            Tyrone
          </FadeInLetters>
          <FadeInLetters
            className="font-thin text-7xl md:text-9xl"
            direction="left"
            distance={500}
          >
            Jacalan
          </FadeInLetters>
          <GrowingLine variant="right" delay={0.8} />
          <GrowingLine variant="left" />
        </div>
        <div className="relative col-span-3 sm:col-span-2 row-span-6 h-full w-full flex justify-center">
          <Navbar />
          <GrowingLine variant="right" />
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
            <Link
              href="https://github.com/TyJacalan"
              target="_blank"
              className="hover:tracking-wider hover:scale-105 transition-transform"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/ty-j-2772281a4/"
              target="_blank"
              className="hover:tracking-wider hover:scale-105 transition-transform"
            >
              LinkedIn
            </Link>
          </motion.div>
          <GrowingLine variant="right" delay={1.2} duration={0.8} />
        </div>
        <div className="relative col-span-12 row-span-1 h-full w-full flex items-center">
          <Technologies />
          <GrowingLine variant="top" delay={1.2} duration={0.8} />
          <GrowingLine variant="left" delay={1.2} duration={0.8} />
          <GrowingLine variant="right" delay={2} duration={1} />
          <GrowingLine variant="bottom" delay={2} duration={1} />
        </div>
        <div className="relative col-span-8 row-span-5 h-full w-full p-4">
          <motion.div
            initial={{ opacity: 0, translateY: "-25%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{
              delay: 2,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-4"
          >
            <p>
              I enjoy building applications that bring value to people&apos;s
              lives, whether it&apos;s in niche communities or to an audience of
              hundreds of thousands of people.
            </p>
            <div className="flex flex-row flex-wrap gap-2 items-center">
              <p>I use daily </p>
              <DailyTechnologies />
            </div>
          </motion.div>
          <GrowingLine variant="left" delay={2} duration={1} />
          <GrowingLine variant="right" delay={2.6} duration={0.4} />
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
          <GrowingLine variant="right" delay={2.8} duration={1} />
        </div>
        <GrowingLine variant="bottom" delay={1.2} duration={1.8} />
      </div>
    </section>
  );
};

export default Hero;
