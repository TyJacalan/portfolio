"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const formatter = new Intl.DateTimeFormat([], {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: tz,
      });

      const formatted = formatter.format(now).replace(":", "");

      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
}

