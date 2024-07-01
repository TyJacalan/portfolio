import { useState } from "react";

const Tooltip = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const tooltipContent = children.find(
    (child) => child.type.displayName === "TooltipContent",
  );

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isOpen && tooltipContent && (
        <div className="absolute z-50 bg-foreground text-primary text-xs px-2 py-1 rounded">
          {tooltipContent.props.children}
        </div>
      )}
    </div>
  );
};

Tooltip.Trigger = ({ children, className }) => {
  return <div className={`tooltip-trigger ${className || ""}`}>{children}</div>;
};

Tooltip.Trigger.displayName = "TooltipTrigger";

Tooltip.Content = () => {
  return null;
};

Tooltip.Content.displayName = "TooltipContent";

export default Tooltip;
