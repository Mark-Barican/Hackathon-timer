"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

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

function fireCongratulationsConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;
  const colors = ["#0ea5e9", "#38bdf8", "#06b6d4", "#10b981", "#22d3ee"];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    });
  }, 200);
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(new Date())
  );
  const confettiFiredRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const isOver = timeLeft.totalMs === 0;
  useEffect(() => {
    if (isOver && mounted && !confettiFiredRef.current) {
      confettiFiredRef.current = true;
      fireCongratulationsConfetti();
    }
  }, [isOver, mounted]);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-fluid-grid max-w-fluid-sm mx-auto w-full">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div
            key={label}
            className="glass-card rounded-2xl p-fluid-card"
          >
            <div className="h-fluid-cell flex items-center justify-center">
              <span className="text-fluid-display font-bold tabular-nums text-[var(--color-hack-text-soft)]">
                --
              </span>
            </div>
            <p className="text-fluid-sm font-medium uppercase tracking-wider text-[var(--color-hack-muted)] mt-2 text-center">
              {label}
            </p>
          </div>
        ))}
      </div>
    );
  }

  if (isOver) {
    return (
      <div className="space-y-fluid-section w-full max-w-fluid-sm mx-auto">
        <div className="glass-strong rounded-2xl p-fluid-card text-center glow-cta border-[var(--color-hack-success)]/30">
          <p className="text-fluid-display font-bold text-[var(--color-hack-success)] mb-2">
            Time&apos;s up.
          </p>
          <p className="text-fluid-lg text-[var(--color-hack-text-soft)]">
            The hackathon has ended. Time to present your work!
          </p>
        </div>
        {/* Temporary: test confetti button — remove when done testing
        <div className="flex justify-center">
          <button
            type="button"
            onClick={fireCongratulationsConfetti}
            className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-hack-muted)] text-[var(--color-hack-muted)] hover:border-[var(--color-hack-accent)] hover:text-[var(--color-hack-accent)] transition-colors"
          >
            🎉 Test confetti
          </button>
        </div> */}
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
    <div className="space-y-fluid-section w-full">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-fluid-grid max-w-fluid-sm mx-auto w-full">
        {units.map(({ value, label, pad: shouldPad }) => (
          <div
            key={label}
            className="glass-card rounded-2xl p-fluid-card glow-accent/50 transition-shadow"
          >
            <div className="h-fluid-cell flex items-center justify-center">
              <span
                className="text-fluid-display font-bold tabular-nums text-[var(--color-hack-accent-bright)] font-[family-name:var(--font-mono)] animate-tick"
                key={`${label}-${value}`}
              >
                {shouldPad ? pad(value) : String(value)}
              </span>
            </div>
            <p className="text-fluid-sm font-medium uppercase tracking-wider text-[var(--color-hack-muted)] mt-2 text-center">
              {label}
            </p>
          </div>
        ))}
      </div>
      {/* Temporary: test confetti button — remove when done testing
      <div className="flex justify-center">
        <button
          type="button"
          onClick={fireCongratulationsConfetti}
          className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-hack-muted)] text-[var(--color-hack-muted)] hover:border-[var(--color-hack-accent)] hover:text-[var(--color-hack-accent)] transition-colors"
        >
          🎉 Test confetti
        </button>
      </div> */}
    </div>
  );
}
