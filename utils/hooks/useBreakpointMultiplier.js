"use client";

import { useEffect, useState } from "react";

const useBreakpointMultiplier = () => {
  const [multiplier, setMultiplier] = useState(30);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setMultiplier(50);
      else if (window.innerWidth >= 768) setMultiplier(40);
      else setMultiplier(30);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return multiplier;
};

export default useBreakpointMultiplier;
