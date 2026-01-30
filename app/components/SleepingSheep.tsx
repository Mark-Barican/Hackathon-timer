"use client";

import { useEffect, useState } from "react";

// Night = 6pm (18:00) until 6am (06:00). Show sheep only at night.
function isNightTime(): boolean {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6;
}

export default function SleepingSheep() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setShow(isNightTime());
    update();
    const id = setInterval(update, 60 * 1000); // recheck every minute
    return () => clearInterval(id);
  }, []);

  if (!mounted || !show) return null;

  return (
    <div
      className="flex flex-col items-center justify-center gap-1 text-[var(--color-hack-text-soft)]"
      aria-hidden
    >
      <div className="relative inline-flex items-center justify-center">
        <span className="text-4xl sm:text-5xl select-none" role="img" aria-label="Sleeping sheep">
          🐑
        </span>
        <span
          className="absolute -top-2 -right-4 text-lg sm:text-xl opacity-80 animate-pulse"
          style={{ animationDuration: "2s" }}
        >
          zzz
        </span>
      </div>
      <span className="text-xs uppercase tracking-wider text-[var(--color-hack-muted)]">
        Night mode
      </span>
    </div>
  );
}
