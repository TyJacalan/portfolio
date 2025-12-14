"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("./Clock"), { ssr: false });

const GeospatialInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="relative h-full w-full flex flex-row"
    >
      <div className="flex-1 z-100 absolute -bottom-20 right-0 pointer-events-none">
        <Image
          src="/misc/cebu-map.png"
          alt="topographic map of Cebu Island"
          height={500}
          width={200}
          priority
          loading="eager"
          fetchPriority="high"
          className="object-contain z-100"
        />
      </div>
      <div className="z-0 w-full flex flex-col items-start justify-center sm:gap-2 md:gap-4 p-4 text-vertical">
        <p>Cebu City</p>
        <p>Philippines</p>
      </div>
      <div className="z-0 lg:w-64 xl:w-96 font-russo font-bold text-6xl md:text-7xl lg:8xl xl:text-9xl text-outline break-all overflow-hidden text-primary opacity-50">
        <Clock />
      </div>
    </motion.div>
  );
};

export default GeospatialInformation;
