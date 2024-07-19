import React from "react";

const Chip = ({ children, ...props }) => {
  return (
    <div
      className="px-2 py-1 bg-secondary text-accent rounded-md text-nowrap text-xs"
      {...props}
    >
      {children}
    </div>
  );
};

export default Chip;
