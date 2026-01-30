"use client";

import { useEffect, useState } from "react";

// Night = 6pm (18:00) until 6am (06:00). Morning = 6am–6pm.
function isNightTime(): boolean {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6;
}

type PreviewMode = "auto" | "night" | "morning";

export default function SleepingSheep() {
  const [isNight, setIsNight] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [preview, setPreview] = useState<PreviewMode>("auto");

  useEffect(() => {
    setMounted(true);
    const update: () => void = () => setIsNight(isNightTime());
    update();
    const id = setInterval(update, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const showNight = preview === "auto" ? isNight : preview === "night";

  if (!mounted) return null;

  return (
    <div
      className="flex flex-col items-center justify-center gap-2 text-[var(--color-hack-text-soft)]"
      aria-hidden
    >
      {showNight ? (
        <>
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
        </>
      ) : (
        <>
          <span className="text-4xl sm:text-5xl select-none" role="img" aria-label="Rooster">
            🐓
          </span>
          <span className="text-xs uppercase tracking-wider text-[var(--color-hack-muted)]">
            Morning
          </span>
        </>
      )}

      {/* Temporary: test sheep/rooster — remove when done testing
      <div className="flex gap-1 mt-1">
        <button
          type="button"
          onClick={() => setPreview(preview === "night" ? "auto" : "night")}
          className="text-xs px-2 py-1 rounded border border-[var(--color-hack-muted)] text-[var(--color-hack-muted)] hover:border-[var(--color-hack-accent)] hover:text-[var(--color-hack-accent)] transition-colors"
        >
          🐑 Sheep
        </button>
        <button
          type="button"
          onClick={() => setPreview(preview === "morning" ? "auto" : "morning")}
          className="text-xs px-2 py-1 rounded border border-[var(--color-hack-muted)] text-[var(--color-hack-muted)] hover:border-[var(--color-hack-accent)] hover:text-[var(--color-hack-accent)] transition-colors"
        >
          🐓 Rooster
        </button>
      </div> */}
    </div>
  );
}
