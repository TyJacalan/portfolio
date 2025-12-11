import { useState } from "react";
import { motion } from "framer-motion";

import FadeInWords from "@/components/Animations/FadeInWords";

const serviceDescriptions = {
  ideation:
    "I help you refine ideas, define functionality, and shape a clear direction.",
  development: "Custom, secure websites designed to support your goals.",
  consultation: "Technical guidance on tools, systems, and long-term planning.",
  optimization: "Improving performance, speed, and overall user experience.",
  seo: "Boosting visibility, organic traffic, and search performance.",
};

const Services = () => {
  const [selected, setSelected] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="h-fit w-full flex flex-col"
    >
      <span className="w-fit uppercase font-roboto text-xs text-primary px-2 bg-tertiary shadow-md">
        Click each service below to find out more &#9660;
      </span>

      <div className="flex flex-row items-center justify-start gap-1 border-t border-secondary text-xs">
        <h2 onClick={() => setSelected("ideation")} className="cursor-pointer">
          &#9679; Ideation
        </h2>

        <h2
          onClick={() => setSelected("development")}
          className="font-bold uppercase cursor-pointer"
        >
          &#9711; Website Development &#9679;
        </h2>

        <h2
          onClick={() => setSelected("consultation")}
          className="font-bitcount cursor-pointer"
        >
          Technology Consultation
        </h2>

        <h2
          onClick={() => setSelected("optimization")}
          className="cursor-pointer"
        >
          &#9711; Website optimization &#9679;
        </h2>

        <h2
          onClick={() => setSelected("seo")}
          className="font-roboto font-bold cursor-pointer"
        >
          Search Engine Optimization [SEO]
        </h2>
      </div>

      <div
        className="flex items-center h-6 text-xs border-t border-secondary bg-accent overflow-hidden"
      >
        {selected && <FadeInWords key={selected}>{serviceDescriptions[selected]}</FadeInWords>}
      </div>
    </motion.div>
  );
};

export default Services;
