import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const textClassName = "absolute top-5 w-full flex justify-center bg-primary";

  return (
    <div className="relative h-full w-full font-bitcount mx-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className={`${textClassName} z-100`}
      >
        About
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 30 }}
        transition={{ delay: 1.2 }}
        className={`${textClassName} z-10`}
      >
        Services
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 60 }}
        transition={{ delay: 1.4 }}
        className={`${textClassName} z-0`}
      >
        Projects
      </motion.div>
    </div>
  );
};

export default Navbar;
