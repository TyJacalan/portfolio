"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Clock } from "@/components";

const GeospatialInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="relative h-full w-full flex flex-row"
    >
      <div className="z-100 absolute -bottom-20 right-0 pointer-events-none">
        <Image
          src="/misc/cebu-map.png"
          alt="topographic map of Cebu Island"
          height={500}
          width={200}
          className="object-contain z-100"
        />
      </div>
      <div className="z-0 w-full flex flex-col items-start justify-center sm:gap-2 md:gap-4 p-4 text-vertical">
        <p>Cebu City</p>
        <p>Philippines</p>
      </div>
      <div className="z-0 w-96 font-russo font-bold text-9xl text-outline break-all overflow-hidden text-primary opacity-50">
        <Clock />
      </div>
    </motion.div>
  );
};

export default GeospatialInformation;
