import React from "react";
import { motion } from "framer-motion";

import { RiNextjsLine } from "react-icons/ri";
import {
  SiCss3,
  SiDigitalocean,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiNeovim,
  SiPostgresql,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";

import { useBreakpointMultiplier } from "@/utils/hooks";

const technologyItems = [
  {
    name: "Ruby",
    logo: <SiRuby />,
  },
  {
    name: "Ruby on Rails",
    logo: <SiRubyonrails />,
  },
  {
    name: "Kotlin",
    logo: <SiKotlin />,
  },
  {
    name: "JavaScript",
    logo: <SiJavascript />,
  },
  {
    name: "ReactJs",
    logo: <SiReact />,
  },
  {
    name: "NextJs",
    logo: <RiNextjsLine />,
  },
  {
    name: "HTML5",
    logo: <SiHtml5 />,
  },
  {
    name: "CSS3",
    logo: <SiCss3 />,
  },
  {
    name: "Tailwind CSS",
    logo: <SiTailwindcss />,
  },
  {
    name: "Sass",
    logo: <SiSass />,
  },
  {
    name: "Postgresql",
    logo: <SiPostgresql />,
  },
  {
    name: "Sql",
    logo: <GrMysql />,
  },
  {
    name: "Git",
    logo: <SiGit />,
  },
  {
    name: "Digital Ocean",
    logo: <SiDigitalocean />,
  },
  {
    name: "Azure",
    logo: <VscAzure />,
  },
  {
    name: "Neovim",
    logo: <SiNeovim />,
  },
];

const Technologies = () => {
  const dynamicXPosition = useBreakpointMultiplier();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="hidden md:flex h-full w-full px-4 overflow-hidden"
    >
      <ul className="relative text-lg md:text-2xl lg:text-4xl">
        {technologyItems.map((item, index) => (
          <motion.li
            initial={{ x: 0 }}
            whileInView={{ x: dynamicXPosition * index }}
            transition={{
              type: "tween",
              duration: 0.8 * (index / 10),
              delay: 0.4,
            }}
            key={item.name}
            className="absolute top-1/2 -translate-y-1/2 bg-primary"
            style={{ zIndex: index }}
          >
            {item.logo}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Technologies;
