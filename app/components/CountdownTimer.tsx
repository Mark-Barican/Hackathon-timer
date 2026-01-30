"use client";

import { useEffect, useState } from "react";

// February 1, 2026 at 10:00 AM in the user's local timezone (system time)
// Date(year, monthIndex, day, hour, minute) — month 0 = Jan, 1 = Feb
function getTargetDate(): Date {
  return new Date(2026, 1, 1, 10, 0, 0, 0);
}

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

function getTimeLeft(now: Date): TimeLeft {
  const target = getTargetDate();
  const totalMs = Math.max(0, target.getTime() - now.getTime());
  const seconds = Math.floor((totalMs / 1000) % 60);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds, totalMs };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(new Date())
  );

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div
            key={label}
            className="glass-card rounded-2xl p-4 sm:p-6"
          >
            <div className="h-14 sm:h-18 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl font-bold tabular-nums text-[var(--color-hack-text-soft)]">
                --
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[var(--color-hack-muted)] mt-2 text-center">
              {label}
            </p>
          </div>
        ))}
      </div>
    );
  }

  const isOver = timeLeft.totalMs === 0;

  if (isOver) {
    return (
      <div className="glass-strong rounded-2xl p-8 sm:p-12 text-center glow-cta border-[var(--color-hack-success)]/30">
        <p className="text-2xl sm:text-3xl font-bold text-[var(--color-hack-success)] mb-2">
          Time&apos;s up.
        </p>
        <p className="text-[var(--color-hack-text-soft)]">
          The hackathon has ended. Submissions are closed.
        </p>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days", pad: false },
    { value: timeLeft.hours, label: "Hours", pad: true },
    { value: timeLeft.minutes, label: "Minutes", pad: true },
    { value: timeLeft.seconds, label: "Seconds", pad: true },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
      {units.map(({ value, label, pad: shouldPad }) => (
        <div
          key={label}
          className="glass-card rounded-2xl p-4 sm:p-6 glow-accent/50 transition-shadow"
        >
          <div className="h-14 sm:h-18 flex items-center justify-center">
            <span
              className="text-3xl sm:text-5xl font-bold tabular-nums text-[var(--color-hack-accent-bright)] font-[family-name:var(--font-mono)] animate-tick"
              key={`${label}-${value}`}
            >
              {isOver ? "00" : shouldPad ? pad(value) : String(value)}
            </span>
          </div>
          <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[var(--color-hack-muted)] mt-2 text-center">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
