"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AvionFi from "@/components/Projects/AvionFi";
import SkillSetGo from "@/components/Projects/SkillSetGo";
import Rooms from "@/components/Projects/Rooms";
import CebuAsap from "@/components/Projects/CebuAsap";
import Erp from "@/components/Projects/Erp";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container h-screen flex flex-col justify-center items-center gap-4"
    >
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full sm:w-[750px] flex flex-row gap-2 items-end justify-start"
      >
        <span className="text-xl md:text-2xl text-muted">02 / </span>
        <h2 className="text-3xl md:text-6xl font-thin">Projects</h2>
      </motion.div>
      <div class="h-[60%] w-full sm:w-[750px] grid grid-cols-12 grid-rows-12">
        <div class="col-span-8 row-span-8 p-1">
          <AvionFi />
        </div>
        <div class="col-span-4 row-span-4 p-1">
          <SkillSetGo />
        </div>
        <div class="col-span-4 row-span-8 p-1">
          <Rooms />
        </div>
        <div class="col-span-4 row-span-4 flex p-1">
          <CebuAsap />
        </div>
        <div class="col-span-4 row-span-6 p-1">
          <Erp />
        </div>
      </div>
    </section>
  );
};

export default Projects;
