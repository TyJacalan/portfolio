import { motion } from "framer-motion";

const variants = {
  top: "top-0 left-0 w-full border-t border-t-secondary",
  bottom: "bottom-0 left-0 w-full border-b border-b-secondary",
  right: "top-0 right-0 h-full border-r border-r-secondary",
  left: "top-0 left-0 h-full border-l border-l-secondary",
};

export default function GrowingLine({ variant, duration = 1.2, delay = 0.3 }) {
  const variantClass = variants[variant];

  const isVertical = variant === "right" || variant === "left";

  return (
    <motion.div
      initial={isVertical ? { height: 0 } : { width: 0 }}
      whileInView={isVertical ? { height: "100%" } : { width: "100%" }}
      transition={{
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      }}
      className={`absolute ${variantClass}`}
    ></motion.div>
  );
}
