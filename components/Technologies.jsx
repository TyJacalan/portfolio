import React from "react";
import { motion } from "framer-motion";

import { RiNextjsLine } from "react-icons/ri";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiRubyonrails,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";

const technologyItems = [
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
    name: "Ruby on Rails",
    logo: <SiRubyonrails />,
  },
  {
    name: "Postgresql",
    logo: <SiPostgresql />,
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
    name: "Git",
    logo: <SiGit />,
  },
];

const Technologies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: "100%" }}
      transition={{
        type: "tween",
        delay: 1.2,
        duration: 2,
        delay: 1.2,
      }}
      className="flex p-4 overflow-hidden"
    >
      <ul className="flex flex-row flex-nowrap items-center justify-start gap-4 text-lg md:text-2xl lg:text-4xl">
        {technologyItems.map((item, index) => (
          <li key={index}>{item.logo}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Technologies;
