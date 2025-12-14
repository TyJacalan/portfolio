"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { GrowingLine } from "@/components/Common";
import {
  DailyTechnologies,
  GeospatialInformation,
  Navbar,
  Technologies,
  Services,
} from "@/components";

import FadeIn from "@/components/Animations/FadeIn";
import FadeInLetters from "@/components/Animations/FadeInLetters";

const Hero = () => {
  const serviceDescriptions = {
    ideation:
      "I help you refine your concepts, map out functionality, and shape a clear product direction.",
    development:
      "Custom-designed, secure, and scalable websites built to fit your business goals.",
    consultation:
      "Technical guidance to help you choose the right tools, architecture, and long-term roadmap.",
    optimization:
      "Improving site performance, speed, user experience, and overall efficiency.",
    seo: "Strategies to improve search visibility, organic traffic, and long-term discoverability.",
  };

  return (
    <section
      id="hero"
      className="container h-screen flex items-center md:justify-center px-2 text-tertiary"
    >
      <div className="relative h-[95%] w-full grid grid-cols-12 grid-rows-12">
        <GrowingLine variant="top" />
        <div className="relative col-span-6 sm:col-span-8 row-span-6 h-full w-full flex items-end p-4 gap-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/misc/contour-pattern.png"
              alt="contour pattern"
              height={500}
              width={414}
              loading="lazy"
              fetchPriority="low"
              className="absolute top-15 -right-40 rotate-300 filter grayscale opacity-20"
            />
          </motion.div>
          <NameSection />
          <GrowingLine variant="right" delay={0.2} />
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
              duration: 1,
              delay: 0.5,
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
          <GrowingLine variant="right" delay={0.4} duration={0.2} />
        </div>
        <div className="relative col-span-12 row-span-1 h-full w-full flex items-center">
          <Technologies />
          <GrowingLine variant="top" delay={0.4} duration={0.2} />
          <GrowingLine variant="left" delay={0.4} duration={0.2} />
          <GrowingLine variant="right" delay={0.8} duration={0.4} />
          <GrowingLine variant="bottom" delay={0.8} duration={0.4} />
        </div>
        <div className="relative col-span-8 row-span-5 h-full w-full flex flex-col justify-end p-4">
          <DescriptionSection />
          <ServicesSection />
          <DetailsSection />
          <GrowingLine variant="left" delay={0.8} duration={0.2} />
          <GrowingLine variant="right" delay={1.2} duration={0.1} />
        </div>
        <div className="relative col-span-4 row-span-5 h-full w-full flex justify-center overflow-hidden">
          <GeospatialInformation />
          <GrowingLine variant="right" delay={1.6} duration={0.2} />
        </div>
        <GrowingLine variant="bottom" delay={0.4} duration={1} />
      </div>
    </section>
  );
};

export default Hero;

const NameSection = () => {
  return (
    <div className="absolute bottom-5 left-5 w-full flex flex-row gap-8">
      <FadeInLetters
        className="font-thin text-7xl md:text-9xl"
        direction="top"
        distance={400}
      >
        Ty
      </FadeInLetters>
      <FadeInLetters
        className="font-thin text-7xl md:text-9xl"
        direction="left"
        distance={500}
      >
        Jacalan
      </FadeInLetters>
    </div>
  );
};

const DescriptionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-25%" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{
        delay: 0.4,
        ease: "easeInOut",
      }}
      className="absolute top-5 right-5 w-[30%] flex flex-col gap-4"
    >
      <p className="text-sm">
        I craft premium, tailor-made, and secure websites for businesses and
        entrepreneurs designed to convert clients, boost revenue, and stand-out
        in an ever-competing market.
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      className="h-fit w-full flex flex-col"
    >
      <Services />
    </motion.div>
  );
};

const DetailsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="h-20 w-full flex flex-row items-center justify-center gap-1 border border-secondary"
    >
      <FadeInLetters className="font-russo text-6xl uppercase">
        SAY HELLO!
      </FadeInLetters>
      <div className="flex flex-col p-1 justify-center">
        <FadeInLetters className="font-roboto text-sm">
          tyrone.jacalan@pm.me
        </FadeInLetters>
        <FadeInLetters className="font-bitcount">
          &#43;63 &#40;976&#41; 204 2644
        </FadeInLetters>
      </div>
      <div className="h-full flex flex-row items-center justify-center gap-1">
        <div className="flex items-center justify-center h-full w-4 overflow-hidden">
          <div className="rotate-270 font-bold">
            <FadeInLetters direction="top" className="text-[0.5rem] uppercase">
              DEVELOPING
            </FadeInLetters>
          </div>
        </div>
        <FadeInLetters className="font-russo text-7xl leading-0 uppercase">
          SINCE
        </FadeInLetters>
        <div className="flex flex-col -space-y-3 mt-2">
          <FadeInLetters className="font-bitcount text-4xl">20</FadeInLetters>
          <FadeInLetters className="font-bitcount text-4xl">24</FadeInLetters>
        </div>
      </div>
    </motion.div>
  );
};
