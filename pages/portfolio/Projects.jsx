"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { GrowingLine } from "@/components/Common";

import AvionFi from "@/components/Projects/AvionFi";
import SkillSetGo from "@/components/Projects/SkillSetGo";
import Rooms from "@/components/Projects/Rooms";
import CebuAsap from "@/components/Projects/CebuAsap";
import Erp from "@/components/Projects/Erp";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container h-screen flex flex-col justify-center items-center gap-4 px-2"
    >
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full flex flex-row gap-2 items-end justify-start"
      >
        <span className="text-xl md:text-2xl text-muted">02 / </span>
        <h2 className="text-3xl md:text-6xl font-thin">Projects</h2>
      </motion.div>
      <div className="relative h-[70%] w-full grid grid-cols-12 grid-rows-12">
        <GrowingLine variant="top" />
        <div className="relative col-span-8 row-span-7 overflow-hidden">
          <AvionFi />
          <GrowingLine variant="right" delay={0.8} duration={1.4} />
          <GrowingLine variant="bottom" delay={0.4} duration={1.8} />
        </div>
        <div className="relative col-span-4 row-span-4 overflow-hidden">
          <SkillSetGo />
        </div>
        <div className="relative col-span-4 row-span-8 overflow-hidden">
          <Rooms />
          <GrowingLine variant="top" delay={1.2} duration={0.8} />
        </div>
        <div className="relative col-span-4 row-span-5 overflow-hidden">
          <CebuAsap />
          <GrowingLine variant="right" delay={1.2} duration={1.8} />
        </div>
        <div className="relative col-span-4 row-span-5 overflow-hidden">
          <Erp />
          <GrowingLine variant="right" delay={2} duration={1} />
        </div>
        <GrowingLine variant="left" />
        <GrowingLine variant="right" delay={1.2} duration={1.8} />
        <GrowingLine variant="bottom" delay={1.2} duration={1.8} />
      </div>
    </section>
  );
};

export default Projects;
